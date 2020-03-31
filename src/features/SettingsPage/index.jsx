import React from 'react';

import {
  HeaderUI,
  Heading,
  FieldsetUI,
  InputGroup,
  ButtonGroup,
  Button,
  Input,
  Text,
} from 'components';

const {
  Fieldset,
  Legend,
  Row,
} = FieldsetUI;

const SettingsPage = () => (
  <div className="MainLayout">
    <HeaderUI.Container>
      <HeaderUI.Logo>
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
        <form>
          <Fieldset>
            <Legend>
              Configure repository connection and synchronization settings.
            </Legend>
            <Row>
              <InputGroup
                clearable
                id="repository"
                placeholder="user-name/repo-name"
              >
                GitHub repository
                <Text color="danger">*</Text>
              </InputGroup>
            </Row>
            <Row>
              <InputGroup
                clearable
                id="command"
                placeholder="npm ci && npm run build"
              >
                Build command
              </InputGroup>
            </Row>
            <Row>
              <InputGroup
                clearable
                id="branch"
                placeholder="master"
              >
                Main branch
              </InputGroup>
            </Row>
            <Row>
              Synchronize every
              <Input
                id="interval"
                placeholder="10"
                size="s"
                align="right"
                inline
              >
                Main branch
              </Input>
              minutes
            </Row>
            <Row>
              <ButtonGroup>
                <Button
                  type="submit"
                  color="accent"
                >
                  Save
                </Button>
                <Button>
                  Cancel
                </Button>
              </ButtonGroup>
            </Row>
          </Fieldset>
        </form>
      </div>
    </main>
  </div>
);

export default SettingsPage;
