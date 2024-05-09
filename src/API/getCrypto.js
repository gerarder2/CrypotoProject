

export const getCrypto = async () => {
    const info = await fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP&tsyms=USD")
    const crypto = await info.json();
    console.log(crypto);
    return crypto;
}