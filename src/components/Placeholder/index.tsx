import React, { memo } from 'react';

import cn from 'classnames';

import Button from 'components/Button';

import './styles.scss';

interface IPlaceholder {
  className?: string,
  description: string,
  buttonConfig: {
    text: string,
    route: string,
  }
}

const Placeholder: React.FC<IPlaceholder> = memo(({
  className,
  description,
  buttonConfig,
}) => {
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

export default Placeholder;
