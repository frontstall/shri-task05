import { useSelector, useDispatch } from 'react-redux';

import { TRootState } from 'reducers';
import { TAppDispatch } from '..';

export const useRepoName = () => useSelector(
  ({ settings }: TRootState) => settings.name,
);

export const useAppDispatch = () => useDispatch<TAppDispatch>();
