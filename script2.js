class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleLocatorChange = this.handleLocatorChange.bind(this);
		this.state = {zip: ''};
	}

	handleLocatorChange(value) {
		this.setState({zip: value});
	}

	render() {
		var games = [{title: 'Garbage Bong', 
					imgSrc: 'https://images.bigcartel.com/product_images/145480801/BongWaterBanana.jpg?auto=format&fit=max&h=1000&w=1000'}
					, {title: 'Sex Cemetary',
					imgSrc: 'https://broadly-images.vice.com/images/articles/meta/2016/05/18/former-cemetery-fuckers-explain-why-people-fuck-in-cemeteries-1463574276.jpg?crop=1xw:0.8441176470588235xh;0xw,0xh&resize=1000:*&output-quality=70'}]

		var gameElements = games.map((game) =>
			<Gamepreview title={game.title} imgsrc={game.imgSrc}/>
		);

		return <div>
			{gameElements}
		</div>;
	}
}

class Gamepreview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div>
			<button>FUCK YES</button>
			<img src={this.props.imgsrc} style={{height: 300 +'px', width: 300 + 'px', display: 'inline-block'}} />
			<button>FUCK NO</button>
			<p style={{fontStyle: "italic", marginLeft: 100 + 'px'}}> {this.props.title}</p>
		</div>;
	}
}

/*
class Locator extends React.Component {
	constructor(props) {
		super(props);
		this.handleKey = this.handleKey.bind(this);
	}

	handleKey(e) {
		this.props.onChange(e.target.value);
	}

	render() {
		return <div><p>Please put in your zip code.</p>
			<input id="zip" onKeyUp={this.handleKey}/>
		</div>;
	}
}

class Reps extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.zip == '97232') {
			this.state = {name: "Rob Nosse", party: "Democrat", branch: "house"};
		}
		else {
			this.state = {name: "N/A", party: "N/A", branch: "N/A"};
		}

		if (this.state.name != "N/A") {
			return <div>
				<p><b>Name: {this.state.name}, Zip: {this.props.zip}</b></p>
				<p>{this.state.party}</p>
			</div>;				
		} else {
			return <div>No location selected. {this.props.zip}</div>
		}
	}
}

*/

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

