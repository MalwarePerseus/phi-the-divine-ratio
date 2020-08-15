import React from 'react';
import Particless from './Particless.jsx';
import Card from './Card';
import MainAll from './FetchImages/gdratioMain.json';

const Illustrations = ()=> {
	return (
		<>	
			<section id='header' className='mx-auto pushup'>
				<img src='images/illusion20.gif' alt="" className="pushleft" width="1000px" height="600px" /> 
			</section>
			<div className="pushup hede">Welcome to The Illustrations Component Page</div>
			<Particless />
			<div className="container-fluid mb-5">
				<div className="row">
					<div className="col-10 mx-auto">
						<div className="row gy-4">			
							{
								MainAll.map((val, ind) => {
									return( <Card 
										key={ind}
										imgsrc={val.url}	
									/>
								);
								})
							}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Illustrations;
