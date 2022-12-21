import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    // console.log("This is use effect")
    try {


      setCart(JSON.parse(localStorage.getItem('cart')))


    } catch (error) {
      console.log(error)
      localStorage.clear()
    }
  }, [])


  const saveCart = (cart) => {
    // localStorage.setItem('cart', cart)
    localStorage.setItem('cart', JSON.stringify(cart))
    let subtotal = 0
    for (let itemcode in cart) {
      subtotal += cart[itemcode].qty * cart[itemcode].price
    }
    setSubTotal(subtotal)
  }
  const clearCart = () => {
    localStorage.removeItem('cart')
    setCart({})
    saveCart({})
    
  }
  
  const removeFromCart = (itemcode, qty, price, name, size, variant) => {

    let newCart =JSON.parse(JSON.stringify(cart))
    console.log(newCart)
    if (itemcode in newCart) {
      newCart[itemcode].qty -= qty
      if (newCart[itemcode].qty <= 0) {
        delete newCart[itemcode]
      }
    }
    setCart(newCart)
    saveCart(newCart)
  }
  const addtoCart = (itemcode, qty, price, name, size, variant) => {
    let newCart = { ...cart }
    if (itemcode in newCart) {
      newCart[itemcode].qty += qty
    } else {
      newCart[itemcode] = { qty, price, name, size, variant }

    }
    setCart(newCart)
    saveCart(newCart)
  }
  return <>
    <Navbar cart={cart} addtoCart={addtoCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}  />
    <Component cart={cart} addtoCart={addtoCart} removeFromCart={removeFromCart} clearCart={clearCart}  subTotal={subTotal} {...pageProps} />
    <Footer />
  </>
}
