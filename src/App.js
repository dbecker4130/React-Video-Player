import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Reset.scss';
import './App.scss';

class App extends Component {
	constructor() {
			super() 
			this.state = {
					skipVideo: false,
					data: []
			};
			this.onNext = this.onNext.bind(this);
	}

	componentDidMount() {
		fetch('../public/assets.json')
			.then( (res) => {
				return res.json()
			 })
				.then( (json) => {
					this.setState({data: json});
				});
	}
	
  render() {
    return (
			!this.state.skipVideo ?
			<div className="video-container">
				{
					this.state.data.map( (data, index) => (
						<video loop src={data["video"]} controls autoPlay key={index}/>
					))
				}

				<button
					className="skip-btn"
					onClick={this.onNext}>
					Skip
					<i className="fas fa-fast-forward"></i>
				</button>
			</div> :
			
      <div className="thumbnail">
				<div className="name-container">
					<h3>DANIEL</h3>
						<img className="logo" src="https://s3-us-west-2.amazonaws.com/dt-becker-portfolio/dtb-logo.png" />
					<h3>BECKER</h3>
				</div>

				<audio 
					id="player" 																	src="https://s3-us-west-2.amazonaws.com/dt-becker-portfolio/Breezin+(Remastered).mp3">
				</audio>
				
				{/* {
					this.state.data.map( (data, index) => (
						<audio id="player" src={data["audio"]} key={index}>
						</audio>
					))
				} */}

        <div className="App-intro">
					<div className="controls"> 
						<button onClick={this.onPlay}>
							<i className="far fa-play-circle"></i>
						</button> 
						<button onClick={this.onPause}>
							<i className="far fa-pause-circle"></i>
						</button> 
					</div>
					{
						this.state.data.map( (data, index) => (
							<p key={index}>{data["text"]}</p>
						))
					}
        </div>
      </div>
    );
	}
	
	onNext() {
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

App.PropTypes

export default App;