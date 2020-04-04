import { createElement } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './styles.scss';

const Heading = ({
  className,
  level = 1,
  size = 'xl',
  color = 'default',
  children,
}) => {
  const classNames = cn(
    className,
    'Heading',
    `Heading_size_${size}`,
    `Heading_color_${color}`,
  );

  return createElement(`h${level}`, { className: classNames }, children);
};

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
  size: PropTypes.oneOf(['m', 'l', 'xl']),
  color: PropTypes.oneOf(['default', 'accent']),
};

Heading.defaultProps = {
  children: '',
  className: '',
  level: 1,
  size: 'xl',
  color: 'default',
};

export default Heading;
