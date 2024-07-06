import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Products() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [model, setModel] = useState('');
  const [brandid, setBrandid] = useState('');
  const [brands, setBrands] = useState([]);
  const [subcategoryid, setSubcategoryid] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await axios.get("http://localhost:4000/BrandData");
      setBrands(response.data);
    } catch (error) {
      console.log('Error fetching brands:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('model', model);
      formData.append('brandid', brandid); // Correctly append brand ID
      formData.append('subcategoryid', subcategoryid);

      const response = await axios.post("http://localhost:4000/Products", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Product created:', response.data);
      navigate('/productdata'); // Redirect to product data page after successful submission
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div>
        <h1>Product Details Section</h1>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="model">Model:</label>
        <input type="text" id="model" name="model" value={model} onChange={(e) => setModel(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="brandid">Brand:</label>
        <select id="brandid" name="brandid" value={brandid} onChange={(e) => setBrandid(e.target.value)} required>
          <option value="">Select a brand</option>
          {brands.map((brand) => (
            <option key={brand._id} value={brand._id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="subcategoryid">Subcategory:</label>
        <input type="text" id="subcategoryid" name="subcategoryid" value={subcategoryid} onChange={(e) => setSubcategoryid(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="image">Upload File:</label>
        <input type="file" id="image" name="image" onChange={handleFileChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
