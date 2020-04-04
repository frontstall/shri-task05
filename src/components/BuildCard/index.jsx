import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import cn from 'classnames';

import { ROUTES } from 'config';
import { formatHash } from 'utils';

import './styles.scss';

const Wrapper = ({
  clickable,
  route = '#',
  className,
  children,
}) => {
  const classNames = cn(
    className,
    clickable && 'Build_clickable',
  );

  return clickable
    ? <Link to={route} className={classNames}>{children}</Link>
    : <div className={classNames}>{children}</div>;
};

Wrapper.propTypes = {
  className: PropTypes.string.isRequired,
  clickable: PropTypes.bool,
  children: PropTypes.node.isRequired,
  route: PropTypes.string,
};

Wrapper.defaultProps = {
  clickable: false,
  route: '#',
};

const BuildCard = ({
  className,
  clickable = false,
  id,
  buildNumber,
  adaptive = false,
  status,
  commitMessage,
  branchName,
  commitHash,
  authorName,
  date,
  duration,
}) => {
  const classNames = cn(
    className,
    'Build',
    adaptive && 'Build_adaptive',
    `Build_status_${status}`,
  );

  return (
    <Wrapper
      route={`${ROUTES.build}/${id}`}
      className={classNames}
      clickable={clickable}
    >
      <div className="Build-Info">
        <div className="Build-Heading">
          <h2 className="Build-Number">
            {`#${buildNumber}`}
          </h2>
          <p className="Build-Name">
            {commitMessage}
          </p>
        </div>
        <div className="Build-Description">
          <p className="Build-CommitData">
            <span className="Build-Branch">
              {branchName}
            </span>
            <span className="Build-Hash">
              {formatHash(commitHash)}
            </span>
          </p>
          <span className="Build-Author">
            {authorName}
          </span>
        </div>
      </div>
      <div className="Build-Meta">
        <span className="Build-Date">
          {date}
        </span>
        <span className="Build-Duration">
          {duration}
        </span>
      </div>
    </Wrapper>
  );
};

BuildCard.propTypes = {
  adaptive: PropTypes.bool,
  authorName: PropTypes.string.isRequired,
  branchName: PropTypes.string.isRequired,
  buildNumber: PropTypes.number.isRequired,
  className: PropTypes.string,
  clickable: PropTypes.bool,
  commitHash: PropTypes.string.isRequired,
  commitMessage: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['success', 'danger', 'warning']).isRequired,
};

BuildCard.defaultProps = {
  adaptive: false,
  className: '',
  clickable: false,
};

export default BuildCard;
