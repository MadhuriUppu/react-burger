import React from 'react';
import Layout from './components/Layout/Layout'
import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    </div>
  );
}

export default App;
