import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


//Questao do relogio na prova

function Relogio(props){
	return (
		<div>
			<h1>Olá</h1>
			<h2>Agorasão {props.horario.toLocaleString()}</h2>
		</div>
		)
}

function tick(){
	ReactDOM.render(<Relogio horario={new Date()}/>, document.getElementById('root'));
}

setInterval(tick, 1000);

class Relogio extends React.Component{
	constructor(props){
		super(props);
		this.state = {horario: new Date()};
		
	}

	
	componentDidMount(){
		this.timerID = setInterval(
		() => this.thick(), 1000); 
		
	}
	
	componentWillUnmount(){
		clearInterval(this.timerID);
	}
	
	thick(){
		this.setState({
		horario: new Date()}
		);		
	}
	
	
	render(){
			return 	<div>
						<h1>Olá</h1>
						<h2>Agora são {this.state.horario.toLocaleString()}</h2>
					</div>
	}
}
ReactDOM.render(<Relogio horario={new Date()}/>, document.getElementById('root'));



	

