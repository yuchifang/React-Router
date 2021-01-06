import React, { useState, useEffect } from "react";
import { heroData } from "../data/HeroData";
import HeroCard from "../components/HeroCard";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeroList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  a:hover{
    text-decoration: none;
  }
`;

const HeroBlock = () => {

  const [select, setSelect] = useState("idle") //判斷哪個hero被選到
  return (
    <StyledHeroList>
      {heroData.map(({ id, name, src, ename }) => (
        <Link key={id} to={`/herocard/${ename}`}>
          <HeroCard name={name} src={src} ename={ename} select={select} setSelect={setSelect} />
        </Link>))}
    </StyledHeroList>
  )
};
export default HeroBlock;
