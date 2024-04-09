import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import logo from "../assets/logo";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <main>
        <p>{blogData.description}</p>
        <About image={logo} about="About the blog" />
        <ArticleList posts={blogData.posts} />
      </main>
    </div>
  );
}

export default App;
