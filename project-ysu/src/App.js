import "./App.css";
import getData from "./services";
import { useState, useEffect } from "react";
import Pagination from "./components/Pagination";
import Cards from "./components/Cards";

function App() {
  const [data] = useState(getData());
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(1);

  useEffect(() => {
    setPosts(getData().page);
  }, []);

  // console.log(posts);

  const indexOfLastPost = currentPage * postsPerPage;
  // console.log("indexOfLastPost: ", indexOfLastPost);

  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // console.log("indexOfFirstPost: ", indexOfFirstPost);

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log("currentPosts: ", currentPosts);

  return (
    <div className="App">
      <div className="container ">
        <h1 className="text-primary ">{data.title}</h1>
        <Pagination
          paginate={paginate}
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
        />
        <Cards posts={currentPosts} loading={loading} />
      </div>
    </div>
  );
}

export default App;
