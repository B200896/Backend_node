import { useState } from 'react'
import { Register } from "./Register";
import { Login } from './Login';
import { Home } from './Home'
import { Homedetails } from './Homedetails';
import { ToastContainer } from 'react-toastify';
import { Formedit } from './Formedit';
// import Categories from './Categories';
import Table from './Table';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './privateroute';
import { Tabledetails } from './Tabledetails';
import { Tableedit } from './Tableedit';
import { Brand } from './Brands/Brands';
import { Branddetails } from './Brands/Branddetails';
import { Brandedit } from './Brands/Brandedit';
import { Products } from './Products/Products';
import { ProductDetails } from './Products/Productdetails';
import { Productedit } from './Products/Productedit';
// import { subCategory } from './Subcategories/Subcategories';
// import Subcatogories from '../../Backend/backend/models/subcatogories';
// import {Subcategory} from './Subcategory';
import { Subcategories } from './Subcategories/Subcategories'
import { SubcategoriesDetails } from './Subcategories/SubcategoriesDetails';
// import { Tablefile } from './Tablefile';
function App() {


  return (
    <>

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Router path="/data" element={<Categories />} /> */}
          <Route path='/category/add' element={<Table />} />
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Homedetails />} />
          </Route>
          <Route path='/category/edit/:id' element={<Tableedit />} />
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<Homedetails />} />
          <Route path='/categoriesdata' element={<Tabledetails />} />
          <Route path='/brand' element={<Brand />} />
          <Route path='/branddata' element={<Branddetails />} />
          <Route path='/brand/edit/:id' element={<Brandedit />} />
          <Route path='/products' element={<Products />} />
          <Route path='/productdata' element={<ProductDetails />} />
          <Route path='/product/edit/:id' element={<Productedit />} />
          <Route path='/subcategory' element={<Subcategories />} />
          <Route path='/subcategorydata' element={<SubcategoriesDetails />} />
        </Routes>
      </Router>


    </>

  )
}

export default App
