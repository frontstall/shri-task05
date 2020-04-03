import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  BuildCard,
  Button,
  Footer,
  HeaderUI,
  Heading,
  Menu,
  Navigation,
  Pagination,
} from 'components';
import { footerRoutes, ROUTES } from 'config';
import { openModal } from 'features/Modal/modalSlice';

import { getBuilds } from './historySlice';
import Popup from './Popup';


const {
  navigationRoutes,
  copyrightRoutes,
} = footerRoutes;

const HistoryPage = () => {
  const {
    repoName,
    builds,
    isFetching,
  } = useSelector(({ history, settings }) => ({
    repoName: settings.name,
    builds: history.builds,
    isFetching: history.isFetching,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBuilds());
  }, [dispatch]);
  const handleOpenModal = useCallback(() => dispatch(openModal()), [dispatch]);

  return (
    <div className="MainLayout">
      <HeaderUI.Container>
        <HeaderUI.Logo route={ROUTES.root}>
          <Heading color="accent">
            {repoName}
          </Heading>
        </HeaderUI.Logo>
        <HeaderUI.Menu>
          <Menu>
            <Button size="s" icon="run" onClick={handleOpenModal}>
              Run build
            </Button>
            <Button asLink size="s" icon="gear" href={ROUTES.settings} />
          </Menu>
        </HeaderUI.Menu>
      </HeaderUI.Container>
      <main className="Main MainLayout-Content">
        <div className="Main-Container">
          <Pagination isFetching={isFetching}>
            {builds.map(({
              buildId,
              status,
              commitName,
              branch,
              hash,
              author,
              date,
              duration,
            }) => (
              <BuildCard
                adaptive
                clickable
                key={buildId}
                buildId={buildId}
                status={status}
                commitName={commitName}
                branch={branch}
                hash={hash}
                author={author}
                date={date}
                duration={duration}
              />
            ))}
          </Pagination>
        </div>
      </main>
      <Footer>
        <Navigation routes={navigationRoutes} />
        <Navigation routes={copyrightRoutes} />
      </Footer>
    </div>
  );
};

export default HistoryPage;

export const HistoryPagePopup = Popup;
