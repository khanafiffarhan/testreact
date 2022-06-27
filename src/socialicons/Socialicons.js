import React from 'react'

const Socialicons = () => {

    const socialArray = [{
        
        name: 'facebook',
        imgUrl: 'link',
        link: 'this is link'
    },
    {
        
        name: 'facebook',
        imgUrl: 'link',
        link: 'this is link'
    },
    {
        
        name: 'facebook',
        imgUrl: 'link',
        link: 'this is link'
    }]

    


  return (
    <div>Socialicons

        {socialArray.map((item)=> 
        <div>      
        <p>{item.name}</p>
        <p>{item.imgUrl}</p>
        <p>{item.link}</p>
        </div>)}
        


    </div>
  )
}

export default Socialicons