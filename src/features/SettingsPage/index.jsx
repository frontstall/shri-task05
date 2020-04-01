import React from 'react';

import {
  Button,
  ButtonGroup,
  FieldsetUI,
  Footer,
  HeaderUI,
  Heading,
  Input,
  InputGroup,
  Navigation,
  Text,
} from 'components';
import { footerRoutes, ROUTES } from 'config';

import useForm from './hooks';

const {
  navigationRoutes,
  copyrightRoutes,
} = footerRoutes;

const SettingsPage = () => {
  const {
    getValue,
    getHandler,
    clear,
    onSubmit,
    loading,
    onCancel,
    error,
  } = useForm();

  return (
    <div className="MainLayout">
      <HeaderUI.Container>
        <HeaderUI.Logo route={ROUTES.root}>
          <Heading>
            School CI server
          </Heading>
        </HeaderUI.Logo>
      </HeaderUI.Container>
      <main className="Main MainLayout-Content">
        <div className="Main-Container">
          <Heading level={2} size="m" color="accent">
            Settings
          </Heading>
          <form onSubmit={onSubmit}>
            <FieldsetUI.Fieldset disabled={loading}>
              <FieldsetUI.Legend>
                Configure repository connection and synchronization settings.
              </FieldsetUI.Legend>
              <FieldsetUI.Row>
                <InputGroup
                  clearable
                  id="repository"
                  placeholder="user-name/repo-name"
                  onChange={getHandler('repository')}
                  onClear={() => clear('repository')}
                  value={getValue('repository')}
                  required
                >
                  GitHub repository
                  <Text color="danger">*</Text>
                </InputGroup>
              </FieldsetUI.Row>
              <FieldsetUI.Row>
                <InputGroup
                  clearable
                  id="command"
                  placeholder="npm ci && npm run build"
                  onChange={getHandler('command')}
                  onClear={() => clear('command')}
                  value={getValue('command')}
                  required
                >
                  Build command
                  <Text color="danger">*</Text>
                </InputGroup>
              </FieldsetUI.Row>
              <FieldsetUI.Row>
                <InputGroup
                  clearable
                  id="branch"
                  placeholder="master"
                  onChange={getHandler('branch')}
                  onClear={() => clear('branch')}
                  value={getValue('branch')}
                >
                  Main branch
                </InputGroup>
              </FieldsetUI.Row>
              <FieldsetUI.Row>
                Synchronize every
                <Input
                  id="interval"
                  placeholder="10"
                  size="s"
                  align="right"
                  inline
                  onChange={getHandler('interval')}
                  value={getValue('interval')}
                >
                  Main branch
                </Input>
                minutes
              </FieldsetUI.Row>
              <FieldsetUI.Row>
                <ButtonGroup>
                  <Button
                    type="submit"
                    color="accent"
                  >
                    Save
                  </Button>
                  <Button onClick={onCancel}>
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
        </div>
      </main>
      <Footer>
        <Navigation routes={navigationRoutes} />
        <Navigation routes={copyrightRoutes} />
      </Footer>
    </div>
  );
};

export default SettingsPage;
