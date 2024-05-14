import React, { useEffect, useState } from 'react';
import './styles/Blogs.css'; // Import your header styles

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const devToUsername = "vedantbhamare";
    const apiUrl = `https://dev.to/api/articles?username=${devToUsername}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setBlogData(data))
      .catch((error) => console.error("Error fetching blog data:", error));
  }, []);

  const createBlogCard = (article) => {
    return (
      <a href={article.url} className="blog-card" target="_blank" key={article.id}>
        <img src={article.social_image || "default-image-url.jpg"} alt={article.title} />
        <h3>{article.title}</h3>
      </a>
    );
  };

  return (
    <section id="blogs">
      <div className="container">
        <h2 className="blog-heading">I write lil' bit as well</h2>
        <div className="blog-container" id="blogContainer">
          {blogData.map((article) => createBlogCard(article))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
