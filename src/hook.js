import axios from "axios";
import { useEffect, useState } from "react";

export const useHeroes = () => {
  const [heroes, setHeroes] = useState();
  const [state, setState] = useState("idle");

  useEffect(() => {
    const axiosHerosCardData = async () => {
      try {
        const { data: herosCardData } = await axios.get(
          "https://hahow-recruit.herokuapp.com/heroes"
        );
        setHeroes(herosCardData);
        setState("success");
      } catch (error) {
        setState("error");
      }
    };
    axiosHerosCardData();
  }, []);
  return { heroes, state };
};

const defaultTalentValue = {
  str: 0,
  int: 0,
  agi: 0,
  luk: 0,
  total: 0
};

export const useHeroTalent = (heroId) => {
  const [point, setPoint] = useState(defaultTalentValue);
  const [state, setState] = useState("idle");
  // const [point, setPoint] = useState(initPoint);

  const handleAdd = (selectTitle) => {
    setPoint((preState) => {
      return {
        ...preState,
        [selectTitle]: point[selectTitle] + 1,
        total: point.total - 1
      };
    });
  };

  const handleReduce = (selectTitle) => {
    setPoint((preState) => ({
      ...preState,
      [selectTitle]: point[selectTitle] - 1,
      total: point.total + 1
    }));
  };

  useEffect(() => {
    //這邊
    const axiosHerosTalentData = async () => {
      try {
        const { data: heroApiPoint } = await axios.get(
          `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`
        );
        setPoint({ ...point, ...heroApiPoint });
      } catch (error) {
        setState("error");
      } finally {
        setState("success");
      }
    };
    axiosHerosTalentData();
  }, [heroId]);

  return {
    state,
    point,
    handleAdd: handleAdd,
    handleReduce: handleReduce,
    updateUser: async () => {
      const res = await axios.patch(
        `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`,
        {
          str: point.str,
          int: point.int,
          agi: point.agi,
          luk: point.luk
        }
      );
      return res;
    }
  };
};
