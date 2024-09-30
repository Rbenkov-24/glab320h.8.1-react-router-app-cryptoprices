import { Link } from "react-router-dom";

// define the currencies function component
export default function Currencies() {
  const currencies = [ //array of currency objects
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ];

  return (
    <div className="currencies">
      {currencies.map((coin) => {
        const { name, symbol } = coin;

        return (
          // create a link for each currency
          <Link key={symbol} to={`/price/${symbol}`}>  
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
}