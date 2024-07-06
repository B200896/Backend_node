import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
export function Productedit() {
    const { id } = useParams();
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        model: '',
        brandid: '',
        subcategoryid: '',
        image

    });
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:4000/ProductsEdit/${id}`)
            .then(res => {
                setValues({ name: res.data.response.name, description: res.data.response.description, price: res.data.response.price, model: res.data.response.model, brandid: res.data.response.brandid, subcategoryid: res.data.response.subcategoryid })
                setImageUrl(data.image);
            })
            .catch((err) => console.log(err));
    }, [id]);
    const handleSubmit = (e) => {

        e.preventDefault();
        // console.log("cliack")
        axios.put(`http://localhost:4000/ProductsUpdate/${id}`, {

            name: values.name,
            description: values.description,
            price: values.price,
            model: values.model,
            brandid: values.brandid,
            subcategoryid: values.subcategoryid

        })
            .then((res) => {
                navigate('/productdata')
                console.log("res", res)

            })
            .catch(err => console.log(err));
    };
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }
    return (
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
            <div>
                <label htmlFor="price">price:</label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    value={values.price}
                    onChange={e => setValues({ ...values, price: e.target.value })}
                    required
                />
            </div>
            <div>
                <label htmlFor="model">Model:</label>
                <input
                    type="text"
                    id="model"
                    name="model"
                    value={values.model}
                    onChange={e => setValues({ ...values, model: e.target.value })}
                    required
                />
            </div>
            <div>
                <label htmlFor="brandid">BrandId:</label>
                <input
                    type="text"
                    id="brandid"
                    name="brandid"
                    value={values.brandid}
                    onChange={e => setValues({ ...values, brandid: e.target.value })}
                    required
                />
            </div>
            <div>
                <label htmlFor="subcategoryid">SubCategoryId:</label>
                <input
                    type="text"
                    id="subcategoryid"
                    name="subcategoryid"
                    value={values.subcategoryid}
                    onChange={e => setValues({ ...values, subcategoryid: e.target.value })}
                    required
                />
            </div>
            <label htmlFor="image">Upload Image:</label>
            {imageUrl && <img src={imageUrl} alt="current" width="100" />}
            <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
            />
            <button type='Submit'>Update</button>

        </form>


    )


}