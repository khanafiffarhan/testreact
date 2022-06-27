import React from 'react'

const catagorysec = ({fun,fil}) => {
    const array = ['wear','shoe','blas','jeans']

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

export default catagorysec