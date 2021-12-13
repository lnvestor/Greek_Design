import React from "react";
import tw from "tailwind-styled-components";
import Header from "../components/Header";
import Video from "../components/Video";

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Video />
    </Wrapper>
  );
};
const Wrapper = tw.div``;

export default Home;
