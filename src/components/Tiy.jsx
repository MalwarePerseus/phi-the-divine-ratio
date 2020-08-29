import React from 'react';
import  './diy.css';

const TIY = ()=> {
	return (
		<>	
			<span>
				<h1>Welcome To the Try it Yourself Component Page</h1>
				<h1>Golden Ratio Generator</h1>
				<h2>Check golden ratio on any image</h2>
					<h4>Upload an image and check the proportions with a fibonacci golden spiral overlay</h4>
			</span>

			<div >
				<input type='file' id="image_upload" className="inputfile" />
				<label htmlFor="image_upload" className="button btnPush btnOrange btnUpload">Upload a new background</label>
				<small>or paste it (<span className="paste-key">CTRL</span> + v)</small>
			</div>

			<div className="with-frame">
				<center>
					<canvas id="mainCanvas" width="545" height="355"></canvas>
				</center>
			</div>
	{/* 
			<div className="start-hint">
				Move the golden spiral overlay!
				<img className="pointer-arrow" src="/images/arrow.png" alt="Arrow" />
			</div> */}

			<div className="controls">
				<button id="flip">
					Flip axis
				</button>
				<button id="invertColor">
					Invert color
				</button>
				{/* <button onClick= () => {window.location.reload()}>
					Reset
				</button> */}
			</div>

			<br />

			<div>
  				<img className="wave-art-image" src="/images/golden-ratio-wave-art.jpg" alt="Golden ratio wave art" />
			</div>

				<br />
	
			<script src="./diy.js"></script>


			<div>
			<canvas id="myCanvas" width="300" height="300" ></canvas>
    {/* <script type="text/javascript">
        var c=document.getElementById("myCanvas");
        var cxt=c.getContext("2d");
        var centerX = 150;
        var centerY = 150;
        cxt.moveTo(centerX, centerY);
    
        var gap = 1.8; // increase this for spacing between spiral lines        
        var STEPS_PER_ROTATION = 60; // increasing this makes the curve smoother
    
        var increment = 2*Math.PI/STEPS_PER_ROTATION;		
        var theta = increment;
        while( theta < 20*Math.PI) {
           var newX = centerX + theta * Math.cos(theta) * gap; 
           var newY = centerY + theta * Math.sin(theta) * gap; 
           cxt.lineTo(newX, newY);
           theta = theta + increment;
        }
        cxt.stroke(); // draw the spiral
    </script> */}
			</div>
		</>
	);
};

export default TIY;
