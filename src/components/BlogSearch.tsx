import React from 'react'

const BlogSearch = () => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    console.log(params)
    console.log(q);
  return (
    <div>BlogSearch</div>
  )
}

export default BlogSearch