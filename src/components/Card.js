import React from 'react';

import CardInfo from './/CardInfo';

function Card(props) {

    return (
        <div className="d-inline-block w-card" onClick={(e) => props.click(props.item)}>
            <img className="w-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            {props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subTitle} link={props.item.link} />
            }
        </div>
    )

}

export default Card;