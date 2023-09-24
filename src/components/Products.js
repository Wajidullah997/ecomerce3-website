import React from 'react'
import ProductCard from './ProductCard';

const Products = ({products}) => {
    return (
        <div className='py-10'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-2xl py-2 bg-black text-white w-80 text-center'>Shopping everyday</h1>
                <span className='bg-black h-[3px] w-20'></span>
                <p className='max-w[700px] text-gray-600 text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit
                    architecto quas, minima placeat adipisci itaque voluptatem velit possimus autem
                    iusto impedit fugiat hic neque tenetur nam non quaerat eaque, illo dolorem.
                    Doloribus facilis quibusdam expedita, beatae minima, incidunt odio in laudantium ullam
                    ex molestiae alias consequuntur quam dicta? Suscipit!</p>
            </div>
            <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-4'>
                {
                    products.map((items)=>(
                            <ProductCard key={items._id} product={items } />
                    ))
              }
         </div>
        </div>
    );
}
export default Products
