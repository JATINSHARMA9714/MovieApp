import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjJkNGMzNDA1YjY5MzJhOGY2YTMxZGJhNjY1YjBiZCIsInN1YiI6IjY1ZTQ1OTYwOTk3OWQyMDE3Y2IyMzI3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uqk8AlTZGF-0kB18KVT4N0Lt1oKZ6BiczFHEFKn5Jsw'
      }
})

export default instance;