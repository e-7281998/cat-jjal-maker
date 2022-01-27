import logo from './logo.svg';
import React from 'react';
import './css/style.css';
import Title from './components/Title';
import MainCard from './components/MainCard';
import Favorites from './components/Favorites';
import Form from './components/Form';

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

const fetchCat = async (text) => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};

const App = () => {
  // const [mainCat, setMainCat] = React.useState(CAT1);
  const [mainCat, setMainCat] = React.useState();

  const [counter, setCounter] = React.useState(() => {
    return jsonLocalStorage.getItem('counter');
  });
  const [favorites, setFavorites] = React.useState(() => {
    return (jsonLocalStorage.getItem('favorites') || []);
  });
  const [heartOnMessage, setHeatOnMessage] = React.useState('');

  const alreadyFavorite = favorites.includes(mainCat);

  async function setInitialCat() {
    const newCat = await fetchCat('first cat');
    setMainCat(newCat);
  }
  React.useEffect(() => {
    setInitialCat();
  }, [])

  async function updateMainCat(value) {
    const newCat = await fetchCat(value);

    setMainCat(newCat);
    setHeatOnMessage('');
    setCounter((prev) => {
      const nextCounter = prev + 1;
      jsonLocalStorage.setItem('counter', nextCounter);

      return nextCounter;
    });
  }

  function handleHeartClick() {
    if (alreadyFavorite) {
      setHeatOnMessage('이미 저장됨');
    } else {
      const nextFavorites = [...favorites, mainCat];
      setFavorites(nextFavorites);
      jsonLocalStorage.setItem('favorites', nextFavorites);
      setHeatOnMessage('');
    }
  }

  const counterTitle = counter === null ? '' : counter + '번째 '

  return (
    <div>
      <Title>{counterTitle} 고양이 가라사대</Title>
      <Form updateMainCat={updateMainCat} />
      <MainCard img={mainCat} onHeartClick={handleHeartClick} alreadyFavorite={alreadyFavorite} heartOnMessage={heartOnMessage} />
      <Favorites favorites={favorites} />
    </div>
  )
}

export default App;
