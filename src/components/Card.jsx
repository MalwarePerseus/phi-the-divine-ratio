import React from 'react';

const Card = (props) => {
    return( 
        <div className="col-md-4 col-10 mx-auto">
            <div className="card">
                <img src={props.imgsrc}  className="img-responsive shadow-lg p-2" alt={props.imgsrc} />
               
            </div>
        </div>
    );
}

export default Card;