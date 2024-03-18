import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../store/reducers/movieReducer'
import tvReducer from '../store/reducers/tvReducer'
import peopleReducer from '../store/reducers/peopleReducer'

export default configureStore({
  reducer: {
    movie:movieReducer,
    tv:tvReducer,
    people:peopleReducer,
  },
})