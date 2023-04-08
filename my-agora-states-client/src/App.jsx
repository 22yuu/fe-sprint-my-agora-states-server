import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Discussions from "./components/Discussions/Discussions";
import { getDiscussions, getDiscussions10 } from "./api/DiscussionsData";

function App() {
  const [discussions, setDiscussions] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const limit = 10;

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollHeight - scrollTop >= clientHeight) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    getDiscussions().then((data) => setTotal(Math.ceil(data.length / limit)));
    getDiscussions10(page, limit).then((data) => setDiscussions(data));
    return;
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* header */}
      <Header
        page={page}
        limit={limit}
        updateDiscussion={setDiscussions}
        updatePage={setPage}
      />
      {/* contents */}
      <Discussions
        discussions={discussions}
        updateDiscussion={setDiscussions}
      />
      {/* pagination */}
    </>
  );
}

export default App;
