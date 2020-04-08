import React, { memo } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './styles.scss';

const Fieldset = memo(({ className, children, disabled = 'false' }) => {
  const classNames = cn(
    className,
    'Fieldset',
  );

  return (
    <fieldset className={classNames} disabled={disabled}>
      {children}
    </fieldset>
  );
});

Fieldset.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

Fieldset.defaultProps = {
  className: '',
  children: '',
  disabled: false,
};

const Legend = memo(({ children }) => (
  <p className="Fieldset-Legend">
    {children}
  </p>
));

Legend.propTypes = {
  children: PropTypes.node,
};

Legend.defaultProps = {
  children: '',
};

const Row = memo(({ children }) => (
  <div className="Fieldset-Row">
    {children}
  </div>
));

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
