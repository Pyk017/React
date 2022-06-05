const CurrencyRow = (props) => {
  const {
    currencyOptions,
    selectCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;

  console.log(selectCurrency);

  return (
    <div className="currency-row">
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select value={selectCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option, idx) => (
          <option value={option} key={idx}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyRow;
