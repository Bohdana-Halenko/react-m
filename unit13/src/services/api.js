import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";
export const fetchArticles = async (searchQuery) => {
    const res = await axios.get(`/search?query=${searchQuery}`);
    return res.data.hits;
}

export default {
    fetchArticles,
}