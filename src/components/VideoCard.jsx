import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Avatar from "react-avatar";
const API_KEY = import.meta.env.VITE_API_KEY;
const VIDEO_API = import.meta.env.VITE_VIDEO_API;



const VideoCard = ({item}) => {
    const [ytIcon, setYtIcon] = useState("");
    const getYoutubeChannelName = async () =>{
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
            setYtIcon(res.data.items[0].snippet.thumbnails.high.url);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getYoutubeChannelName();
    },[])

    return (
        <div className='w-full  cursor-pointer my-2 '>
            <img className='rounded-xl w-full ' src={item.snippet.thumbnails.high.url} alt="ytvideo" />
            <div>
                <div className='flex mt-2'>
                    <Avatar src={ytIcon} size={35} round={true} />
                    <div className='ml-2'>
                        <h1 className='font-bold text-sm  '>{item.snippet.title}</h1>
                        <p className='text-sm text-gray-500  '>{item.snippet.channelTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard