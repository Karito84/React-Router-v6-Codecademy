import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categoriesSlice';
import { Link } from 'react-router-dom';
//removed import {Route,useRouteMatch} --> moved <Route/> to <Categor/> to App.js , and useRouteMatch doesn't exist in React Router v6.


export default function Categories () {
  const categories = useSelector(selectCategories)
  // const { path, url } = useRouteMatch() --> removed in React Router v6

  return (
    <main>
      <h1>Categories</h1>
      
      <ul>
        { 
          Object.keys(categories).map(category => {
            return (
              <li key={category}>
                <Link to={`${category}`}>{category}</Link>  {/* path in <Link/> in v6 is relative, previous path in v5 was <Link to={`${url}/${category}`   */}
              </li>
            )
          })
        }
      </ul>
    
      {/* <Route path={`/${path}/:name`}>
        <Category />
      </Route>        ---> moved the <Route/> to App.js  */}
    </main>
  )
}
