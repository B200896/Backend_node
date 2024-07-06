import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export function Tableedit() {
const { id } = useParams();
const [values, setValues] = useState({
name: '',
description: '',
});
const [image, setImage] = useState(null);
const [imageUrl, setImageUrl] = useState('');
const navigate = useNavigate();

useEffect(() => {
axios.get(`http://localhost:4000/categoriesEdit/${id}`)
.then(res => {
const data = res.data.response;
setValues({
name: data.name,
description: data.description,
});
setImageUrl(data.image);
})
.catch(err => console.log(err));
}, [id]);

const handleImageChange = (e) => {
setImage(e.target.files[0]);
};

const handleSubmit = (e) => {
e.preventDefault();

const formData = new FormData();
formData.append('name', values.name);
formData.append('description', values.description);
if (image) {
  formData.append('image', image);
}

axios.put(`http://localhost:4000/CategoriesUpdate/${id}`, formData)
  .then(res => {
    navigate('/categoriesdata');
    console.log('Update successful:', res);
  })
  .catch(err => console.error('Update failed:', err));
};

return (
<form onSubmit={handleSubmit}>
<label htmlFor="name">Name:</label>
<input
type="text"
id="name"
name="name"
value={values.name}
onChange={e => setValues({ ...values, name: e.target.value })}
required
/>

  <label htmlFor="description">Description:</label>
  <input
    type="text"
    id="description"
    name="description"
    value={values.description}
    onChange={e => setValues({ ...values, description: e.target.value })}
    required
  />

  <label htmlFor="image">Upload Image:</label>
  {imageUrl && <img src={imageUrl} alt="current" width="100" />}
  <input
    type="file"
    id="image"
    name="image"
    onChange={handleImageChange}
  />

  <button type="submit">Update</button>
</form>
);
}

