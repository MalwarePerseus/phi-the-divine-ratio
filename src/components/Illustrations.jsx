import React from 'react';
import Particless from './Particless.jsx';
import ImageFetch from './ImageFetch';

const Illustrations = ()=> {
	return (
		<>	
			<section id='header' className='mx-auto pushup'>
				<img src='images/illusion20.gif' alt="" className="pushleft" width="1000px" height="600px" /> 
			</section>
			<div className="pushup hede">Welcome to The Illustrations Component Page</div>
			<Particless />
			<ImageFetch />			
		</>
	);
};

export default Illustrations;
