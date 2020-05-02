import React from 'react';

import {
  Heading,
  FieldsetUI,
  InputGroup,
  ButtonGroup,
  Button,
  Text,
} from 'components';

import useForm from './hooks';

const Popup = () => {
  const {
    loading,
    onChange,
    reset,
    value,
    error,
    close,
    onSubmit,
  } = useForm();

  return (
    <form onSubmit={onSubmit}>
      <Heading level={2} size="l" color="accent">
        New build
      </Heading>
      <FieldsetUI.Fieldset disabled={loading}>
        <FieldsetUI.Row>
          <InputGroup
            clearable
            id="hash"
            placeholder="Commit hash"
            onChange={onChange}
            onClear={reset}
            value={value}
            required
          >
            Enter the commit hash which you want to build.
          </InputGroup>
        </FieldsetUI.Row>
        <FieldsetUI.Row>
          {/*
          //@ts-ignore */}
          <ButtonGroup>
            <Button
              type="submit"
              color="accent"
            >
              Run build
            </Button>
            <Button onClick={close}>
              Cancel
            </Button>
          </ButtonGroup>
        </FieldsetUI.Row>
        {error
          && (
          <FieldsetUI.Row>
            <Text color="danger">Something went wrong. Try again later</Text>
          </FieldsetUI.Row>
          )}
      </FieldsetUI.Fieldset>
    </form>
  );
};

export default Popup;
