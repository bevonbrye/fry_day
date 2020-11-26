import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
    return (
        <div>
              <form className='SearchBar'> 
              <input type="text" name="name" placeholder="Search by location" />
            <button className='button'><FontAwesomeIcon icon={faSearch} /> </button>
        </form>
        </div>
    )
}
