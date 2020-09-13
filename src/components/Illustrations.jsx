import React from 'react';
import Particless from './Particless.jsx';
import Card from './Card';
import SortButtons from './SortButtons';
import MainAll from './FetchImages/gdratioMain.json';
import Footer from './Footer';
const SortA = () => {
	MainAll.sort( (x,y) => {
			let a = x.key, b = y.key;
			return a === "Art"? 1 : b === "Art"? 0 : -1
	});
}
const SortDes = () => {
	MainAll.sort( (x,y) => {
			let a = x.key, b = y.key;
			return a === "Design"? 1 : b === "Design"? 0 : -1
	});
}
const SortArch = () => {
	MainAll.sort( (x,y) => {
			let a = x.key, b = y.key;
			return a === "Arch"? 1 : b === "Arch"? 0 : -1
	});
}
const SortNat = () => {
	MainAll.sort( (x,y) => {
			let a = x.key, b = y.key;
			return a === "Nature"? 1 : b === "Nature"? 0 : -1
	});
}

const Pdes = () => {
	MainAll.sort( (x,y) => {
			let a = x.key, b = y.key;
			return a === "ProDesign"? 1 : b === "ProDesign"? 0 : -1
	});
}


function Sorter(what){
	if (what==="A") {
		return SortA
	}
	else if(what ==="D"){
		return SortDes
	}
	else if(what ==="Ar"){
		return SortArch
	}
	else if(what === "N"){
		return SortNat
	}
	else if(what === "PD"){
		return Pdes
	}
	else return MainAll
}

const Illustrations = ()=> {
	return (
		<>	
			<section id='header' className='mx-auto pushup'>
				<img src='images/illusion20.gif' alt="" className="pushleft" width="1000px" height="600px" /> 
			</section>
			<div className="pushup hede">Illustrations</div>
			<Particless />
			
			<div className="btn-group sortybuts">               
                        <button className="btn-primary mx-2 shadow-lg">Show All</button>
                        <button onClick={Sorter("N")} className="btn-primary mx-2 shadow-lg">Nature</button>
                        <button onClick={Sorter("D")} className="btn-primary mx-2 shadow-lg">Design</button>
                        <button onClick={Sorter("Ar")} className="btn-primary mx-2 shadow-lg">Architecture</button>
                        <button onClick={Sorter("A")} className="btn-primary mx-2 shadow-lg">Art</button>
                        <button onClick={Sorter("PD")} className="btn-primary mx-2 shadow-lg">Product Design</button>                       
            </div>

			<div className="container-fluid mb-5">
				<div className="row">
					<div className="col-10 mx-auto">
						{console.log(Sorter())}
						<div className="row gy-4">			
							{	
								Sorter().map((val, ind) => {
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
		<Footer />

		</>
	);
};

export default Illustrations;
