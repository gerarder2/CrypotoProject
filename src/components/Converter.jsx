import { useContext, useState } from "react"
import { CryptoContext } from "../context";

export const Converter = ({BTCprice, ETHprice, XRPprice}) => {

    const [MX, setMX] = useState(0);
    const [BTCconvert, setBTCconvert] = useState(0);
    const [ETHconvert, setETHconvert] = useState(0);
    const [XRPconvert, setXRPconvert] = useState(0);

    const onChange = (e) => {
        e.preventDefault();
        const pesos = e.target.value;
        const dolar = 17.5;
        setBTCconvert(((pesos/dolar)/BTCprice));
        setETHconvert(((pesos/dolar)/ETHprice));
        setXRPconvert(((pesos/dolar)/XRPprice));
        setMX(e.target.value);
    }

    const {crypto} = useContext(CryptoContext);
    const BTCsymbol = crypto.DISPLAY.BTC.USD.FROMSYMBOL;
    const ETHsymbol = crypto.DISPLAY.ETH.USD.FROMSYMBOL;
    const XRPsymbol = crypto.DISPLAY.XRP.USD.FROMSYMBOL;

  return (
      <>
          <div className="back4 container pb-3 bodered">
              <div className="h3 fw-bolder pt-4 mt-5 mb-4 d-flex justify-content-center">
                  CONVERT YOUR CURRENCY
              </div>
              <div className="container d-flex justify-content-center ">
                  <form className="text-center w-100">
                      <div className="row align-items-center">
                          <div className="form-group col-3">
                              <strong htmlFor="currency" className="fw-bolder h4">MX</strong>
                              <input onChange={onChange} type="number" className="form-control" id="currency" placeholder="2222" />
                          </div>
                          <div className="form-group col-3">
                              <strong htmlFor="currency" className="fw-bolder h4">BTC</strong>
                              <div id="currency" className="h5">{BTCsymbol+" "+Number(BTCconvert.toFixed(15))}</div>
                          </div>
                          <div className="form-group col-3">
                              <strong htmlFor="currency" className="fw-bolder h4">ETH</strong>
                              <div id="currency" className="h5">{ETHsymbol+" "+Number(ETHconvert.toFixed(15))}</div>
                          </div>
                          <div className="form-group col-3">
                              <strong htmlFor="currency" className="fw-bolder h4">XRP</strong>
                              <div id="currency" className="h5">{XRPsymbol+" "+Number(XRPconvert.toFixed(15))}</div>
                          </div>

                      </div>
                  </form>
              </div>
          </div>
      </>
  )
}
