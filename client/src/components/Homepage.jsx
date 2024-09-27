import React from 'react'
import {useEffect, useState} from "react";
import axios from 'axios'
function Homepage() {
  const [file, setFile] = useState()
  const handleUpload = (e) =>{
    const formdata = new FormData()
    formdata.append('file',file)
    axios.post('http://localhost:3001/upload',formdata)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  return (
    <div>
    <input type="file" onChange={e => setFile(e.target.files[0])}/>
    <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default Homepage