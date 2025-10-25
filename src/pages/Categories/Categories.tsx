import React from 'react';
import { Formik, Field, Form, type FormikHelpers } from 'formik';

interface Values {
  id: number
  name: string;
  image: string;
  slug: string;
}

 const Categories = () => {
    async function fetchCategories(credentials: Values) {
        const res = await fetch('https://api.escuelajs.co/api/v1/categories/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        const data = await res.json();
        console.log(data);
        
    }

  return (
    <div>
      <h1>Categories</h1>
      <Formik
        initialValues={{
          id: 0,
          name: '',
          image: '',
          slug: '',
        }}
        onSubmit={(values: Values) => {
          fetchCategories(values);  
        }}
      >
        <Form>
          <label htmlFor="id">ID</label>
          <Field id="id" name="id" placeholder="0" type="number" />

          <label htmlFor="image">Image</label>
          <Field id="image" name="image" placeholder="image" />

          <label htmlFor="slug">Slug</label>
          <Field id="slug" name="slug" placeholder="category slug" />

          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="category name" />


          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Categories;