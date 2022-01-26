import axiosApiInctance from "./axiosInterceptor";
import * as url from '../assets/data/urlConfigs'


export const getMostViewedVideosAsync = async () => {
    return await axiosApiInctance.get(url.getMostViewedVideosUrl);
};