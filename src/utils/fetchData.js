import axios from "axios"

export const fetchData = async (url) => {
    try {
        const res = await axios.get(url)
        return res
    } catch (error) {
        return error
    }
}