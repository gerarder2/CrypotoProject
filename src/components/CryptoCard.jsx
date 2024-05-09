
export const CryptoCard = ({cryptoDISPLAY, title}) => {
  return (
    <>
      <div className="col-3 back4 mt-5 p-4 bodered">
        <div className="h3 fw-bolder">{title}</div>
        <br />
        <div className="d-flex flex-row justify-content-start">
          <div className="h6 col-4 text-end" >Market: &nbsp;&nbsp; </div>
          <p className="text-muted h6 col-8 text-start" >{cryptoDISPLAY.USD.MARKET}</p>
        </div>
        <div className="d-flex flex-row justify-content-start">
          <div className="h6 col-4 text-end" >Open Day: &nbsp;&nbsp; </div>
          <p className="text-muted h6 col-8 text-start" >{cryptoDISPLAY.USD.OPENDAY}</p>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <div className="h6 text-end col-4" >Price: &nbsp;&nbsp; </div>
          <p className="text-muted h6 col-8 text-start" >{cryptoDISPLAY.USD.PRICE}</p>
        </div>
        <div className="d-flex flex-row justify-content-center mb-4">
          <div className="h6 text-end col-4" >Last Market: &nbsp;&nbsp; </div>
          <p className="text-muted h6 col-8 text-start" >{cryptoDISPLAY.USD.LASTMARKET}</p>
        </div>
      </div>
    </>
  )
}
