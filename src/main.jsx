import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/sass/main.scss';
//import App from './App.jsx'
//import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import routes from '~react-pages'
import { Provider } from 'react-redux'
import store from './app/store'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Header/>
        <RouterProvider router={ router }/>
    <Footer/>
    </Provider>
  </React.StrictMode>,
)
