import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {

    // Accessing the 'cart' state from Redux using the useSelector hook.
    const {cart} = useSelector((state) => state);

    // State variable to keep track of the total amount in the cart.
    const [totalAmount, setTotalAmount] = useState(0);

    // Calculate the total amount whenever the 'cart' state changes.
    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])

  return (
    <div>
        {
            cart.length > 0 ?
            (<div className='max-w-6xl flex flex-col md:flex-row mx-auto justify-center'>

                <div className='w-[100%] md:w-[60%] flex flex-col p-2'>
                    {
                        cart.map((item, index) => (
                            <CartItem key={item.id} item={item} itemIndex={index} />
                        ))
                    }
                </div>

                <div className='flex flex-col mt-5 w-[100%] md:w-[40%]'>

                    <div className='justify-between flex flex-col my-14 gap-5 p-5 h-[100%]'>
                        <div className='flex flex-col gap-5'>
                            <div className='font-semibold text-xl text-green-800 uppercase'>
                                Your Cart
                            </div>
                            <div className='font-semibold text-5xl text-green-700 -mt-5 uppercase'>
                                Summary
                            </div>
                            <p className='text-xl'>
                                <span className='font-semibold text-gray-700'>
                                    Total Items: {cart.length}
                                </span>
                            </p>
                        </div>

                        <div className='flex flex-col'>
                            <p className='text-xl font-semibold'>
                                Toatal Amount: <span className='font-bold text-gray-700'>
                                    ${totalAmount}
                                </span>
                            </p>
                            <button className='bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-in
                            mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl'>
                                Checkout Now
                            </button>
                        </div>
                    </div>

                </div>

            </div>) :
            (<div className='flex flex-col justify-center items-center min-h-[80vh]'>
                <p className='mb-2 text-gray-700 text-xl font-semibold'>
                    Your Cart is empty!
                </p>
                <Link to={'/'}>
                    <button className='uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white hover:text-green-700 mt-5
                     border-2 border-green-600 font-semibold tracking-wider p-3 px-10 transition duration-300 ease-linear'>
                        Shop Now
                    </button>
                </Link>
            </div>)
        }
    </div>
  )
}

export default Cart