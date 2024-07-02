import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/Context';

function Create() {
    const [products, setproducts] = useContext(ProductContext)
    const AddProductHandler = (e)=> {
        e.preventDefault();
    }
    const product = {
        title,
        image,
        category,
        price,
        description
    }
    setproducts([...products, product])

    const [title, settitle] = useState("")
    const [image, setimage] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState("")
    const [category, setcategory] = useState("")


  return (
    <>
        <form className='p-[5%] w-screen h-screen flex flex-col itmes-center' >
            <h1 className='text-3xl mb-5 w-1/2'>Add New Product</h1>
            <input 
                type="url"  
                placeholder="image link"
                className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
                onChange={(e)=> setimage(e.target.value)}
                value={image} 
            />
            <input 
                type="text"  
                placeholder="title"
                className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
                onChange={(e)=> settitle(e.target.value)}
                value={title} 
            />
            <div className='w-1/2 flex justify-between'>
            <input 
                type="text"  
                placeholder="Category"
                className='text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
                onChange={(e)=> setcategory(e.target.value)}
                value={category} 
            />
            <input 
                type="text"  
                placeholder="price"
                className='text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
                onChange={(e)=> setprice(e.target.value)}
                value={price} 
            />
            </div>
            <textarea
                onChange={(e)=> setdescription(e.target.value)}
                value={description}
                className='text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
                rows="10" ></textarea>   
            <div
                className='w-1/2'>
                <button 
                     className='py-2 px-4 mt-[30%] border rounded border-blue-400 text-blue-400'>
                    Add New Product
                </button>
            </div>    
        </form>
    </>
  )
}

export default Create
