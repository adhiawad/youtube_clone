import axios from "axios";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { useSearchParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_API_KEY;
const VIDEO_API = import.meta.env.VITE_VIDEO_API;


import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import LiveChat from "./LiveChat";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../utils/ChatSlice";

function Watch() {
    const [ input,setInput] =useState()
    const  toggle=useSelector((store)=>store.app.toggle)
    const [singleVideo, setSingleVideo] = useState(null);
    const [searchParams] = useSearchParams();
    const vidId = searchParams.get("v");
    const dispatch= useDispatch()
    const darkMode = useSelector((state) => state.theme.darkMode);

    const getSingleVideo = async () => {
        try {
            const res = await axios.get(
                `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vidId}&key=${API_KEY}`
            );
            setSingleVideo(res?.data?.items[0]);
         
        } catch (error) {
            console.log(error);
        }
    };

    const sendMessage=()=>{
        dispatch(setMessage({name:"adhiraj",message:input}))
        setInput("")
    }

    useEffect(() => {
        getSingleVideo();
    }, []);

    return (
        // <div className="flex justify-between  mt-3 w-[100%]">
        <div className={` flex  p-4 transition-all duration-300 ${
            toggle 
                ? 'md:ml-64' // Sidebar expanded
                : 'md:ml-20' // Sidebar collapsed
        } ${
            toggle
                ? 'md:grid-cols-2 lg:grid-cols-3' // Fewer columns when sidebar is expanded
                : 'md:grid-cols-3 lg:grid-cols-4' // More columns when sidebar is collapsed
        }  ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
           <div className="flex w-[100%] ">
           <div className="">
                <iframe
                    className="rounded-2xl"
                    width="900"
                    height="500"
                    src={`https://www.youtube.com/embed/${vidId}?&autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>

                <h1 className="font-bold text-xl ml-3 mt-2">
                    {singleVideo?.snippet?.title}
                </h1>
               
                <div className='flex items-center  ml-3 mt-3'>
                        <div className='flex items-center justify-between w-[35%]'>
                            <div className='flex'>
                                <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" size={35} round={true} />
                                <h1 className='font-bold ml-2'>{singleVideo?.snippet?.channelTitle}</h1>
                            </div>
                            <button className='px-4 py-1 font-medium bg-black text-white rounded-full  hover:bg-gray-500'>Subscribe</button>
                        </div>
                        <div className='flex items-center ml-9 mt-2 w-[40%] '>
                            <div className='flex items-center ml-5 cursor-pointer border border-gray-300 hover:bg-gray-500 px-4 py-2 rounded-full'>
                                <AiOutlineLike size="20px" className='mr-5' />
                                <AiOutlineDislike size="20px" />
                            </div>
                            <div className='flex items-center  ml-5  cursor-pointer border border-gray-300 hover:bg-gray-500 px-4 py-2 rounded-full'>
                                <RiShareForwardLine size="20px" className='mr-2' />
                                <span>Share</span>
                            </div>
                            <div className='flex items-center  ml-5  cursor-pointer border border-gray-300 hover:bg-gray-500 px-4 py-2 rounded-full'>
                                <MdOutlineFileDownload />
                                <span>Download</span>
                            </div>
                        </div>
                    </div>
            </div>

            <div className='w-[30%] border border-gray-300 ml-8 rounded-lg h-fit p-4'>
                    <div className=' flex justify-between items-center'>
                        <h1>Top Chat</h1>
                        <BsThreeDotsVertical />
                    </div>
                    <div className='overflow-y-auto h-[28rem] flex flex-col-reverse'>
                        <LiveChat/>
                    </div>

                    <div className='flex items-center justify-between border-t p-2'>
                        <div className='flex items-center w-[90%] justify-between '>
                            <div>
                                <Avatar src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" size={35} round={true} />
                            </div>
                            <input value={input} onChange={(e) => setInput(e.target.value)} className={`border-b border-gray-300 outline-none ml-2 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} `} type="text" placeholder='Send message...' />
                            <div className=' cursor-pointer p-2 rounded-full'>
                                <LuSendHorizonal  onClick={sendMessage} />
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default Watch;
