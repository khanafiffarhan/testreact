import React from 'react'
import apiy from './apiy';
import Searchyoutube from './Searchyoutube'

const Searchpage = () => {

    const onSearch = async (keyword) => {
        const response = await apiy.get("/search", {
          params: {
            q: keyword
          }
        });
        this.setState({
          videosMetaInfo: response.data.items,
          selectedVideoId: response.data.items[0].id.videoId
        });
        console.log(this.state);
      };
  return (
    <div>Searchpage
        <Searchyoutube onSearch={onSearch}/>
    </div>
  )
}

export default Searchpage