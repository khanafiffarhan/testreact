import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Videocard = ({id}) => {
    async function getvideo (){

        const channeId = 'UCbMys3ID_1S8D1mZuYkoG2A'
    
        return await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2Cstatistics&id=DuudSp4sHmg&key=AIzaSyALg58DhEqBfaTIjeCZ8LcZCrD53l50wvA').then(data => data.json()).then(list => list.items);
    
    }
    const [videoData, setvideoData] = useState([])

    console.log('vidocard',videoData)
  useEffect(()=>{
    getvideo().then(data => {setvideoData(transformData(data))}).catch();
  },[])
  return (
    <div>Videocard
         <div>
        <Link to={`/watch/${id}`}>
        <div> this is a card</div>
        </Link>
        {/* <iframe width={450} height={200} src={`https://www.youtube.com/embed/${id}`}>
            
            </iframe> */}

    </div>
    </div>
  )
}

const transformData =(data)=>{
    return data.map((item)=>{
      // return item.snippet.title
      return item
    })
  }

// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2Cstatistics&id=DuudSp4sHmg&key=AIzaSyALg58DhEqBfaTIjeCZ8LcZCrD53l50wvA HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json


export default Videocard