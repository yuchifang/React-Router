import axios from "axios";
import { useEffect, useState } from "react";

export const useHeroeData = () => {
  const [heroeData, setHeroeData] = useState();
  const [state, setState] = useState("idle");

  useEffect(() => {
    setState("loading")
    const axiosHerosCardData = async () => {
      const { data: herosCardData } = await axios.get(
        "https://hahow-recruit.herokuapp.com/heroes"
      );
      return herosCardData
    };
    axiosHerosCardData().then((data) => {
      setHeroeData(data);
    }).then(() => {
      setState("success");
    }).catch(() => {
      setState("error");
    })

  }, []);
  return { heroeData, state };
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

  useEffect(() => {
    setState("loading")
    axiosHerosTalentData()
      .then((heroApiPoint) => {
        setPoint({ ...point, ...heroApiPoint });
      }).then(() => {
        setState("success");
      }).catch(() => {
        setState("error");
      })
  }, [heroId]);

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

  const axiosHerosTalentData = async () => {
    const { data: heroApiPoint } = await axios.get(
      `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`
    );
    return heroApiPoint
  };




  return {
    state,
    point,
    handleAdd: handleAdd,
    handleReduce: handleReduce,
    updateUser: () => {
      const axiosUpdateUser = async () => {
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
      axiosUpdateUser()
        .then(() => {
          setState("success")
        })
        .then(() => {
          axiosHerosTalentData()
        })
        .catch((err) => {
          setState("error");
        });

    }

  };
};
