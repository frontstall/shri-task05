import Git from 'nodegit';

export const clone = async (pathToRemoteRepo, pathToLocalRepo) => {
  const cloneOptions = {
    fetchOpts: {
      callbacks: {
        certificateCheck() { return 0; }, // required for OS X
        credentials(url, userName) {
          return Git.Cred.sshKeyFromAgent(userName);
        },
      },
    },
  };

  await Git.Clone(pathToRemoteRepo, pathToLocalRepo, cloneOptions);
};

export const getCommitData = async (path, hash) => {
  const repo = await Git.Repository.open(path);
  const commit = await repo.getCommit(hash);
  const commitMessage = commit.message();
  const authorName = commit.author().name();

  return {
    authorName,
    commitMessage,
  };
};
