import React from 'react';
import Particless from './Particless.jsx';
import Card from './Card';
import MainAll from './FetchImages/gdratioMain.json';
// import Nature from './FetchImages/gdratioNature.json';
// import Pdesign from './FetchImages/gdratioProductDesign.json';
// import Architecture from './FetchImages/gdratioArchitecture.json';
// import Design from './FetchImages/gdratioDesign.json';
// import Art from './FetchImages/gdratioArt.json';

const Illustrations = ()=> {
	return (
		<>	
			<section id='header' className='mx-auto pushup'>
				<img src='images/illusion20.gif' alt="" className="pushleft" width="1000px" height="600px" /> 
			</section>
			<div className="pushup hede">Illustrations</div>
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
									/>)
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
