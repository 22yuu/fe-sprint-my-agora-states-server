import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Discussions from "./components/Discussions/Discussions";
import { getDiscussions, getDiscussions10 } from "./api/DiscussionsData";

function App() {
  return (
    <>
      {/* header */}
      <Header />
      {/* contents */}
      <Discussions />
    </>
  );
}

export default App;
