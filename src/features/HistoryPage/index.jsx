import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

const {
  navigationRoutes,
  copyrightRoutes,
} = footerRoutes;

const mapStateToProps = ({ history }) => {
  const {
    builds,
    isFetching,
  } = history;

  return {
    builds,
    isFetching,
  };
};

const HistoryPage = ({ builds, isFetching }) => (
  <div className="MainLayout">
    <HeaderUI.Container>
      <HeaderUI.Logo route={ROUTES.root}>
        <Heading color="accent">
          philip1967/my-awesome-repo
        </Heading>
      </HeaderUI.Logo>
      <HeaderUI.Menu>
        <Menu>
          <Button size="s" icon="run">
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

HistoryPage.propTypes = {
  builds: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(HistoryPage);
