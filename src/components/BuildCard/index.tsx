import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';

import { ROUTES } from 'config';
import { formatHash, STATUSES } from 'utils';

import './styles.scss';

interface IWrapper {
  className: string,
  clickable: boolean,
  route?: string,
  children: React.ReactNode,
}

const Wrapper: React.FC<IWrapper> = memo(({
  clickable,
  route = '#',
  className,
  children,
}) => {
  const classNames = cn(
    className,
    clickable && 'Build_clickable',
  );

  return clickable
    ? <Link to={route} className={classNames}>{children}</Link>
    : <div className={classNames}>{children}</div>;
});

interface IBuildCard {
  className?: string,
  clickable?: boolean,
  id: string,
  buildNumber: number,
  adaptive?: boolean,
  status: typeof STATUSES[keyof typeof STATUSES],
  commitMessage: string,
  branchName: string,
  commitHash: string,
  authorName: string,
  date: string,
  duration: string,
}

const BuildCard = ({
  className,
  clickable = false,
  id,
  buildNumber,
  adaptive = false,
  status,
  commitMessage,
  branchName,
  commitHash,
  authorName,
  date,
  duration,
}: IBuildCard) => {
  const classNames = cn(
    className,
    'Build',
    adaptive && 'Build_adaptive',
    `Build_status_${status}`,
  );

  return (
    <Wrapper
      route={`${ROUTES.build}/${id}`}
      className={classNames}
      clickable={clickable}
    >
      <div className="Build-Info">
        <div className="Build-Heading">
          <h2 className="Build-Number">
            {`#${buildNumber}`}
          </h2>
          <p className="Build-Name">
            {commitMessage}
          </p>
        </div>
        <div className="Build-Description">
          <p className="Build-CommitData">
            <span className="Build-Branch">
              {branchName}
            </span>
            <span className="Build-Hash">
              {formatHash(commitHash)}
            </span>
          </p>
          <span className="Build-Author">
            {authorName}
          </span>
        </div>
      </div>
      <div className="Build-Meta">
        <span className="Build-Date">
          {date}
        </span>
        <span className="Build-Duration">
          {duration}
        </span>
      </div>
    </Wrapper>
  );
};

export default BuildCard;
