import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const Product  = ({card}) => {

    // Access the 'cart' state from Redux to check if the item is already in the cart.
    const {cart} = useSelector((state) => state);

    // Initialize the Redux dispatch function.
    const dispatch = useDispatch()

    // Function to remove the item from the cart and display a toast notification.
    const removeFromCart = () => {
        dispatch(remove(card.id))
        toast.error('Item Removed')
    }

    // Function to add the item to the cart and display a toast notification.
    const addToCart = () => {
        dispatch(add(card))
        toast.success('Added to Cart')
    }

  return (
    <div className='group flex flex-col items-center rounded-xl shadow-[0px_0px_10px_0px#b3b3b3] hover:scale-110 hover:shadow-[0px_0px_95px_53px_#00000024] cursor-pointer transition duration-300 ease-in
    gap-3 ml-5 p-4 mt-10 justify-between'>

        <div>
            <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>
                {card.title}
            </p>
        </div>

        <div>
            <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>
                {card.description.split(' ').slice(0,10).join(' ') + '...'}
            </p>
        </div>

        <div className='h-[180px]'>
            <img src={card.image} alt='' className='h-full w-full' />
        </div>

        <div className='flex justify-between gap-16'>
            <div>
                <p className='text-green-600 font-bold gap-12  w-full mt-5'>
                    ${card.price}
                </p>
            </div>

            {
                cart.some((item) => item.id === card.id) ? 
                (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 mt-5 uppercase
                 group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in'
                 onClick={removeFromCart}>
                    Remove Item
                </button>):
                (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 mt-5 uppercase
                 group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in'
                 onClick={addToCart}>
                    Add to Cart
                </button>)
            }
        </div>

    </div>
  )
}

export default Product 