import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Subcategories() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [categoryMap, setCategoryMap] = useState({});

    useEffect(() => {
        axios.get('http://localhost:4000/categoriesData')
            .then(response => {
                
                setCategories(response.data);
                console.log(response.data);

                const map = {};
                response.data.forEach(cat => {
                    map[cat._id] = cat.name;
                });
                setCategoryMap(map);
            })
            .catch(error => console.log('Error fetching categories', error));
            // console.log(categories);
    }, []);
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('name--- ', name);
        console.log('description--- ', description);
        console.log('subcategory--- ', subcategory);
        try {
            await axios.post("http://localhost:4000/Subcategory", {

                name,
                description,
                category: subcategory


            }
            ); navigate('/subcategorydata')
        }

        catch (error) {
            console.log(error);

        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Subcategories Section</h1>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="subcategory">Category:</label>
                <select
                    id="subcategory"
                    name="subcategory"
                    value={subcategory}
                    onChange={(e) => setSubcategory(e.target.value)}
                    required
                >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                            {cat.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
