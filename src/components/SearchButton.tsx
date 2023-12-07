import React, { useState } from 'react'

const SearchButton = () => {
//   const [value,setValue] = useState<string>(
//     typeof window !== "undefined"
//       ? new URLSearchParams(window.location.search).get("q") ?? ""
//       : ""
//   );
  const [value,setValue] = useState<string>("")
  const handleChange = (e:any) =>{
    setValue(e.target.value)
    //console.log(e.target.value)
  }
  const handleSubmit = (event:any) =>{
    event.preventDefault()
    window.location.href = `/search?q=${value}`
    //console.log(value)
    console.log(location.href)
  }
  return (
    <form
    role="search"
    onSubmit={handleSubmit}
    >
    <label>
      記事を検索
    </label>
    <input
      id="blog_search"
      type="search"
      value={value}
      onChange={handleChange}
    />
    <button>検索</button>
  </form>
  )
}

export default SearchButton