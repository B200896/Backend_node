import { useEffect } from "react";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Table = () => {

    
    const[name,setName]=useState('');
    const[description,setDescription]=useState('');
    const[image,setImage]=useState('');
    const navigate= useNavigate();

    const handleSubmit =  async (event)=>{
      event.preventDefault();

      console.log(name,"",image,"des",description)

      const Data=new FormData();

        Data.append('image',image);
        Data.append('name',name)
        Data.append('description',description)
        console.log(Data.image);
      try {
        
        const response=await axios.post("http://localhost:4000/Categories",Data,
      {
        header:{
          'Content-Type':'multipart/form-data',
        },

      }
     
      ); 
      console.log(response)
      navigate('/categoriesdata')
    }
      catch(error){
        console.log(error);

      }
    
    }
    const handleFileChange = (event) => {
      
      setImage(event.target.files[0]);
    };
    
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="price">Description:</label>
        <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
      <label htmlFor="image">Upload File:</label>
      <input type="file" id="image"  name="image"onChange={handleFileChange} required/>
      
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default Table;