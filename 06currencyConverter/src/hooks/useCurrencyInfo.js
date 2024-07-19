import { useState, useEffect } from 'react';

let currency = 'usd';
let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

function useCurrencyInfo(currency) {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency]);
    
    console.log(data);
    return data;
}

export default useCurrencyInfo;