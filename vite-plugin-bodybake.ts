import React from 'react';
import { renderToString } from 'react-dom/server';
import type { Plugin } from 'vite';
import App from './App';
export function bodyBake(): Plugin {
  return { name: 'orion-results-body-bake', apply: 'build', transformIndexHtml: {
    order: 'post', handler(html) {
      const body = renderToString(React.createElement(App));
      if (!body.includes('<h1') || !body.includes('main-content')) throw new Error('Missing product content');
      const anchor = '<div id="root"></div>';
      if (!html.includes(anchor)) throw new Error('Missing page root');
      return html.replace(anchor, () => `<div id="root">${body}</div>`);
    },
  }};
}
