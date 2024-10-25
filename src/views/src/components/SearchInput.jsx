import React from 'react'
import SearchIcon from './icons/SearchIcon'

function SearchInput({value, handleChange, styles, props}) {
    return (
        <label className={`input input-bordered flex items-center gap-2 ${styles ? styles : ""}`}>
			<input 
			  type="text" 
			  className="grow" 
			  placeholder="Search" 
			  onChange={handleChange}
			  value={value}
			  {...props}
			 />
			 <SearchIcon />
		</label>
    )
}

export default SearchInput