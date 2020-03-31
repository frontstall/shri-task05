import React from 'react';

import {
  BuildCard,
  Button,
  HeaderUI,
  Heading,
  Menu,
  Pagination,
} from 'components';

import useHistory from './hooks';

const HistoryPage = () => {
  const {
    builds,
    loading,
  } = useHistory();

  return (
    <div className="MainLayout">
      <HeaderUI.Container>
        <HeaderUI.Logo>
          <Heading>
            School CI server
          </Heading>
        </HeaderUI.Logo>
        <HeaderUI.Menu>
          <Menu>
            <Button size="s" icon="run">
              Run build
            </Button>
            <Button asLink size="s" icon="gear" href="settings" />
          </Menu>
        </HeaderUI.Menu>
      </HeaderUI.Container>
      <main className="Main MainLayout-Content">
        <div className="Main-Container">
          <Pagination loading={loading}>
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
    </div>
  );
};

export default HistoryPage;
