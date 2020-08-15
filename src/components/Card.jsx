import React from 'react';

const Card = (props) => {
    return( 
        <div className="col-md-4 col-10 mx-auto">
            <div className="card">
                <img src={props.imgsrc}  className="card-img-top" alt={props.imgsrc} />
                {console.log(props.imgsrc)}
            </div>
        </div>
    );
}

export default Card;