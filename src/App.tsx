import 'antd/dist/antd.css';
import './styles/index.scss';

import React from 'react';

import Homepage from './view/Homepage';

const App: React.FC = () => (
  <div className="app">
    <Homepage />
  </div>
);

export default App;
