import React from "react";
import { heroData } from "../data/HeroData";
import HeroCard from "../components/HeroCard";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeroList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const RenderHeroArr = heroData.map(({ id, name, src, ename }) => (
  <Link key={id} to={`/herocard/${ename}`}>
    <HeroCard name={name} src={src} ename={ename} />
  </Link>
));

const HeroBlock = () => {
  return <StyledHeroList>{RenderHeroArr}</StyledHeroList>;
};
export default HeroBlock;
