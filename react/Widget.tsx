import React, { useContext } from 'react'
import { ProductContext } from 'vtex.product-context'

const Widget: StorefrontFunctionComponent = () => {

  const { selectedItem } = useContext(ProductContext)
  const commercialOffer = selectedItem?.sellers[0]?.commertialOffer
  const amount = commercialOffer.Price.toString().includes(".") ? commercialOffer.Price.toString().replace(/\./g, "") : commercialOffer.Price + '00'
  const htmlString = `<klarna-placement data-key="credit-promotion-badge" data-locale="es-ES" data-purchase-amount=${amount}></klarna-placement>`

  return (
    <div style={{ margin: '4px 0 4px' }} dangerouslySetInnerHTML={{ __html: htmlString }} />
  )
}

export default Widget
