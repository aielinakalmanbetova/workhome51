import React from 'react';
import './LottoBall.css';
interface Props {
    number: number;
}
const LottoBall: React.FC<Props> = ({number}) => {
    return (
        <div className='LottoBall'>
            {number < 10 ? `0${number}` : number}
        </div>
    );
};

export default LottoBall;