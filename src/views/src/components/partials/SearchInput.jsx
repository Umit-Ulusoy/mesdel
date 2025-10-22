import React from 'react'
import { SearchIcon } from '@icons'

function SearchInput({value, handleChange, styles, props, placeholder = 'Search'}) {
    return (
        <label className={`input input-bordered flex items-center gap-2 ${styles ? styles : ""}`}>
			<input 
			  type="text" 
			  className="grow" 
			  id='search-input'
			  placeholder={ placeholder }
			  onChange={handleChange}
			  value={value}
			  {...props}
			 />
			 <SearchIcon />
		</label>
    )
}

export default SearchInput