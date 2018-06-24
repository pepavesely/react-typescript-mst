import * as React from 'react';
import './../styles/main.css';
import ProjectList from './ProjectList';

class App extends React.Component {
  public render() {
    return (
        <div>
          <h1>Project List</h1>
          <ProjectList></ProjectList>
        </div>
    );
  }
}

export default App;
