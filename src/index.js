import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";
import store from "./Redux/Store";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);



/*with no redux store:
ReactDOM.render(<App />, document.getElementById('root'));
*/
//registerServiceWorker();
