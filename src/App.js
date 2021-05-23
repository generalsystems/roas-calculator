import 'antd/dist/antd.less'
import './App.less';
import React from "react";
import {RecoilRoot} from 'recoil';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header';
import Main from './screens/main';
import RoasCalculator from './screens/calculator';
import RoasResults from './screens/results';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <Header />
          <Switch>
            <Route exact component={Main} path="/" />
            <Route component={RoasCalculator} path="/calculate" />
            <Route component={RoasResults} path="/results" />
          </Switch>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
