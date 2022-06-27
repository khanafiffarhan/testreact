import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Videocard from "./Videocard";


const Youtubedtsl = () => {
    const { slug } = useParams();
    console.log('slug',slug)
    async function getvideo (){

        const channeId = 'UCbMys3ID_1S8D1mZuYkoG2A'
    
        return await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2C%20contentDetails%2C%20id&playlistId=${slug}&key=AIzaSyALg58DhEqBfaTIjeCZ8LcZCrD53l50wvA`).then(data => data.json()).then(list => list.items);
    
    }
    const [videoData, setvideoData] = useState([])

    console.log('video', videoData)
    useEffect(()=>{
        getvideo().then(data => {setvideoData(transformData(data))}).catch();
      },[])
// const Videocard = ({id})=>{
//     return <div>
//         <Link to={`/watch/${id}`}>
//         <div> this is a card</div>
//         </Link>
//         {/* <iframe width={450} height={200} src={`https://www.youtube.com/embed/${id}`}>
            
//             </iframe> */}

//     </div>

// }



  return (
    <div>Youtubedtsl
        {/* <iframe width={450} height={200} src={}>
            
        </iframe> */}
        {videoData.length? videoData.map(item => <Videocard id={item} />):[]}
    </div>
  )
}

const transformData =(data)=>{
    return data.map((item)=>{
      // return item.snippet.title
      return item.contentDetails.videoId
    })
  }

export default Youtubedtsl