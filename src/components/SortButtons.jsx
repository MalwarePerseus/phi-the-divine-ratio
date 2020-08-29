import React from 'react';
// import MainAll from './FetchImages/gdratioMain.json';

// function NatSort(){
//     MainAll.sort((x,y) => {
//         let a = x.key , b = y.key;
//         return a === "Art" ? 1 : b === "Art"? 0 : -1;
//     });
// }

const SortButtons = () => {
    return (
        <>
            <div className="btn-group sortybuts">               
                        <button className="btn-primary mx-2 shadow-lg">Show All</button>
                        <button className="btn-primary mx-2 shadow-lg">Nature</button>
                        <button className="btn-primary mx-2 shadow-lg">Design</button>
                        <button className="btn-primary mx-2 shadow-lg">Architecture</button>
                        <button className="btn-primary mx-2 shadow-lg">Art</button>
                         <button className="btn-primary mx-2 shadow-lg">Product Design</button>                       
            </div>
        </>
    );

}

export default SortButtons;