import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Protected from "./components/Protected.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/Signup.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import AddPost from "./pages/AddPost.jsx";
import Post from "./pages/Post.jsx";
import EditPost from "./pages/EditPost.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <Protected authentication={false}>
            <Login />
          </Protected>
        }
      />
      <Route
        path="/signup"
        element={
          <Protected authentication={false}>
            <SignUp />
          </Protected>
        }
      />

      <Route
        path="/all-posts"
        element={
          <Protected authentication>
            {" "}
            <AllPosts />
          </Protected>
        }
      />

      <Route
        path="/add-post"
        element={
          <Protected authentication>
            {" "}
            <AddPost />
          </Protected>
        }
      />

      <Route
        path="/edit-post/:slug"
        element={
          <Protected authentication>
            {" "}
            <EditPost />
          </Protected>
        }
      />

      <Route path="/post/:slug" element={<Post />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
