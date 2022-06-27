import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { otpdatas } from '../redux/action/Actions';

const Firstpage = () => {
    const dispatch = useDispatch();

    const data = {
        id:1,
        name:'khan afif farhan'

    }

    const [first, setfirst] = useState([])
    const [last, setlast]= useState([])

    
    const navigate = useNavigate();
    // useEffect(() => {
        
    //     setfirst(data)
    //   }, [])
    const tosecond=()=>{
        axios.post('https://jsonplaceholder.typicode.com/posts',{data}).then((res)=>
    
    
    // {console.log(res.data.data.name)})
     dispatch(otpdatas(res.data.data.name)))
    // console.log(last)
     
        

        navigate('/second');
          }
  return (
    <div>Firstpage
        <div> <a onClick={()=>{tosecond()}}>go to second</a></div>
    </div>
  )
}

export default Firstpage