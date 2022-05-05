import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

//dev-5n477a4z.us.auth0.com


//I1wHbLECjbZJYP67wl6IIXAfWNAcXfW5
ReactDOM.render(

   <Auth0Provider domain='dev-5n477a4z.us.auth0.com'
   clientId='I1wHbLECjbZJYP67wl6IIXAfWNAcXfW5'
   redirectUri={window.location.origin}
   cacheLocation = 'localstorage'>


      <ProductsProvider>
   <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
   </FilterProvider>
</ProductsProvider>
   </Auth0Provider>


, document.getElementById('root'))
