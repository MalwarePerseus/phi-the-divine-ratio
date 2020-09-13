import React from 'react';
import Particless from './Particless';
import Footer from './Footer';
const About = ()=> {
	return (
		<>
			<section id='header' className='mx-auto pushup'>
				<img src='images/illusion20.gif' alt="" className="pushleft" width="1000px" height="600px" /> 
			</section>
			<div className="pushup hede">Project | About | Dev</div>
			<Particless />
			<div id='content' className='aboutpg mx-auto col-md-10'>
				<h1>The Project</h1>
					<h2>Project Description</h2>
						<div className="container abtpdes shadow-lg mb-4">
						The Project that I've created is a Really fun to do site. Anyone can Understand the History and Underlying phenomenon of the Golden Ratio through it, and can see Illustrations or Try it on his/her own images. Thus being able to Identify The Golden Ratio in Everyday Objects Easily. 
							
						<br/>	I've given it stunning Graphics using the Particles.js and I've used the ALPHA version of Bootstrap 5, which has just come out! and the main framework is the latest React.js 16.
							And in the Illustrations Section, the Project is Fetching images from Google(WebScrapping, i created this with node.js and cheerio). Thus no Images are stored right on the Project, making it able to Display 4000 high quality images, while still being light-weight

						<br/>	I plan to give this Project a huge Upgrade soon, where, i'll use the Posenet Library to make the Golden Ratio Scanner Realtime AI, where right now, i'm using a Static vector created using HTML Canvas.
							Hope You Like my Project.
						</div>
					<h2>Technologies Used</h2>
					<div className="container abt" align="left">
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
					<div className="container shadow-lg" align="left">
						<ul>
							<li>The Illustrations Page uses API fetch to Scrap imaged feom Google, and Put it in a JSON file, which is then Mapped through and Images are shown/sorted.</li>
							<li>The Whole website uses Bootstrap 5 which has just arrived and is still in Alpha Version</li>
							<li>The Try it Yourself Page uses the HTML canvas and Modular JS to make the Reactive Illustration Possible</li>
							<li>The Header is made using the Particle.js Library. </li>
							<li>The WHole Website is created using the latest version of React, thus is Totally Optimized and Modularized</li>
							<li>I was using Git while Creating this Project(I'm Learning Project management, :heart: ) So the whole Process/Commits can be seen on my GitHub.</li>
						</ul>
					</div>
				<h1>About the Dev</h1>
					<p>My Name is Deepak Singh, & I'm a Student of Class 11A in Army Public School, Delhi Cantt.
						I'm a Completely self taught Developer and love Minimalistic B&W Designing.
						My Main Powers are Javascipt, Python, PHP & Hardware. Hope that You Like My submission!</p>		 
			</div>
			<Footer />
		</>
	);
};

export default About;
