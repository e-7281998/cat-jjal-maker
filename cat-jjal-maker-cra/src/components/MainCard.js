import React from 'react';

const MainCard = ({ img, onHeartClick, alreadyFavorite, heartOnMessage }) => {
    const heartIcon = alreadyFavorite ? "đ" : "đ¤";
    return (
        <div className="main-card">
            <img src={img} alt="ęł ěě´" width="400" />
            <button onClick={onHeartClick}>{heartIcon}</button>
            <p>{heartOnMessage}</p>
        </div>
    );
};

export default MainCard;