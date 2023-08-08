import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ProviderStoreContext } from './store';
import { RootNavigation } from './root-navigation';

ReactDOM.render(
  <BrowserRouter>
    <ProviderStoreContext>
      <RootNavigation />
    </ProviderStoreContext>
  </BrowserRouter>,
  document.getElementById('root')
);