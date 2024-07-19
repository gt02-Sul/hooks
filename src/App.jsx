import Button1 from './components/Button/Button1'
import { useState } from 'react'

import './App.css'
import Button2 from './components/Button/Button2'
import Header from './components/Header/Header'
import Requisicao from './components/Requisicao/Requisicao'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Requisicao />
      <Button1 />
      <Button2 />
    </>
  )
}

export default App
