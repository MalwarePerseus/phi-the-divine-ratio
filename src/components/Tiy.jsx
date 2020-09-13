import React from 'react';
// import  './diy.css';
import Particless from './Particless';
import Footer from './Footer';
import ScriptTag from 'react-script-tag';


const TIY = ()=> {
	return (
		<>	
			<section id='header' className='mx-auto pushup'>
				<img src='images/illusion20.gif' alt="" className="pushleft" width="1000px" height="600px" /> 
			</section>
			<div className="pushup hede">Try it Yourself</div>
			<Particless/>
			<div className="container col-md-10"><center>
			<span>
				<h1>Check The Golden Ratio On Any Image</h1>
				
					<h4>Upload an image and check the proportions with a fibonacci golden spiral overlay</h4>
			</span>

			<ScriptTag src="./diy.js" type="text/javascript"/>
			</center>
			<label className="input shadow-lg"><input type="file" id="inp"/>Upload Image</label><center>
			<canvas id="canvas" className="meracanvs"></canvas>
			<center><img className="sspiral" src="./images/Fibonacci_spiral.svg" alt=""/></center>
			<hr/>
			<h1>Check if You're Face is in the Divine Ratio!</h1>
			
			</center>
			<ScriptTag src="./diy1.js" type="text/javascript"/>
			<label className="input shadow-lg"><input type="file" id="imp"/>Upload Selfie!</label><center>
			<canvas id="canvasfc" className="meracanvsfc"></canvas>
			<center><img className="sface" src="./images/facehigh.png" alt=""/></center>
			<hr/>
			<h2>Try It Yourself on the Monalisa Painting!</h2> 
				<iframe width='800' height='586' title="monalisa" className="hez"  src='https://www.wolframcloud.com/obj/4dfff556-98c7-4e36-b72c-078529d0cf1e' frameborder='0'></iframe>
			<hr/>
			<h1>Use the Tool used for Measuring Golden Ratio! Virtually!</h1>
			<iframe width='700' height='550' title="scale"  className="hez" src='https://www.wolframcloud.com/obj/83a4d76b-6210-4959-a56c-8eb6f72b3fb1' frameborder='0'></iframe>
			</center></div>
			<Footer />
		</>
	);
};

export default TIY;
