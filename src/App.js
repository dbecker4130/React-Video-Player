import React, { Component } from 'react';
// import './App.css';

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
			<div>
			<video src="https://s3-us-west-2.amazonaws.com/dt-becker-portfolio/Baker-trails.mp4" autoPlay loop></video>
			<button 
				className="skip-btn"
				onClick={this.onClick}
				>
				Skip Video</button>
			</div> :
			
      <div className="App">
				<h1>Thumbnail</h1>

        <p className="App-intro">
          Cillum excepteur quis aute anim exercitation adipisicing enim voluptate nulla ut veniam quis Lorem consequat. Veniam incididunt est est velit Lorem minim nostrud. Est consequat mollit non anim cillum proident amet dolor enim do. Labore fugiat minim proident ex et tempor ea id voluptate sit pariatur non velit. Ad officia Lorem aliquip consequat.
        </p>

      </div>
    );
	}
	
	onClick() {
		this.setState({
			skipVideo: !this.state.skipVideo,
		});
	}


}

export default App;