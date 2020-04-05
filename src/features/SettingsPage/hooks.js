import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ROUTES, API_ROUTES, DEFAULT_PERIOD } from 'config';
import { callApi, minToSec } from 'utils';

const FIELDS = {
  repository: 'repository',
  command: 'command',
  branch: 'branch',
  interval: 'interval',
};

const useForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [repository, setRepository] = useState('');
  const [command, setCommand] = useState('');
  const [branch, setBranch] = useState('');
  const [interval, setInterval] = useState('');
  const history = useHistory();

  const fieldsData = {
    [FIELDS.repository]: {
      value: repository,
      onChange: (evt) => {
        setRepository(evt.target.value);
      },
    },
    [FIELDS.command]: {
      value: command,
      onChange: (evt) => {
        setCommand(evt.target.value);
      },
    },
    [FIELDS.branch]: {
      value: branch,
      onChange: (evt) => {
        setBranch(evt.target.value);
      },
    },
    [FIELDS.interval]: {
      value: interval,
      onChange: (evt) => {
        const { value } = evt.target;
        if (!(/^\d+$/.test(value)) && value) return;
        setInterval(evt.target.value);
      },
    },
  };

  const getValue = (fieldName) => fieldsData[fieldName].value;
  const getHandler = (fieldName) => fieldsData[fieldName].onChange;
  const clear = (fieldName) => {
    const setValue = getHandler(fieldName);
    setValue({ target: { value: '' } });
  };

  const onRequest = () => {
    setError(false);
    setLoading(true);
  };

  const onSuccess = () => {
    setLoading(false);
    history.push(ROUTES.root);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const data = {
      period: minToSec(interval) || DEFAULT_PERIOD,
      fullRepoName: repository,
      buildCommand: command,
      mainBranch: branch,
    };

    callApi({
      method: 'POST',
      url: API_ROUTES.settings,
      data,
      onRequest,
      onSuccess,
      onError,
    });
  };

  const onCancel = () => {
    history.push(ROUTES.root);
  };

  return {
    clear,
    getHandler,
    getValue,
    loading,
    onSubmit,
    onCancel,
    error,
  };
};

export default useForm;
