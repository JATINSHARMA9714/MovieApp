import axios from '../../utils/axios'
import {loadPeople} from '../reducers/peopleReducer'
import {clearPeople} from '../reducers/peopleReducer'


export const asyncGetPerson = (id) => async(dispatch) => {
    try {
    const details = await axios.get(`person/${id}`);
    const externalId = await axios.get(`person/${id}/external_ids`);
    const movieCredits = await axios.get(`person/${id}/movie_credits`);
    const tvCredits = await axios.get(`person/${id}/tv_credits`);


    const fullData = {
        details:details.data,
        externalId:externalId.data,
        movieCredits:movieCredits.data,
        tvCredits:tvCredits.data
    }
    dispatch(loadPeople(fullData));

    } catch (error) {
        console.log("Error: " + error);
    }
    
}