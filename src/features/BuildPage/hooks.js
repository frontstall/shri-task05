import { useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import API from 'api';
import { ROUTES } from 'config';
import { useRepoName } from 'hooks';
import { getRepoSettings } from 'features/MainPage/repoSettingsSlice';

import { getBuildDetails, getBuildLog } from './buildSlice';

const useBuild = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRepoSettings());
    dispatch(getBuildDetails(id));
    dispatch(getBuildLog(id));
  }, [dispatch, id]);

  const repoName = useRepoName();
  const buildDetails = useSelector(({ build }) => build);
  const { commitHash } = buildDetails;

  const rebuild = useCallback(() => {
    API.addNewBuild({
      onRequest: () => {},
      onSuccess: ({ data }) => {
        history.push(`${ROUTES.build}/${data.id}`);
      },
      commitHash,
    });
  }, [commitHash, history]);

  return {
    ...buildDetails,
    repoName,
    rebuild,
  };
};

export default useBuild;
