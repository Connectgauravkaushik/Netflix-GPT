import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


export const useTrendingMovies = () =>{

    const dispatch = useDispatch();
    const trendingMovies = useSelector(store => store.movies.trendingMovies);
   
    const getTrendingMovies = async() => {
      const data = await fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US", API_OPTIONS);
      const json = await data.json();
      dispatch(addTrendingMovies(json.results));
    }

    useEffect(()=> {
         !trendingMovies && getTrendingMovies();
    }, []);

}