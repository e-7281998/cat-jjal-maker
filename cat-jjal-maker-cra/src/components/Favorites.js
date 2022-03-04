import { useState } from 'react';

function handleShowClick(e) {
    e.preventDefault();
    window.open(e.target.value);
}

function CatItem(props) {
    const [over, setOver] = useState(false);

    function handleDeleteClick(e) {
        e.preventDefault();
        props.onRemoveClick(e.target.value);
    }
    return (
        <li >
            <form>
                <img
                    src={props.img}
                    style={{ width: '150px' }}
                    onMouseOver={() => setOver(true)}
                    onMouseLeave={() => setOver(false)}
                    className={over ? 'on' : ''}
                />
                <div className={over ? 'over' : ''}
                    onMouseOver={() => setOver(true)}
                    onMouseLeave={() => setOver(false)}>
                    <button onClick={handleShowClick} value={props.img}>보기</button>
                    <button onClick={handleDeleteClick} value={props.img}>삭제</button>
                </div>
            </form>

        </li >
    );
}

function Favorites({ favorites, onRemoveClick }) {
    if (favorites.length === 0) {
        return (
            <div> 사진 위 하트를 눌러 고양이 사진을 저장해보아요!</div>
        );
    }
    return (
        <ul className="favorites">
            {favorites.map(cat =>
                <CatItem className="catitem" img={cat} key={cat} onRemoveClick={onRemoveClick} />
            )}
        </ul>)
};

export default Favorites;