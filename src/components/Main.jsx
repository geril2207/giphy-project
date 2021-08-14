import { Gif } from '@giphy/react-components'
import React, { useContext, useEffect, useState } from 'react'
import { Giphy } from '../context/giphy'
import { useAsync } from 'react-async-hooks'
export default function Main() {
  const { gf } = useContext(Giphy)
  const [gif, setGif] = useState()

  async function randomGif() {
    const { data: gif } = await gf.animate('Hello world', {
      limit: 42,
    })
    console.log(gif)
    setGif(gif)
  }
  
  randomGif()

  useEffect(() => {}, [])

  return (
    <div className="main">
      {gif && gif.map((gif) => <Gif gif={gif} width={300} height={300} />)}
    </div>
  )
}
