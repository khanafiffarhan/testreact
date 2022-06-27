import React from 'react'
import { useParams } from 'react-router-dom';


const Videocard = () => {
  const { video } = useParams();
  return (
    <div>Videocard details helllo
      <iframe width={450} height={200} src={`https://www.youtube.com/embed/${video}`}>
            
        </iframe>
    </div>
  )
}

export default Videocard