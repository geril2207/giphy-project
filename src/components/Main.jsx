import { Gif } from '@giphy/react-components'
import React, { useContext, useState } from 'react'
import { useAsync } from 'react-async-hooks'
import { Giphy } from '../context/giphy'
export default function Main() {
  const { gf } = useContext(Giphy)
  const [gif, setGif] = useState()

  useAsync(async () => {
    const { data } = await gf.random({ tag: 'welcome' })
    console.log(data)
    setGif(data)
  }, [])
  return <>{gif && <Gif gif={gif} width={800} />}</>
}
