import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import projectStore, { Project } from "./stores/ProjectStore";


const mainApp = (
  <Provider projectStore={projectStore}>
      <App></App>
  </Provider>
);

ReactDOM.render(
  mainApp,
  document.getElementById("root")
);

registerServiceWorker();
