import React, { useState, useEffect } from "react";
import { Container, PostCard, PostForm } from "../components";
import appWriteService from "../appwrite/config";
import { useParams, useNavigate } from "react-router-dom";
const EditPost = () => {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();
  useEffect(() => {
    if (slug) {
      appWriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post ? (
    <div className="py-8 mt-[64px] h-fit">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
};

export default EditPost;
