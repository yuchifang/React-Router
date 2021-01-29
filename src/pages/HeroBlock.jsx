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
  a {
    margin: 10px 25px;
  }
  a:focus{
    figure{
      p{
        background-color: #0aa ;
      }
    }
  }
`;

const HeroBlock = ({ heroeData }) => {
  return (
    <StyledHeroList>
      {heroeData?.length > 0 &&
        heroeData.map(({ id, name, image }) => (
          <Link key={id} to={`/heroes/${id}`}>
            <HeroCard
              name={name}
              src={image}
            />
          </Link>
        ))}
    </StyledHeroList>
  );
};
export default HeroBlock;
