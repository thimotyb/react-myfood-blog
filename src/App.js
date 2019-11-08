import React from 'react';
import Sidebar from './Sidebar';
import TopMenu from './TopMenu';
import Content from './Content';
import './App.css';

class App extends React.Component {

  render() {

    return(
    <div>

      {/* Sidebar (hidden by default) */} 
      <Sidebar/>
      
      {/* Top menu */}
      <TopMenu/>
        
      {/* PAGE CONTENT! */}
      <Content/>

    </div>

    );

  };

};

export default App;
