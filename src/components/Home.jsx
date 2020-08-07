import React from 'react';
import './Home.css';
import Particless from './Particless.jsx'
import HomeContent from './HomeContent.jsx';

const Home = () => {
	return (
		<>
			<section id='header' className='mx-auto pushup'>
				<img src='images/illusion20.gif' alt="" className="pushleft" width="1000px" height="600px" /> 
			</section>
			<div className="pushup hede">Phi φ | The Golden Ratio </div>
			<Particless />
			<HomeContent />
		</>
	);
};

export default Home;
