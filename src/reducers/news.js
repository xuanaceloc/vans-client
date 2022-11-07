import { SET_NEWS_LIST, SET_NEWS_ID, SET_CURRENT_NEWS } from './constant';

export const initialNews = { newsList: [], currentNews: null, currentId: '' };

const newsReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_NEWS_LIST:
            return {
                ...state,
                newsList: payload,
            };

        case SET_NEWS_ID:
            return {
                ...state,
                currentId: payload,
            };
        case SET_CURRENT_NEWS:
            return {
                ...state,
                currentNews: payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default newsReducer;
