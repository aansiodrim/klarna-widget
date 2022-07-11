import React from 'react'

const LandingPage: StorefrontFunctionComponent = () => {

  const htmlString = `<klarna-placement data-key="info-page" data-locale="es-ES"></klarna-placement>`

  return (
    <div style={{ margin: '4px 0 4px' }} dangerouslySetInnerHTML={{ __html: htmlString }} />
  )
}

export default LandingPage
