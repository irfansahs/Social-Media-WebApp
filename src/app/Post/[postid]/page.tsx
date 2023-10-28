import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Post from "../../components/Post";
import Comments from "@/app/components/Comments";
function page() {
  return (
    <MainLayout>
      <Post />
      <Comments />
    </MainLayout>
  );
}

export default page;
