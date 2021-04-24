// import propTypes from "prop-types";

import axios from 'axios';

const key = "20422973-b315f24465f3cd4058b26d580";
axios.defaults.baseURL = "https://pixabay.com/api";

const fetchImg = ({searchQuery='', currentPage=1, perPage = 12}) =>{
    return axios
    .get(`https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&key=${key}&per_page=${perPage}`
    )
    .then((response) => response.data)
    .catch(console.log);
};

// eslint-disable-next-line
export default  {fetchImg} ;
