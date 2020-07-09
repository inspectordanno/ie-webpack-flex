import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';

import Flex from './components/Flex';

const jsx = (
  <Flex />
);

ReactDOM.render(jsx, document.getElementById('app'));