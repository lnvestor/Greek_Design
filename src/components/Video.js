import React from "react";
import whitevideo from "../Assets/whitevideo.mp4";
import tw from "tailwind-styled-components";
import Golden from "../Assets/golden.webp";
import Greek from "../Assets/greek3.png";
import Hand from "../Assets/hand2.png";
import Flower from "../Assets/flower.png";

const Video = () => {
  return (
    <Wrapper>
      <VideoS
        autoPlay
        loop
        muted
        className="w-full object-cover absolute top-0 -z-10 blur fixed "
      >
        <Source src={whitevideo} type="video/mp4" />
      </VideoS>
    
      <Section>
      <Discover>
        <DiscocerCont>
          <About>> Discover More About Greek NFT </About>
        </DiscocerCont>
      </Discover>
<Sec>
        <RightSide>
          <Content>
            <GreekImg src={Greek} />
            <GreekImg2 src={Greek}/>
          </Content>
        </RightSide>

        <LeftSide>
          <ContentB>
            <HandGreek src={Hand} />
            <HandGreekk src={Hand} />
          </ContentB>
        </LeftSide>

        <CenterSide>
          <ContentC>
            <Heartimgg src={Flower} />
            <Heartimg src={Flower} />
          </ContentC>
        </CenterSide>
        </Sec>
        
        <Sectiontwo>
        <ConnectMetaMask>
        </ConnectMetaMask>
      </Sectiontwo>

      </Section>
      
      
    </Wrapper>
  );
};
const DiscocerCont = tw.div`flex justify-center text-3xl text-gray-400`
const Discover = tw.div``
const About=tw.div``
const Sec = tw.div`visible flex justify-between m-40 lg:invisible`
const ConnectMetaMask = tw.div``
const Sectiontwo=tw.div`flex justify-center`
const CenterSide = tw.div``;
const ContentC = tw.div``;

const Heartimg = tw.img``;
const Heartimgg = tw.img`absolute top-50 -z-10 blur-lg
bg-gradient-to-r from-gray-50 to-gray-400 fixed

`;


const HandGreekk = tw.img`absolute w-90 h-90 top-30 left-30 fixed 
`;
const HandGreek = tw.img`absolute w-90 h-90 top-40 left-30 blur-lg
bg-gradient-to-l from-gray-50 to-gray-400 fixed 
`;

const GreekImg = tw.img`absolute w-100 h-90 top-50 left-60 blur-lg fixed
bg-gradient-to-r from-gray-50 to-gray-400 
`;
const GreekImg2 = tw.img`absolute w-100 h-90 top-50 left-60 fixed `;


const Section = tw.section``;
const RightSide = tw.div``;
const Content = tw.div``;
const LeftSide = tw.div``;
const ContentB = tw.div``;
const Wrapper = tw.div``;
const VideoS = tw.video``;
const Source = tw.source``;
export default Video;
