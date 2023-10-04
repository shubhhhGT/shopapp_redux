import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import toast from 'react-hot-toast'
import Product from '../components/Product '

const Home = () => {

    const API_URL = 'https://fakestoreapi.com/products';

    // Loading state to show loading
    const [loading, setLoading] = useState(false);

    // Initializing a state variable 'cards' using the 'useState' hook with an empty array as the initial state.
    const [cards, setCards] = useState([])

    async function fetchProductData(){
        // Initailly loading is set to true
        setLoading(true);

        // Make An APi call
        try{
            const res = await fetch(API_URL);
            const data = await res.json();
            setCards(data);
        }
        catch(error){
            toast.error(error);
            setCards([]);
        }

        // Remove Loading once data is fetched successfully
        setLoading(false);
    }

    // Fetch the data once the component is loaded
    useEffect(() => {
        fetchProductData();
    }, [])

  return (
    <div className='overflow-x-hidden w-full box-border'>
        {
            loading ? 
            (<div className='flex justify-center items-center min-h-[80vh]'>
                <Spinner/>
            </div>) :
            (cards.length > 0 ?
            (<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
                {
                    cards.map((card) => (
                        <Product key={card.id} card={card} />
                    ))
                }
            </div>):
            (<div className='flex justify-center items-center min-h-[80vh]'>
                No data Found
            </div>))
        }
    </div>
  )
}

export default Home