import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home.js";
import ForDealer from '../components/ForDealer'
import ForOwner from '../components/ForOwner'
import Blog from "../components/whyUseApp/Blog";
// import Post from "../components/whyUseApp/Post";
const MainRouter = () => {
    return (
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/dealer' element={<ForDealer />} />
        <Route path='/owner' element={<ForOwner />} />
        <Route path='/blog' element={<Blog />} />
        {/* <Route path='/:postSlug' element={<Post />} /> */}
      </Routes>
    )
}
 
export default MainRouter;