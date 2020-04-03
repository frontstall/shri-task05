import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { closeModal } from 'features/Modal/modalSlice';

const useForm = () => {
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const onChange = (evt) => {
    setValue(evt.target.value);
  };
  const reset = () => {
    setValue('');
  };
  const dispatch = useDispatch();
  const close = useCallback(() => dispatch(closeModal()), [dispatch]);

  return {
    loading,
    onChange,
    reset,
    value,
    error,
    close,
  };
};

export default useForm;
