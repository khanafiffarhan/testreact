import React, { useState } from 'react'

const Searchyoutube = () => {

    const [first, setfirst] = useState('')

    const onSearchChanged =(e)=>{
        
    const titlee = e.target.value;
    setfirst(titlee);

    }
    const onSubmit = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state.title);
      };
  return (
    <div>Searchyoutube
          <form onSubmit={onSubmit} className="search-form">
          <div className="form-controls">
            <label>Search</label>
            <input
              id="video-search"
              type="text"
              value={this.state.title}
              onChange={onSearchChanged}
              placeholder="Enter Search Keyword"
            />
          </div>
        </form>
    </div>
  )
}

export default Searchyoutube