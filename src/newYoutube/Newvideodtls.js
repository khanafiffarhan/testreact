import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Newvideodtls = () => {
    const { slug } = useParams();
    async function getvideo (){

        const channeId = 'UCbMys3ID_1S8D1mZuYkoG2A'
    
        return await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2Cstatistics&id=${slug}&key=AIzaSyCEbpp-JTqX-2xe7alvbySKFX06Q4aZmU8`).then(data => data.json()).then(list => list.items);
    
    }
    const [videoData, setvideoData] = useState([])
    console.log('vidocard',videoData)
    useEffect(()=>{
        getvideo().then(data => {setvideoData(transformData(data))}).catch();
      },[])
  return (
    <div>Newvideodtls
        {videoData.map(item =>{
            return <div><iframe width={450} height={200} src={`https://www.youtube.com/embed/${item.id}`}>
            
            </iframe>
            <p> view count: {item.statistics.viewCount}</p>
            </div>
        })}
        
    </div>
  )
}
const transformData =(data)=>{
    return data.map((item)=>{
      // return item.snippet.title
      return item
    })
  }

export default Newvideodtls