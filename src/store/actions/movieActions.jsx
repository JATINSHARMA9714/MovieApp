import axios from '../../utils/axios'
import {loadMovie} from '../reducers/movieReducer'
import {clearMovie} from '../reducers/movieReducer'


export const asyncGetMovie = (id) => async(dispatch) => {
    try {
    const details = await axios.get(`movie/${id}`);
    const externalId = await axios.get(`movie/${id}/external_ids`);
    const recommendation = await axios.get(`movie/${id}/recommendations`);
    const similar = await axios.get(`movie/${id}/similar`);
    const translations = await axios.get(`movie/${id}/translations`);
    const videos = await axios.get(`movie/${id}/videos`);
    const watchProviders = await axios.get(`movie/${id}/watch/providers`);

    const fullData = {
        details:details.data,
        externalId:externalId.data,
        recommendation:recommendation.data.results,
        similar:similar.data.results,
        translation:translations.data.translations.map(l=>l.english_name),
        videos:videos.data.results.find(m=>m.type === 'Trailer'),
        watchProviders:watchProviders.data.results,
    }
    dispatch(loadMovie(fullData));

    } catch (error) {
        console.log("Error: " + error);
    }
    
}