import React from 'react';
import Particless from './Particless';
const About = ()=> {
	return (
		<>
			<section id='header' className='mx-auto pushup'>
				<img src='images/illusion20.gif' alt="" className="pushleft" width="1000px" height="600px" /> 
			</section>
			<div className="pushup hede">Project | About | Dev</div>
			<Particless />
			<div id='content' className='mx-auto col-md-10'>
				<h1>The Project</h1>
					<h2>Technologies Used</h2>
					<div className="container" align="left">
						<ul className="mx-5">
							<li>React JS</li>
							<li>Bootstrap <b>5 alpha</b></li>
							<li>Google Fonts</li>
							<li>Node JS API fetches for Getting the Images</li>
							<li>Particle js </li>
							<li>HTML Canvas</li>
						</ul>
					</div>	
					<h2>Project Highlights</h2>
						<ul>
							<li>The Illustrations Page uses API fetch to Scrap imaged feom Google, and Put it in a JSON file, which is then Mapped through and Images are shown/sorted.</li>
							<li>The Whole website uses Bootstrap 5 which has just arrived and is still in Alpha Version</li>
							<li>The Try it Yourself Page uses the HTML canvas and Modular JS to make the Reactive Illustration Possible</li>
							<li>The Header is made using the Particle.js Library. </li>
							<li>The WHole Website is created using the latest version of React, thus is Totally Optimized and Modularized</li>
							<li>I was using Git while Creating this Project(I'm Learning Project management, :heart: ) So the whole Process/Commits can be seen on my GitHub.</li>
						</ul>
				<h1>About the Dev</h1>
					<h2>School Student, Goes to APS Delhi Cantt, in class 11, way too OP</h2>		 
			</div>
		</>
	);
};

export default About;
