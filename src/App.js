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
      
    return (
			!this.state.skipVideo ?
			<div className="video-container">
				<video src="https://s3-us-west-2.amazonaws.com/dt-becker-portfolio/Short+Clip+1.mp4" autoPlay loop controls></video>
				<button 
					className="skip-btn"
					onClick={this.onClick}>
					Skip
					<i className="fas fa-fast-forward"></i>
				</button>
			</div> :
			
      <div className="thumbnail">
				{/* <h1>Daniel Becker</h1> */}
				<div className="name-container">
					<h3>Daniel</h3>
						<img className="logo" src="../public/dtb-logo.png" />
					<h3>Becker</h3>
				</div>

				<audio 
					id="player" 																	src="https://s3-us-west-2.amazonaws.com/dt-becker-portfolio/Breezin+(Remastered).mp3">
				</audio>


        <div className="App-intro">
					<div className="controls"> 
						<button onClick={this.onPlay}>
							<i className="far fa-play-circle"></i>
						</button> 
						<button onClick={this.onPause}>
							<i className="far fa-pause-circle"></i>
						</button> 
					</div>
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