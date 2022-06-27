import React, { useState } from 'react'

const Inputcom = () => {

    const data = [{
        id: 23,
        title: 'hello this is title',
        desc: 'hello this is description'
    },
    {
        id: 24,
        title: 'hello this is title',
        desc: 'hello this is description'
    }]

    const newdata = data.filter((c)=>c.id === 23)

    const [first, setfirst] = useState(newdata[0].title)
    const [sec, setsec] = useState(newdata[0].desc)
    const [test, settest] = useState({
        titlee:first,
        md:sec
      })

    const handelfilter =(e)=>{
        const name = e.target.name
        const value = e.target.value
        settest({...test,[name]:value})
      }

      console.log('this is first',first)
      console.log('this is first',test.titlee)
    return (
        <div>Inputcom
            <input type="text" name='titlee' value={test.titlee} placeholder='Article Title' onChange={handelfilter}/>
        </div>
    )
}

export default Inputcom