import orderBy from 'lodash/orderBy';
import isEmpty from 'lodash/isEmpty';
import last from 'lodash/last';

const STATES = {
  building: 'building',
  idle: 'idle',
  fetching: 'fetching',
};

export default class Queue {
  constructor(api, builder, statusesToBuild) {
    this.api = api;
    this.state = STATES.idle;
    this.currentBuild = null;
    this.builds = [];
    this.statuses = statusesToBuild;
    this.builder = builder;
  }

  getBuilds = async () => {
    this.state = STATES.fetching;
    const { data: builds } = await this.api.getBuilds();
    const buildsToBuild = builds
      .filter(({ status }) => this.statuses.includes(status));
    const sortedBuilds = orderBy(buildsToBuild, 'buildNumber', 'desc');
    this.builds.push(...sortedBuilds);
    this.state = STATES.idle;
  }

  build = async () => {
    if (this.state !== STATES.idle) return;

    if (isEmpty(this.builds)) return;

    const {
      id: buildId,
      buildCommand,
      branchName,
      repoName,
    } = last(this.builds);
    this.state = STATES.building;

    await this.api.startBuild({ buildId, dateTime: new Date() });

    const {
      success,
      buildLog,
      duration,
    } = await this.builder({ buildCommand, branchName, repoName });

    await this.api.finishBuild({
      buildId,
      success,
      buildLog,
      duration,
    });
    this.builds.pop();
    this.state = STATES.idle;

    if (!isEmpty(this.builds)) {
      await this.build();
    }
  }

  addBuild = (build) => {
    this.builds.unshift(build);
    this.build();
  }

  init = async () => {
    await this.getBuilds();
    await this.build();
  }
}
