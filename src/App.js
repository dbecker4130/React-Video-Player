import React, { Component } from 'react';
import './App.scss';
import { bakerStars } from '../public/BakerStars.jpg';

class App extends Component {
	constructor() {
			super() 

			this.state = {
					skipVideo: false
			};
			this.onClick = this.onClick.bind(this);
	}
	
  render() {
		const backgroundStyles = {
			backgroundImage: `url(${ bakerStars })`
		};
      
    return (
			!this.state.skipVideo ?
			<div className="video" style={ backgroundStyles }>
				<video src="https://s3-us-west-2.amazonaws.com/dt-becker-portfolio/Baker-trails.mp4" autoPlay controls loop></video>
				<button 
					className="skip-btn"
					onClick={this.onClick}
					>
					Skip Video &#10151;</button>
			</div> :
			
      <div className="thumbnail">
				<h1>Daniel Becker</h1>

				<audio id="player" src="https://s3-us-west-2.amazonaws.com/dt-becker-portfolio/Breezin+(Remastered).mp3"></audio>
				<div className="controls"> 
					<button onClick={this.onPlay}>Play</button> 
					<button onClick={this.onPause}>Pause</button> 
				</div>

        <div className="App-intro">
          <p>Cillum excepteur quis aute anim exercitation adipisicing enim voluptate nulla ut veniam quis Lorem consequat. Veniam incididunt est est velit Lorem minim nostrud. Est consequat mollit non anim cillum proident amet dolor enim do. Labore fugiat minim proident ex et tempor ea id voluptate sit pariatur non velit. Ad officia Lorem aliquip consequat.</p>
					<p>Cillum excepteur quis aute anim exercitation adipisicing enim voluptate nulla ut veniam quis Lorem consequat. Veniam incididunt est est velit Lorem minim nostrud. Est consequat mollit non anim cillum proident amet dolor enim do. Labore fugiat minim proident ex et tempor ea id voluptate sit pariatur non velit. Ad officia Lorem aliquip consequat.</p>
					<p>Cillum excepteur quis aute anim exercitation adipisicing enim voluptate nulla ut veniam quis Lorem consequat. Veniam incididunt est est velit Lorem minim nostrud. Est consequat mollit non anim cillum proident amet dolor enim do. Labore fugiat minim proident ex et tempor ea id voluptate sit pariatur non velit. Ad officia Lorem aliquip consequat.</p>
        </div>


      </div>
    );
	}
	
	onClick() {
		this.setState({
			skipVideo: !this.state.skipVideo,
		});
	}
	onPlay() {
		document.getElementById('player').play();
		console.log('play FIRED');
	}
	onPause() {
		document.getElementById('player').pause();
		console.log('pause FIRED');
	}


}

export default App;