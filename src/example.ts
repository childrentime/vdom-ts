// src/example.ts
import { createElement, VNode } from './index';

const vnode: VNode = createElement('div', { id: 'app' },
  createElement('h1', null, 'Hello, Virtual DOM'),
  createElement('p', null, 'This is a simple example.')
);

console.log(JSON.stringify(vnode, null, 2));