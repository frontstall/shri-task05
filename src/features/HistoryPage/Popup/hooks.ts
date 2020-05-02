import { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { closeModal } from 'features/Modal/modalSlice';
import API from 'api';
import { ROUTES } from 'config';
import { useAppDispatch } from 'hooks';

const useForm = () => {
  const [commitHash, setCommitHash] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCommitHash(evt.target.value);
  };
  const reset = () => {
    setCommitHash('');
  };
  const dispatch = useAppDispatch();
  const history = useHistory();
  const close = useCallback(() => dispatch(closeModal()), [dispatch]);
  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
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
