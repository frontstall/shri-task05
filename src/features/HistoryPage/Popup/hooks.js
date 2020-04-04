import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { closeModal } from 'features/Modal/modalSlice';
import API from 'api';
import { ROUTES } from 'config';

const useForm = () => {
  const [commitHash, setCommitHash] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const onChange = (evt) => {
    setCommitHash(evt.target.value);
  };
  const reset = () => {
    setCommitHash('');
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const close = useCallback(() => dispatch(closeModal()), [dispatch]);
  const onSubmit = (evt) => {
    evt.preventDefault();

    API.addNewBuild({
      onRequest: () => {
        setError(false);
        setLoading(true);
      },
      onSuccess: ({ data }) => {
        setLoading(false);
        close();
        history.push(`${ROUTES.build}/${data.id}`);
      },
      onError: () => {
        setLoading(false);
        setError(true);
      },
      commitHash,
    });
  };

  return {
    loading,
    onChange,
    reset,
    value: commitHash,
    error,
    close,
    onSubmit,
  };
};

export default useForm;
