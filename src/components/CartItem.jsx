import React from 'react'
import {MdDelete} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/slices/CartSlice'
import toast from 'react-hot-toast'

const CartItem = ({item, itemIndex}) => {

  // Access the Redux dispatch function for actions.
  const dispatch = useDispatch();

  // Access the 'cart' state from Redux to determine cart length.
  const {cart} = useSelector((state) => state);

  // Function to remove an item from the cart and trigger a toast notification.
  const removeFromCart = () => {
    dispatch(remove(item.id))
    toast.error('Item removed')
  }

  return (
    <div className={`flex p-2 md:p-5 justify-between ${itemIndex+1 === cart.length ? 'border-none' : 'border-b-2'} border-slate-500 my-2 md:mx-5 items-center`}>
    
      <div className='flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center'>

        <div className='w-[30%]'>
          <img src={item.image} alt='' className='object-cover' />
        </div>

        <div className='w-[100%] md:w-[70%] md:ml-10 self-start space-y-5'>
          <h1 className='text-xl text-slate-700 font-semibold'>
            {item.title}
          </h1>
          <p className='text-base text-slate-700 font-medium'>
            {item.description.split(' ').slice(0,15).join(' ') + '...'}
          </p>
          <div className='flex justify-between items-center'>
            <p className='font-bold text-lg text-green-600'>
              ${item.price}
            </p>
            <button className='bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3'
            onClick={removeFromCart}>
              <MdDelete className='text-red-800 group-hover:text-white h-4 w-4'/>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItem