function CatItem(props) {
    return (
        <li>
            <img
                src={props.img}
                style={{ width: '150px' }}
            />
            <div>
                <button className="look">보기</button>
                <button className="delete">삭제</button>
            </div>
        </li>
    );
}

function Favorites({ favorites }) {
    if (favorites.length === 0) {
        return (
            <div> 사진 위 하트를 눌러 고양이 사진을 저장해보아요!</div>
        );
    }
    return (
        <ul className="favorites">
            {favorites.map(cat =>
                <CatItem className="catitem" img={cat} key={cat} />
            )}
        </ul>)
};

export default Favorites;