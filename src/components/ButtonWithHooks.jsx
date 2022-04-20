import React, { useState } from 'react'


function ButtonWithHooks() {
    const [key1, setKey1] = useState("This is the default state of a function component.")

    const [key2, setKey2] = useState(0)


  return (
    <>
    <div>{key1}</div>

    <div>{key2}</div>
    
    <button onClick={() => setKey1("This is the NEW state of a function component.")}>Click me</button>

    <button onClick={() => setKey2(1)}>Click me</button>
    </>
  )
}

export default ButtonWithHooks