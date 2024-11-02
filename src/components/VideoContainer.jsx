import React, { useEffect, useState } from 'react'
import axios from "axios";
import { VIDEO_API , API_KEY} from '../constant/youtube';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from '../utils/appSlice';



const VideoContainer = () => {
    const { video, category,toggle } = useSelector((store) => store.app);
    console.log(category);
    const dispatch = useDispatch();
   
    const fetchingYoutubeVideo = async () => {
        try {
            const res = await axios.get(`${VIDEO_API}`);
            dispatch(setHomeVideo(res?.data?.items))
          
            
        } catch (error) {
            console.log(error);
        }

    }
    const fetchVideoByCategory = async (category) => {
        try {
            const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
            dispatch(setHomeVideo(res?.data?.items))
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (category === "All") {
            fetchingYoutubeVideo();
        } else {
            fetchVideoByCategory(category);
        }
    }, [category]);

    return (
        <div className={`grid grid-cols-1 gap-4 p-4 transition-all duration-300 ${
            toggle 
                ? 'md:ml-64' // Sidebar expanded
                : 'md:ml-20' // Sidebar collapsed
        } ${
            toggle
                ? 'md:grid-cols-2 lg:grid-cols-3' // Fewer columns when sidebar is expanded
                : 'md:grid-cols-3 lg:grid-cols-4' // More columns when sidebar is collapsed
        }`}>
            {
                video.map((item) => {
                   
                    return (
                        <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id }`} key={typeof item.id === 'object' ? item.id.videoId : video.id } >
                            <VideoCard item={item} />
                        </Link>

                    )
                })
            }

        </div>
    )
}

export default VideoContainer