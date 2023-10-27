import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appWriteService from "../appwrite/config";
import { useSelector } from "react-redux";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    appWriteService.getPosts().then((posts) => {
      if (posts) setPosts(posts.documents);
    });
  }, []);
  if (posts.length === 0) {
    return (
      <div className="w-full h-screen py-8 mt-10 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              {authStatus ? (
                <h1 className="text-2xl font-bold hover:text-gray-500">
                  {" "}
                  No Posts to display
                </h1>
              ) : (
                <h1 className="text-2xl font-bold hover:text-gray-500">
                  Login to read posts
                </h1>
              )}
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="mt-[64px] h-screen w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
