import './style.css';
import './component.js';

import { funnyFunky } from './component.ts';

import data from './data.json';

funnyFunky('llama');

console.log(JSON.stringify(data, null, 4));
