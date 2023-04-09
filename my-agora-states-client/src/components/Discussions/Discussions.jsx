import React, { useState, useEffect, useRef } from "react";
import Discussion from "../Discussion/Discussion";
import styles from "./Discussions.module.css";
import Loader from "../Loader/Loader";
import { getDiscussions10 } from "../../api/DiscussionsData";

const Discussions = () => {
  // const [target, setTarget] = useState(null);
  const target = useRef(null);
  const [isLoad, setLoad] = useState(false);
  const [discussions, setDiscussions] = useState([]);
  const [page, setPage] = useState(0);

  const limit = 10;

  useEffect(() => {
    getDiscussions10(page, limit).then((data) => setDiscussions(data));
    setPage(page + 1);
  }, []);

  const getMoreItem = async () => {
    setLoad(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(discussions);
    // await new Promise((resolve) =>
    //   setTimeout(() => {
    //     console.log(discussions);
    //   }, 1500)
    // );
    // setDiscussions(...discussions, ...data);
    setPage(page + 1);
    setLoad(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoad) {
      observer.unobserve(entry.target);
      await getMoreItem();
      // console.log(discussions);

      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    // console.log(`target ${target}`);
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.1,
      });
      observer.observe(target.current);
    }

    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <div className={styles.wrapper}>
      <ul>
        {discussions.map((ele) =>
          ele ? (
            <Discussion
              key={ele.id}
              ele={ele}
              updateDiscussion={setDiscussions}
            />
          ) : null
        )}

        <div ref={target}>{isLoad && <Loader />}</div>
      </ul>
    </div>
  );
};

export default Discussions;
