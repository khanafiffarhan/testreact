import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Videocard from './Videocard';
import getVideoId from 'get-video-id';
// import { getvideo } from './Youtubeapi'

const Youtube = () => {
  const { id } = getVideoId('https://www.youtube.com/watch?v=0WmXzFWdbvs&t=743s&ab_channel=CodingShiksha');
  console.log('helli id', id)
  async function getvideo (){

    const channeId = 'UCbMys3ID_1S8D1mZuYkoG2A'

    return await fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2C%20contentDetails&channelId=UCbMys3ID_1S8D1mZuYkoG2A&maxResults=50&key=AIzaSyALg58DhEqBfaTIjeCZ8LcZCrD53l50wvA').then(data => data.json()).then(list => list.items);

}
async function getallvideo (){

  const channeId = 'UCbMys3ID_1S8D1mZuYkoG2A'
  const nextToken = 'CAYQAA'

  return await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCbMys3ID_1S8D1mZuYkoG2A&pageToken=${nextToken}&key=AIzaSyALg58DhEqBfaTIjeCZ8LcZCrD53l50wvA`).then(data => data.json()).then(list => list.items);

}

  const [videoData, setvideoData] = useState([])
  const [allvideoData, setallvideoData] = useState([])
  useEffect(()=>{
    getvideo().then(data => {setvideoData(transformData(data))}).catch();
    getallvideo().then(data => {setallvideoData(transformallData(data))}).catch();
  },[])

  console.log('videodata',videoData)
  console.log('all data',allvideoData)
  console.log('fun fun',getvideo())

  const mapp = ()=>{
    videoData.map((item)=>{
      return item
    })
  }

  const playid = videoData.map(item => item.id)
  const catagorytitlearray = videoData.map(item => item.snippet.title)

  console.log('mapp',playid)
  console.log('catagory',catagorytitlearray)
  const playidd = playid.map((i)=>{
    return i
  })

  console.log('lala', playidd)
  return (
    <div>Youtube
      {/* {playid.map((i)=>{
        return i
      })} */}
      {videoData.map((item,i)=>{
        return <Link key={i} to={item.id}><span>{item.snippet.title}</span></Link>
      })} <br/>

      <input type='text' placeholder='search now'></input>
      {allvideoData.map((item,i)=>{
        return <Videocard id={item.id.videoId} />
      })}
      {/* {videoData.map((item)=>{
        return <p>{item.id}</p>
      })} */}
    </div>
  )
}

const transformData =(data)=>{
  return data.map((item)=>{
    // return item.snippet.title
    return item
  })
}
const transformallData =(data)=>{
  return data.map((item)=>{
    // return item.snippet.title
    return item
  })
}

export default Youtube