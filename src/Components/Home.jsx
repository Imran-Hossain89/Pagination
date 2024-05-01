import Pagination from "./Pagination";
import Posts from "./Posts";
import { useEffect, useState } from "react";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // console.log(posts);

  // getting currentPosts
  const indexOfLastPost = currentPage * postsPerPage; //  1*10=====10
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 10-10====0
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); ////(0,10)

  // getting page number

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <div>
      <h1>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Home;
