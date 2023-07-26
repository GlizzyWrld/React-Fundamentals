import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { initialColors } from "./Colors";

const Color = () => {
    const navigate = useNavigate();
    const {color} = useParams();
    
    const colorObject = initialColors.find((c) => c.color === color);

    const isValidColor = initialColors.some((colorObj) => colorObj.color === color);

    if (!isValidColor) {
        navigate("/colors");
        return null
    }
    
    const {value} = colorObject;
    
    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div style={{ backgroundColor: value, padding: '50px' }}>
            <h1>This is {color}!</h1>
            <br/>
            <h1>ISN'T IT BEAUTIFUL!?</h1>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default Color;