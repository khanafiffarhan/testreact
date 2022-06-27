import React from 'react'
import { Link } from 'react-router-dom'
import getVideoId from 'get-video-id';

const NewYoutube = () => {


    const data = [{
        vLink: 'https://www.youtube.com/watch?v=XWRJcvMBK-E&ab_channel=%D8%AA%D9%84%D8%A7%D9%88%D8%A7%D8%AA%D8%AF.%D8%A3%D8%AD%D9%85%D8%AF%D9%86%D8%B9%D9%8A%D9%86%D8%B9'
    },
    {
        vLink: 'https://www.youtube.com/watch?v=L_SskGBcqwo&ab_channel=Bucheerei93'
    }]
    return (
        <div>NewYoutube

            {data.map(item => { return <div>
                <Link to={getVideoId(item.vLink).id}><p>this is a card</p></Link></div>})}
        </div>
    )
}

export default NewYoutube