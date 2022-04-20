import React from 'react'

export default function Header({to}) {

  /* return <div>Header {to}</div>  */

 /* const toHeader = "This is the end of the header." */

    return React.createElement("div", null, `Header ${to}`)
   
}
