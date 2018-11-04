import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './components/app'
module.exports = function render(initialState) {
  let content = renderToString(
       <App />
  );
return {content};
}