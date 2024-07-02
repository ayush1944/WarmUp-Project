import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom';


function Nav() {
  const [products] = useContext(ProductContext);

  let dis_cat = products && products.reduce((acc,cv)=>[...acc, cv.category], [])
  dis_cat = [...new Set(dis_cat)]

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
    Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()}, 0.4)`;
    }

  return (
      <nav className='w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5'>
        <a 
        className='py-1 px-4 mt-[30%] border rounded border-blue-400 text-blue-400' href="/Create">
          Add New Product
          </a>
        <hr className='my-3 w-[80%] font-bold' />
        <h1 className='text-xl mb-3 w-[80%]'>Category Filter</h1>
        <div className=' w-[80%]'>
          {dis_cat.map((cat,i) => <Link key={i} to={`/?category=${cat}`} className='flex items-center'><span className='rounded-full w-[15px] h-[15px] mx-2' style={{backgroundColor: color()}}></span>{cat}</Link >
         )}
          
        </div>
      </nav>
  )
}

export default Nav
