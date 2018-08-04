import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "mobx-react";
import projectStore, { Project } from "../stores/ProjectStore";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <Provider projectStore={projectStore}>
        <App></App>
      </Provider>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
