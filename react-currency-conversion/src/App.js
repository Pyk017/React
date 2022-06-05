import "./App.css";
import CurrencyRow from "./CurrencyRow";
import { useEffect, useState } from "react";

function App() {
  const API_KEY = `MTmDOSvEdrqlZpAt76IKHS6166oZVxZA`;

  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  console.log("exchangeRate :>> ", exchangeRate);
  console.log("amount :>> ", amount);

  let fromAmount = null,
    toAmount = null;

  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    fromAmount = amount;
    toAmount = amount / exchangeRate;
  }
  console.log("fromAmount :>> ", fromAmount);
  console.log("toAmount :>> ", toAmount);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", API_KEY);

    let requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch("https://api.apilayer.com/exchangerates_data/latest", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        let firstCurrency = Object.keys(data.rates)[0];
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setExchangeRate(data.rates[firstCurrency]);
      })
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    if (toCurrency && fromCurrency) {
      let myHeaders = new Headers();
      myHeaders.append("apikey", API_KEY);

      let requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };

      fetch(
        `https://api.apilayer.com/exchangerates_data/latest?base=${fromCurrency}&symbols=${toCurrency}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          setExchangeRate(data.rates[toCurrency]);
        })
        .catch((error) => console.log("error", error));
    }
  }, [toCurrency, fromCurrency]);

  return (
    <div className="App">
      <h2>Convert Currency</h2>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        amount={fromAmount}
        onChangeAmount={handleFromAmountChange}
      />
      <div className="equals">=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        amount={toAmount}
        onChangeAmount={handleToAmountChange}
      />
    </div>
  );
}

export default App;
