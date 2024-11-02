import './Sidebar.css'
import React from 'react'
import { IoHome } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { BiSolidPlaylist } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { ImFire } from "react-icons/im";   
import { BiSolidShoppingBag } from "react-icons/bi"; 
import { FaMusic } from "react-icons/fa";    
import { PiFilmSlateFill } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { TbLivePhotoFilled } from "react-icons/tb";
import { BsNewspaper } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";
import { GiHanger } from "react-icons/gi";
import { MdPodcasts } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { useSelector } from 'react-redux';
import store from '../utils/Store';

function Sidebar({ visible }) {

    const sideBarItems=[
        {
            id:1,
            name:'Home',
            icon:<IoHome/>,
        
        },
        {
            id:2,
            name:'Shorts',
            icon:<SiYoutubeshorts/>
        },
        {
            id:3,
            name:'Subscription',
            icon:<MdSubscriptions/>
        }
    ]

    const youSection=[
        {
            id:1,
            name:'History',
            icon:<FaHistory/>
        },
        {
            id:2,
            name:'PLaylists',
            icon:<BiSolidPlaylist/>
        },
        {
            id:3,
            name:'Watch Later',
            icon:<MdOutlineWatchLater/>
        },
        {
            id:4,
            name:'Liked Videos',
            icon:<AiFillLike/>
        }
    ]

    const exploreSection=[
        {
            id:1,
            name:'Trending',
            icon:<ImFire/>
        },
        {
            id:2,
            name:'Shopping',
            icon:<BiSolidShoppingBag/>
        },
        {
            id:3,
            name:'Music',
            icon:<FaMusic/>
        },
        {
            id:4,
            name:'Movies',
            icon:<PiFilmSlateFill/>
        },
        {
            id:5,
            name:'Gaming',
            icon:<SiYoutubegaming/>
        },
        {
            id:6,
            name:'Live',
            icon:<TbLivePhotoFilled/>
        },
        {
            id:7,
            name:'News',
            icon:<BsNewspaper/>
        },
        {
            id:8,
            name:'Sports',
            icon:<FaTrophy/>
        },
        {
            id:9,
            name:'Fashion',
            icon:<GiHanger/>
        
        },
        {
            id:10,
            name:'Podcast',
            icon:<MdPodcasts/>
        }
    ]

    const moreItems=[
        {
            id:1,
            name:'YouTube Premium',
            icon:<FaYoutube/>
        },
        {
            id:2,
            name:'YouTube Studio',
            icon:<SiYoutubestudio/>
        },
        {
            id:3,
            name:'YouTube Music',
            icon:<SiYoutubemusic/>
        }
        ,
        {
            id:4,
            name:'YouTube Kids',
            icon:<SiYoutubekids/>
        }
    ]
    
    const  toggle=useSelector((store)=>store.app.toggle)
    console.log(toggle);
    
  return (


    <div className={`fixed sidebar px-6 h-[calc(100vh-6.625rem)] overflow-y-scroll top-16 ${visible ? "block" : "hidden"} md:block`}>
        <div className='space-y-2 items-center '>
        
           {
            sideBarItems.map((item)=>{
                return ( 
                    < div key={item.id} className='flex items-center space-x-6 hover:bg-gray-500 duration-200 p-1 rounded-xl'>
                     < div className='text-xl cursor-pointer' >
                      {item.icon} 
                      </div>
                    <span className={`ml-5 ${toggle ? "": "hidden" }`}>{item.name}</span>
                    </div>
                )
            })
           }
      
         <br />
         <hr />
         <br />
        </div>

        <div className='space-y-2 items-center '>
            <span className={` ${toggle ? "": "hidden" }`} >You</span>
           
            {
            youSection.map((item)=>{
                return ( 
                    < div key={item.id}  className='flex items-center space-x-6 hover:bg-gray-500 duration-200 p-1 rounded-xl'>
                     < div className='text-xl cursor-pointer' >
                      {item.icon} 
                      </div>
                    <span className={`ml-5 ${toggle ? "": "hidden" }`}>{item.name}</span>
                    </div>
                )
            })
           }
         <br />
         <hr />
         <br />
        </div>
        

        <div className='space-y-2 items-center'>
            <span className={` ${toggle ? "": "hidden" }`}>Explore</span>
            {
            exploreSection.map((item)=>{
                return ( 
                    < div key={item.id}   className='flex items-center space-x-6 hover:bg-gray-500 duration-200 p-1 rounded-xl'>
                     < div className='text-xl cursor-pointer' >
                      {item.icon} 
                      </div>
                    <span className={`ml-5 ${toggle ? "": "hidden" }`}>{item.name}</span>
                    </div>
                )
            })
           }
         <br />
         <hr />
         <br />
         
        </div>
      
        <div className={` space-y-2 items-center ${toggle ? "": "hidden" }`}>
           
         
            <span>More From YouTube</span>
           
            {
            moreItems.map((item)=>{
                return ( 
                    < div key={item.id}  className='flex items-center space-x-6 hover:bg-gray-500 duration-200 p-1 rounded-xl'>
                     < div className='text-xl cursor-pointer text-red-600' >
                      {item.icon} 
                      </div>
                    <span className={`ml-5 ${toggle ? "": "hidden" }`}>{item.name}</span>
                    </div>
                )
            })
           }
         <br />
         <hr />
         <br />
         
        </div>

       

       
    </div>
  )
}

export default Sidebar
