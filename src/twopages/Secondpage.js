import React, { useEffect, useState } from 'react'
import {Navigate, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { otpdatas } from '../redux/action/Actions'
import axios from 'axios';

const Secondpage = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const otpdataa = useSelector((state)=> state.otpdata_reducers.otp_data)
    const [first, setfirst] = useState([])
    useEffect(() => {
      
        dispatch(otpdatas())

        // setfirst(otpdataa)
    
     
    }, [first])

    // useEffect(() => {
        
    //     // dispatch(otpdatas())
    //     if(typeof otopdataa !== 'undefined'){
    //         setfirst(otpdataa)
    //     }
    //     // (typeof otpdataa!='undefined') && setfirst(otpdataa)
    //     // setfirst(otpdataa)
    
     
    // }, [])
    console.log('this is otpdata',otpdataa)
    console.log('this is first',first)
    const lol ={
        name: 'farhankhan'
    }
    const tosecond=()=>{

        axios.post('https://jsonplaceholder.typicode.com/posts',{otpdataa}).then((res)=>
    
    
    // {console.log(res.data.data.name)})
     console.log('last response',res.data.otpdataa))
    // console.log(last)
     
          }
  return (
    <div>Secondpage

        {/* <div>{location.state.name}</div> */}
       { (typeof otpdataa==='string')?
        <div>{otpdataa}</div>
        :<div>loading....</div>}
        <div> <a onClick={()=>{tosecond()}}>go to third</a></div>
    </div>
  )
}

export default Secondpage