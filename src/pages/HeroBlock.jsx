import React, { useState } from "react";
import HeroCard from "../components/HeroCard";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeroList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  a:hover {
    text-decoration: none;
  }
`;

const HeroBlock = ({ initialData }) => {
  console.log("initialData", initialData)
  const [select, setSelect] = useState("idle"); //判斷哪個hero被選到
  return (
    <StyledHeroList>
      {initialData.map(({ id, name, image }) => (
        <Link key={id} to={`/heroes/${id}`}>
          <HeroCard
            name={name}
            src={image}
            heroid={id}
            select={select}
            setSelect={setSelect}
          />
        </Link>
      ))}
    </StyledHeroList>
  );
};
export default HeroBlock;
