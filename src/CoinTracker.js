import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMymoney] = useState('');
  const [convert, setConverter] = useState('');

  const onChange = (event) => {
    setConverter(event.target.value);
  };

  const handleInput = (event) => {
    setMymoney(event.target.value);
  };

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => setCoins(json));
    setLoading(false);
  }, []);
  return (
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      <h2>Coins {loading ? 'Loading...' : coins.length}</h2>
      {loading ? (
        ''
      ) : (
        <div>
          <input
            value={myMoney}
            onChange={handleInput}
            placeholder="write your money here.."
            type="number"
          />
          <select onChange={onChange}>
            <option value="">select on chage..</option>
            {coins.map((coin, id) => (
              <option
                key={id}
                value={coin.quotes.USD.price}
                symbol={coin.symbol}
              >
                {coin.name}({coin.symbol}) : $ {coin.quotes.USD.price}
              </option>
            ))}
          </select>
          {convert !== '' ? (
            <div>
              <h3>now your dollar: {myMoney}$</h3>
              <h3>changed: {myMoney / convert}</h3>
            </div>
          ) : null}{' '}
        </div>
      )}
    </div>
  );
}

export default CoinTracker;

//
