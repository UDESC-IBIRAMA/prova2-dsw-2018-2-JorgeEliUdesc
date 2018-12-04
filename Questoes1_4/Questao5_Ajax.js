
const VEICULOS_PATH = 'https://swapi.co/api/vehicles/?search=';


class App{
	constructor(){
		this._onJsonReady = this._onJsonReady.bind(this);
		this._onSubmit = this._onSubmit.bind(this);
		
		this.personagens = [];
		
		const form = document.querySelector('form');
		form.addEventListener('submit',this._onSubmit);
		const container = document.querySelector('#container');
		container.innerHTML = '<TABLE></TABLE>';
	}
	
	_onSubmit(event){
		event.preventDefault();
		const textInput = document.querySelector('#person-text');
		const query = encodeURIComponent(textInput.value);
									
		fetch(VEICULOS_PATH + query)
									.then(this._onResponse)
									.then(this._onJsonReady);
									
	}
	
	_onResponse(response){
		return response.json();
	}
	
	_onJsonReady(json){
		console.log(json);
		
		if(!json.results){
			return;		
		}
		
		for(const item of json.results){
			this.personagens.push(item);
		}
		
		this._renderPersonagens();
	}
	
	_renderPersonagens(){
		const container = document.querySelector('#container');
			
		for(const p of this.personagens){
			const tr = document.createElement('tr');
			const td = document.createElement('td');
			td.innerHTML = p.name;
			tr.appendChild(td);
			container.appendChild(tr);
		}
	}
}