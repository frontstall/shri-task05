import React, { memo } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import Button from 'components/Button';

import './styles.scss';

const Placeholder = memo(({ className, description, buttonConfig }) => {
  const classNames = cn(
    className,
    'Placeholder',
  );

  const { text, route } = buttonConfig;

  return (
    <div className={classNames}>
      <p className="Placeholder-Description">
        {description}
      </p>
      <Button
        asLink
        href={route}
        className="Placeholder-Button"
        color="accent"
      >
        {text}
      </Button>
    </div>
  );
});

Placeholder.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string.isRequired,
  buttonConfig: PropTypes.shape({
    text: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
  }).isRequired,
};

Placeholder.defaultProps = {
  className: '',
};

export default Placeholder;
