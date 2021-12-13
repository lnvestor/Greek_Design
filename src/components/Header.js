import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BsSun } from "react-icons/bs";

const Header = () => {
  const [getHam, setHam] = useState(false);

  const HamHnadler = () => {
    setHam(!getHam);
  };

  return (
    <Wrapper>
      <NavBar>
        <LogoPart>
          <Logo> |Greek </Logo>
        </LogoPart>

        <SearchBar>
          <SearchLogo>
            <AiOutlineSearch className="mt-1 text-gray-500" />
            <SeacrhInput>
              <Search type="search" placeholder="" />
            </SeacrhInput>
          </SearchLogo>
        </SearchBar>

        <RtlBar>
          <ItemsBar className={getHam ? "lg:visible" : "lg:invisible"}>
            <ItemBar>Drops</ItemBar>
            <ItemBar>Collections</ItemBar>
            <ItemBar>Trending</ItemBar>
            <ItemBarIcon>
              <BsSun />
            </ItemBarIcon>
            <ItemBarButton type="button">Get In</ItemBarButton>
          </ItemsBar>
        </RtlBar>

        <HamburgerAction onClick={HamHnadler}>
          {getHam ? (
            <Hambur>
              <AiOutlineClose />
            </Hambur>
          ) : (
            <Hambur>
              <GiHamburgerMenu />
            </Hambur>
          )}
        </HamburgerAction>

        <SignButton>
          <Buttons type="button" value="Sign-In" />
        </SignButton>
      </NavBar>
    </Wrapper>
  );
};
const Buttons = tw.input`text-gray-500 
bg-gradient-to-r from-gray-200 to-gray-400 px-4 
hover:bg-gradient-to-l from-gray-50 to-gray-300 
lg:mr-8
lg:px-6
`;
const SignButton = tw.div`
lg:ml-3
`;
const Wrapper = tw.div`m-4 font-mono  text-lg z-10 `;
const LogoPart = tw.div`mr-3`;
const Logo = tw.h1`antialiased  text-xl text-gray-500`;
const NavBar = tw.div ` antialiased flex justify-around align-center m-6 lg:m-10  `;
const SearchBar = tw.div``;
const SearchLogo = tw.div`flex align-center text-xl text-gray-600  border border-gray-500 px-4 rounded-full hover:border-gray-200`;
const SeacrhInput = tw.div``;
const Search = tw.input`
px-4 outline-none  font-mono bg-transparent
`;
const RtlBar = tw.div`
`;
const ItemsBar = tw.ul`
visible 
flex lg:flex-col 
lg:py-8 lg:mt-9 lg:px-5 
lg:bg-transparent

lg:transition ease-in-out delay-150

`;
const ItemBar = tw.li`px-9 text-lg 
bg-transparent 
 text-gray-500
  lg:py-5
   lg:text-center
   lg:left-full
  lg:hover:bg-gray-300
  lg:rounded-full

   `;
const ItemBarButton = tw.button`text-gray-500 
bg-gradient-to-r from-gray-50 to-gray-300 px-4 
hover:bg-gradient-to-l from-gray-200 to-gray-400 
lg:py-4
px-5
sm:text-sm

 align-center`;
const ItemBarIcon = tw.div`px-3 text-xl py-1 text-gray-800 lg:px-20 lg:py-4   `;
const HamburgerAction = tw.div``;
const Hambur = tw.div`invisible lg:text-gray-500 lg:text-2xl lg:visible`;
export default Header;
