import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Category from "../components/Category";
import Categories from "../components/Categories";
import Author from "../components/Author";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="about" element={ <About/>} />
          <Route path="sign-up" element={ <SignUp/>} />
          <Route path="articles" element={ <Articles/>} />
          <Route path="articles/:title" element={ <Article/>} />
          <Route path="categories/:name" element={<Category />}/>
          <Route path="authors/:name" element={ <Author/>} />
          <Route path="categories" element={ <Categories/>}/>
          <Route path="profile" element={ <Profile/>}>
            <Route path="edit" element={<EditProfileForm />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
