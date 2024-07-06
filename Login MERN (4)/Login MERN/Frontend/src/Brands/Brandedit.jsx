import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useParams,useNavigate,Link } from 'react-router-dom';
export function Brandedit(){

    const { id } = useParams();
    console.log("id",id)
    
    // useEffect(()=> {
    //     console.log('id--', id);
    // },[id]);

    const [values, setValues] = useState({
        name:'',
        description:'',
       
    });
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:4000/BrandsEdit/${id}`)
            .then(res => {
                console.log(res);
                setValues({ name: res.data.response.name, description: res.data.response.description });
            })
            .catch((err) => console.log(err));
    }, [id]);


    const handleSubmit = (e) => {
        console.log(values.description,)
        e.preventDefault();
        // console.log("cliack")
        axios.put(`http://localhost:4000/BrandsUpdate/${id}`, {
            
            name: values.name,
            description: values.description,
          
        })
            .then((res) => {
                navigate('/branddata')
                console.log("res",res)
               
            })
            .catch(err => console.log(err));
    };
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={e => setValues({ ...values, name: e.target.value })}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={values.description}
                    onChange={e => setValues({ ...values, description: e.target.value })}
                    required
                />
                </div>
               
                <button type='Submit'>Update</button>
                
                </form>

    )
}