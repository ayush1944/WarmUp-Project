import axios from '../utils/Axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading';

function Details() {
  const [product, setproduct] = useState(null)

  const { id } = useParams();

  const getsingleproduct = async () => {
    try {
      const {data} = await axios.get(`/products/${id}`)
      setproduct(data);
    } catch (error) {
    console.log(error);
    }
    }

    useEffect(()=>{
      getsingleproduct()
    }, [])
  return ( product ?
    <div className="w-[70%] flex h-full justify-between items-center m-auto p-[10%] ] ">
        <img 
        className="object-contain h-[80%] w-[40%]"
        src={`${product.image}`}
        alt=""
        />
            <div className="content w-[50%]">
                <h1 className="text-3xl font-semibold ">
                {product.title}
                </h1>
                <h3 className="text-zinc-400 my-5 ">{product.category}</h3>
                <h2 className="text-red-300 mb-3">Rs. {product.price}</h2>
                <p className='mb-8'>
                {product.description}
                </p>
              <div className='flex flex-row justify-between'>
              <Link  className='py-3 px-6 border rounded border-blue-200 text-blue-300 mx-2' >Add to Cart</Link>
              <Link className='py-3 px-6 border rounded border-red-200 text-red-300 mx-2 ' >Buy Now</Link>
              </div>
        </div>
    </div> : <Loading/>
  ) 
}

export default Details
