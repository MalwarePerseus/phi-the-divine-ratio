import React from 'react';
import Particless from './Particless';
const About = ()=> {
	return (
		<>
			<section id='header' className='mx-auto pushup'>
				<img src='images/illusion20.gif' alt="" className="pushleft" width="1000px" height="600px" /> 
			</section>
			<div className="pushup hede">About | Project | Dev</div>
			<Particless />
			<h1>Welcome to The About Component Page</h1>
		</>
	);
};

export default About;
