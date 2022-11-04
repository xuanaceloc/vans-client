import axios from 'axios';
import { createContext, useReducer } from 'react';
import {
    SET_NEWS_LIST,
    SET_NEWS_ID,
    SET_CURRENT_NEWS,
} from '../reducers/constant';
import newsReducer from '../reducers/news';
import { apiUrl } from './constant';

export const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
    const [news, dispatch] = useReducer(newsReducer, {
        newsList: [],
        currentNews: null,
        currentId: '',
    });

    // get news list
    const getNewsList = async () => {
        try {
            await axios.get(`${apiUrl}/news`).then((res) => {
                dispatch({ type: SET_NEWS_LIST, payload: res.data.newsList });
            });
        } catch (error) {
            console.log(error);
        }
    };

    // set id news active
    const setNewsId = (id) => {
        if (!id) return;
        localStorage.setItem('NEWS', id);
        dispatch({ type: SET_NEWS_ID, payload: id });
    };

    // get news detail by id
    const getNewsDetail = async (id) => {
        if (!id) {
            id = localStorage.getItem('NEWS');
        }
        try {
            await axios
                .get(`${apiUrl}/news/detail`, {
                    params: { id: id },
                })
                .then((res) => {
                    dispatch({
                        type: SET_CURRENT_NEWS,
                        payload: res.data.news,
                    });
                });
        } catch (error) {
            console.log(error);
        }
    };

    const newsData = {
        getNewsList,
        setNewsId,
        getNewsDetail,
        news,
    };

    return (
        <NewsContext.Provider value={newsData}>{children}</NewsContext.Provider>
    );
};

export default NewsContextProvider;
