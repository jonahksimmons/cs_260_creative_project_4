import axios from 'axios';
import ReactDOM from "react-dom/client";
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import Create from "./pages/Create.js";
import Paste from "./pages/Paste.js";
import Go_To from "./pages/Go_To.js";
import List from "./pages/List.js";
import './App.css';

function App() {
  // setup state
  const [pastes, set_pastes] = useState([]);
  const [error, set_error] = useState("");
  const [post_title, set_post_title] = useState("");
  const [post_content, set_post_content] = useState("");
  const [post_id, set_post_id] = useState("");

  const task_fetch_all_posts = async() => {
    try {      
      const response = await axios.get("/api/pastes");
      set_pastes(response.data.all_pastes);
    } catch(error) {
      set_error("error retrieving posts: " + error);
    }
  }

  const task_fetch_one_post = async() => {
    try {
      await axios.get("/api" + "TODO");
    } catch(error) {
      set_error("error retrieving post: " + error);
    }
  }
	
  const task_create_post = async(title, content) => {
    try {
      const response = await axios.post("/api/new", {title: title, contents: content});
      return response.data.id;
    } catch(error) {
      set_error("error creating post: " + error);
    }
  }

  const task_delete_one_post = async(post_id) => {
    try {
      await axios.delete("/api/" + post_id);
    } catch(error) {
      set_error("error deleting a post" + error);
    }
  }

  // fetch ticket data
  useEffect(() => {
    task_fetch_all_posts();
  },[]);

  const delete_post = async(post_id) => {
    await task_delete_one_post(post_id);
    task_fetch_all_posts();
  }

  // render results
  return (
    <div className="App">
      {error}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home pastes={pastes} />} />
          <Route path="create_new" element={<Create task_create_post={task_create_post} post_title={post_title} set_post_title={set_post_title} post_content={post_content} set_post_content={set_post_content} task_fetch_all_posts={task_fetch_all_posts} />} />
          <Route path="go_to" element={<Go_To post_id={post_id} set_post_id={set_post_id} />} />
	  <Route path="paste/:id" element={<Paste delete_post={delete_post}/>} />
	  <Route path="list" element={<List pastes={pastes}/>} />
          <Route path="*" element={<Navigate to="/" />}  />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
