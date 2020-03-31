import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './styles.scss';

const BuildCard = ({
  className,
  buildId,
  adaptive = false,
  status,
  commitName,
  branch,
  hash,
  author,
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
    <Link to={`builds/${buildId}`} className={classNames}>
      <div className="Build-Info">
        <div className="Build-Heading">
          <h2 className="Build-Number">
            {`#${buildId}`}
          </h2>
          <p className="Build-Name">
            {commitName}
          </p>
        </div>
        <div className="Build-Description">
          <p className="Build-CommitData">
            <span className="Build-Branch">
              {branch}
            </span>
            <span className="Build-Hash">
              {hash}
            </span>
          </p>
          <span className="Build-Author">
            {author}
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
    </Link>
  );
};

BuildCard.propTypes = {
  className: PropTypes.string,
  buildId: PropTypes.string.isRequired,
  adaptive: PropTypes.bool,
  status: PropTypes.oneOf(['success', 'danger', 'warning']).isRequired,
  commitName: PropTypes.string.isRequired,
  branch: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

BuildCard.defaultProps = {
  adaptive: false,
  className: '',
};

export default BuildCard;
