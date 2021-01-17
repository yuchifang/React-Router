import axios from "axios"
import { useEffect, useState } from "react"
export const useHerosCard = () => {
    const [initialData, setInitialData] = useState();
    const [webStatus, setWebStatus] = useState("idle");

    useEffect(() => {
        const axiosData = async () => {
            try {
                const { data: heroData } = await axios.get("http://hahow-recruit.herokuapp.com/heroes")
                setInitialData(heroData)
            } catch (error) {
                setWebStatus("error")
            } finally {
                console.log("wwwwwwwww")
                setWebStatus("success")
            }

        }
        axiosData()
    }, []);
    return { initialData, webStatus }
}