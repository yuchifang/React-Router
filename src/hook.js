import axios from "axios"
import { useEffect, useState } from "react"


export const useHerosCard = () => {
    const [initialData, setInitialData] = useState();
    const [webStatus, setWebStatus] = useState("idle");

    useEffect(() => {
        const axiosHerosCardData = async () => {
            try {
                const { data: herosCardData } = await axios.get("http://hahow-recruit.herokuapp.com/heroes")
                setInitialData(herosCardData)
            } catch (error) {
                setWebStatus("error")
            } finally {
                setWebStatus("success")
            }

        }
        axiosHerosCardData()
    }, []);
    return { initialData, webStatus }
}


const defaultTalentValue = {
    str: 0,
    int: 0,
    agi: 0,
    luk: 0,
    total: 0
};

export const useHeroTalent = (heroId) => {
    const [point, setPoint] = useState(defaultTalentValue);
    const [webStatus, setWebStatus] = useState("idle");
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
                const { data: heroApiPoint } = await axios.get(`http://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`)
                setPoint({ ...point, ...heroApiPoint })
            } catch (error) {
                setWebStatus("error")
            } finally {
                setWebStatus("success")
            }
        }
        axiosHerosTalentData()
    }, [heroId])

    return {
        webStatus,
        point,
        handleAdd: handleAdd,
        handleReduce: handleReduce,
        updateUser: async () => {
            const res = await axios.patch(`http://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`, {
                str: point.str,
                int: point.int,
                agi: point.agi,
                luk: point.luk,
            })
            return res;
        }
    }
}