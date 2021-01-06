import React, { useState } from "react";
import { heroData } from "../data/HeroData";
import HeroCard from "../components/HeroCard";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeroList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const HeroBlock = () => {
  const [select, setSelect] = useState("idle")
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
