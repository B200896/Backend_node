import react from 'react';
import React,{useState} from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
export function Brand(){
    const[name,setName]=useState('');
    const[description,setDescription]=useState('');
    const navigate= useNavigate();
    const handleSubmit =  async (event)=>{
      event.preventDefault();
      try {
        const response=await axios.post("http://localhost:4000/Brands",{
          name,
          description,
      }
      ); navigate('/branddata')} 
      catch(error){
        console.log(error);

      }
    
    }   
    
    return(
        <form onSubmit={handleSubmit}>
        <div>
            <h1>Brands Section</h1>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="price">Description:</label>
          <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        
        <button type="submit">Submit</button>
       
      </form>
    )
}