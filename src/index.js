import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { Giphy } from './context/giphy'

const gf = new GiphyFetch('gV4GZ5wp26nx0IVgx5LhducRKc1kwwyw')

ReactDOM.render(
  <React.StrictMode>
    <Giphy.Provider value={{ gf }}>
      <App />
    </Giphy.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
