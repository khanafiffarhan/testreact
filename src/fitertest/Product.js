import React from 'react'
import { useState,useEffect } from 'react'
import Catagoryfirst from './Catagoryfirst'
import Catagorysec from './Catagorysec';
import {filterfun} from './filtercomponent/filterfun'

const Product = () => {
    const products = [{
        title: 'this is pant',
        catagory: ['pant', 'shirt', 'socks'],
        seccat: ['wear', 'shoe']
    },
    {
        title: 'this is shirt',
        catagory: ['shirt', 'hoody'],
        seccat: ['blas', 'jeans']
    }]

    const [all, setall] = useState(products)




    // const filtercatagory = (match, cat) => {
    //     console.log(match)
    //     console.log('this is catt',cat)

    //     setmatch(match);
    //     if (match === 'সকল') {
    //         return setall(products);
    //     }
    //     const newarray = cat;
    //     setall(newarray)

    //     console.log('this is all',all)
    //     console.log('this is new array',newarray)

    // }
    const filw =(pros)=>{
    
        const fil2 = products.filter((nar) => nar.seccat.includes(pros));
        return fil2
    
    }
    const filw2 =(pros)=>{
    
        const fil2 = products.filter((nar) => nar.catagory.includes(pros));
        return fil2
    
    }
    // const handelarticale = (match,filt,all) =>{

    //     if(match==='সকল'){
    //         return all
    //     //   return setall(products);
    //     }
    //     const newarray = filt(match);
    //     console.log('this is new array',newarray)
    //     return(newarray)
    //     // setall(newarray)
    //   }




      const click = (match,filt)=>{

        setall(filterfun(match, filt,products))

      }

      


    // const filtercatagory = (match, cat) => {
    //     setmatch(match);
    //     console.log('this is match',match)
    //     console.log('this is cat',cat)


    //     if (match === 'সকল') {
    //         console.log('this is product',products)
    //         return products;
    //     }
    //     else{
    //         const newarray = cat;
    //     console.log('this is new array',newarray)

    //     return newarray

    //     }
        
    //     // setall(newarray)

    //     // console.log('this is all',all)
    //     // console.log('this is new array',newarray)

    // }

    
    // const neww = (match, cat) => {
    //     setmatch(match);

    //     console.log('thisiscatty',cat)

    //     // filtercatagory(match, cat)
    //     // console.log(filtercatagory())
    //     // console.log('fil cat', filtercatagory())
    //     // setall(filtercatagory)
    // }


    // const filt = products.filter((nar) => nar.catagory.includes(match));




    

    return (
        <div>Product
            <Catagoryfirst fun={click} fil={filw2} />
            <Catagorysec fun={click} fil= {filw} />



            {all.map((item,index) => {
                return <div key={index}>
                    <p>{item.title}</p>
                </div>
            })}
        </div>
    )
}

export default Product