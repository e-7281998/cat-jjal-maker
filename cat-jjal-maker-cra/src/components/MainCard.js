import React from 'react';

const MainCard = ({ img, onHeartClick, alreadyFavorite, heartOnMessage }) => {
    const heartIcon = alreadyFavorite ? "💖" : "🤍";
    return (
        <div className="main-card">
            <img src={img} alt="고양이" width="400" />
            <button onClick={onHeartClick}>{heartIcon}</button>
            <p>{heartOnMessage}</p>
        </div>
    );
};

export default MainCard;