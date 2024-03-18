import axios from '../../utils/axios'
import {loadtv} from '../reducers/tvReducer'
import {cleartv} from '../reducers/tvReducer'


export const asyncGetTV = (id) => async(dispatch) => {
    try {
    const details = await axios.get(`tv/${id}`);
    const externalId = await axios.get(`tv/${id}/external_ids`);
    const recommendation = await axios.get(`tv/${id}/recommendations`);
    const similar = await axios.get(`tv/${id}/similar`);
    const translations = await axios.get(`tv/${id}/translations`);
    const videos = await axios.get(`tv/${id}/videos`);
    const watchProviders = await axios.get(`tv/${id}/watch/providers`);

    const fullData = {
        details:details.data,
        externalId:externalId.data,
        recommendation:recommendation.data.results,
        similar:similar.data.results,
        translation:translations.data.translations.map(l=>l.english_name),
        videos:videos.data.results.find(m=>m.type === 'Trailer'),
        watchProviders:watchProviders.data.results,
    }
    dispatch(loadtv(fullData));

    } catch (error) {
        console.log("Error: " + error);
    }
    
}