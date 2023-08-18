import './index.css';
import { App } from './app';
import * as serviceWorker from './serviceWorker';

// Create the skills assessment app
const app = new App();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();