import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import SearchBox from '../components/SearchBox/SearchBox';
import Items from '../components/Items/Items';
import './App.css';

class App extends Component {
  render() {
    return (
		<div className="App">
			<SearchBox />
			<BrowserRouter>
				<Switch>			
					<Route path='/items' component={Items} />
				</Switch>
			</BrowserRouter>
	  	</div>
    );
  }
}

export default App;
