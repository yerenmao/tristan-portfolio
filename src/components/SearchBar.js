'use client'

import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = ({ search, setSearch }) => {
  return (
    <form action="" onSubmit={(e) => e.preventDefault()}>
      <div className='relative flex items-center' >
        <AiOutlineSearch className='pointer-events-none w-6 h-6 absolute left-4 top-2.5 text-darkd/75 dark:text-lightd/75' />
        <input type='text' name='search' placeholder='Search' autoComplete='off' aria-label='Search' onSubmit={(e) => e.preventDefault()}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className='w-full pl-12 pr-3 py-2 rounded-full bg-transparent border-2 border-darkd/75 dark:border-lightd/75
            placeholder:text-lightt/50 dark:placeholder:text-darkt/50 text-lightt dark:text-darkt
            focus:border-first dark:focus:border-first
            outline-none
        '/>
      </div>
    </form>
  )
}

export default SearchBar