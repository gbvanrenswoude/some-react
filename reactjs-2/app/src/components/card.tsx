import React from 'react';
import ReactCardFlip from 'react-card-flip';

interface CardProps {
    fullname: string;
    back: string;
}

const CardStyle = {
    border: '1px solid #03506f',
    borderRadius: '30px',
    padding: '20px',
    margin: '20px',
    width: '200px',
    height: '30px',
    backgroundColor: '#ffcccc',
};

const CardStyleBack = {
    border: '1px solid #03506f',
    borderRadius: '30px',
    padding: '20px',
    margin: '20px',
    width: '200px',
    height: '30px',
    backgroundColor: '#ff9999',
};

export const Card = (props: CardProps) => {
    const [isFlipped, setFlipped] = React.useState(false);

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div style={CardStyle} className="CardFront" onClick={() => setFlipped(prev => !prev)}>
                <div>
                    <span className="fullname" aria-label="fullname">
                        {props.fullname}
                    </span>
                </div>
            </div>
            <div style={CardStyleBack} onClick={() => setFlipped(prev => !prev)} className="CardBack">
                <p>{props.back}</p>
            </div>
        </ReactCardFlip>
    );
};
