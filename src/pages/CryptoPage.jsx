import { useContext, useEffect } from "react"
import { Navbar, CryptoCard, Converter } from "../components"
import { getCrypto } from '../API/getCrypto'
import { CryptoContext } from "../context";

export const CryptoPage = () => {
    
    const {isLoading, setIsLoading, update, user, crypto} = useContext(CryptoContext);

    const actualizar = async () => {
      setIsLoading(true);
      const newInfo = await getCrypto();
      update(newInfo);
      setIsLoading(false);
    }

  useEffect(() => {
      const inverval = setInterval(() => {
      actualizar();
    }, 10000)
  }, [])

  return (
    <>
      <Navbar name={user.name} lastname={user.lastname} email={user.email} phone={user.phone} />

      <div className="text-center">
        <div className="row justify-content-around">
          <CryptoCard cryptoDISPLAY={crypto.DISPLAY.BTC} title={'BTC'} />
          <CryptoCard cryptoDISPLAY={crypto.DISPLAY.ETH} title={'ETH'} />
          <CryptoCard cryptoDISPLAY={crypto.DISPLAY.XRP} title={'XRP'} />
        </div>
      </div>
      <Converter BTCprice={crypto.RAW.BTC.USD.PRICE} ETHprice={crypto.RAW.ETH.USD.PRICE} XRPprice={crypto.RAW.XRP.USD.PRICE} />
    </>
  )
}
