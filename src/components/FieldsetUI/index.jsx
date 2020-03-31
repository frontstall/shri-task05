import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './styles.scss';

const Fieldset = ({ className, children }) => {
  const classNames = cn(
    className,
    'Fieldset',
  );

  return (
    <fieldset className={classNames}>
      {children}
    </fieldset>
  );
};

Fieldset.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Fieldset.defaultProps = {
  className: '',
  children: '',
};

const Legend = ({ children }) => (
  <p className="Fieldset-Legend">
    {children}
  </p>
);

Legend.propTypes = {
  children: PropTypes.node,
};

Legend.defaultProps = {
  children: '',
};

const Row = ({ children }) => (
  <div className="Fieldset-Row">
    {children}
  </div>
);

Row.propTypes = {
  children: PropTypes.node,
};

Row.defaultProps = {
  children: '',
};


const FieldsetUI = {
  Fieldset,
  Row,
  Legend,
};

export default FieldsetUI;
