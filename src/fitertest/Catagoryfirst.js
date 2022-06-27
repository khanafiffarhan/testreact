import React from 'react'

const Catagoryfirst = ({fun,fil}) => {

    
    const array = ['pant','shirt','socks','hoody']
    
    
    // const handelarticale = (match) =>{
    //     console.log(match)
    //     if(match==='সকল'){
    //       return setall(products);
    //     }
    //     const newarray = matcharr.includes(match));
    //     setall(newarray)
    //   }

    return (
      <>
        <div className='arti_nava'>
          {array.map((c)=>{
            return <a onClick={()=>fun(c,fil)}>{c} df</a>
          })}
        </div>
      </>
    )
}

export default Catagoryfirst