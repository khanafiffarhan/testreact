import React from 'react'
import {useState} from 'react'
import {useSearch} from './searchhook/useSearch'


const Product = () => {
    const products = [{
        title: 'this is pant',
        bc:'love talk',
        neww: 'hello Bangladesh',
        catagory: ['pant', 'shirt', 'socks'],
        seccat: ['wear', 'shoe']
    },
    {
        title: 'this is shirt',
        bc:'jango talk',
        neww: 'hello England',
        catagory: ['shirt', 'hoody'],
        seccat: ['blas', 'jeans']
    }]

    const [all, setall] = useState(products)

    const [search, setsearch] = useState(null)

    const a = {"hello" : 'world', 'this': 'is'}

    console.log('this is searh',search)
    console.log('h',Object.keys(a).map(k => a[k]))
    const num = [0,2];

    // const filw =(pros)=>{
    
    //     const fil2 = data.filter((item)=>  item.title.toLowerCase().includes(searchitem.toLowerCase()))
    //     return fil2
    
    // }
    // const usesearch = (data, searchitem) =>
    //     all.filter((item) =>{
    //       if(search === null) return item;
    //       else if(item.title.toLowerCase().includes(search.toLowerCase()) ) {
    //         return all;
    //       }
    //     })

        // console.log('fil aray', usesearch())
      
 

    return (
        <div>Product
             <input
            type="text"
            placeholder="Enter item to be searched"
            className="searchbar"
            onChange={(e) =>setsearch(e.target.value)}
          />

            {useSearch(all,search,num).map((item, index) => {
                return <div key={index}>
                    <p>{item.title}</p>
                    <p>{item.bc}</p>
                    <p>{item.neww}</p>
                </div>
            })}
        </div>
    )
}

export default Product