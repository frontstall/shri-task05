import faker from 'faker';

const builder = ({ buildCommand, branchName, repoName }) => new Promise((resolve) => {
  console.log(`building '${branchName}' in '${repoName}' with '${buildCommand}'`);
  const duration = faker.random.number({ min: 10 * 1000, max: 2 * 60 * 60 * 1000 });
  const buildLog = faker.lorem.paragraph(10);
  const success = faker.random.boolean();

  setTimeout(() => {
    resolve({ duration, buildLog, success });
  }, 3000);
});

export default builder;
