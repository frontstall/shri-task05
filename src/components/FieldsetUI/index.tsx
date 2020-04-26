import React, { memo } from 'react';

import cn from 'classnames';

import './styles.scss';

interface IFieldset {
  className?: string,
  children: React.ReactElement,
  disabled?: boolean,
}

const Fieldset: React.FC<IFieldset> = memo(({
  className,
  children,
  disabled = false,
}) => {
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

interface IChildren {
  children: React.ReactNode,
}

const Legend = memo(({ children }: IChildren) => (
  <p className="Fieldset-Legend">
    {children}
  </p>
));

const Row = memo(({ children }: IChildren) => (
  <div className="Fieldset-Row">
    {children}
  </div>
));


const FieldsetUI = {
  Fieldset,
  Row,
  Legend,
};

export default FieldsetUI;
