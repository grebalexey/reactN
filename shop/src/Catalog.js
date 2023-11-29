import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import ProductCard from './ProductCard'
export default function Catalog() {
    const productsList = [
        {
            id: 1,
            name: "Prod1",
            image:{
                0:"src.png",
                1:"src2.png"
            },
            price: "19.99"
        },
        {
            id: 2,
            name: "Prod2",
            image: "   ",
            price: "19.99"
        },
        {
            id: 3,
            name: "Prod3",
            image: "   ",
            price: "19.99"
        },
        {
            id: 4,
            name: "Prod4",
            image: "   ",
            price: "19.99"
        },
        {
            id: 5,
            name: "Prod5",
            image: "   ",
            price: "19.99"
        },
        {
            id: 6,
            name: "Prod6",
            image: "   ",
            price: "19.99"
        },
    ]

    const itemsPerPage = 3
    const {CurPage,SetCurrentPage} = useState(1)

    const lastIndexOf = itemsPerPage * CurPage
    const indexOfFirstItem = lastIndex - itemsPerPage
    const currentItems = productsList.slice(indexOfFirstItem,lastIndexOf)

    const setPage = (page) => {
        SetCurrentPage(page)
    }

  return (
    
   <div className='Catalog'>
        <div className="Catalog__row">
           {productsList.map(product => (
            <link key={product.id} to={`/product/${product.id}`}>
                <ProductCard key={product.id} product={product}/>
            </link>
           ))}
        </div>
        <div className="pagination">
            {
                Array.from(
                    {length: Math.ceil(productsList.length / itemsPerPage)},
                    (_, index) => {
                        <button key={index + 1} onClick={() => setPage(index + 1)}>
                            {index + 1}
                        </button>
                })}
        </div>
   </div>
    
  )
}
