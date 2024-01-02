import { useEffect, useState } from "react";
import {Video} from "./Video"


//ACCESS ENVIRONMENT VARIABLES
const apiKey = import.meta.env.VITE_API_KEY

function Videos() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState("false");

    useEffect( () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&key=${apiKey}`)
            .then(response => response.json())
            .then(data => setVideos(data.items))
            .catch(err => console.error("Error: ", err))
    }, []);



    return ( 
        <div>
            <div className="w-full max-w-screen-lg">
                <ul className="grid grid-cols-4">
                    {
                        videos.length >= 1 && videos.map(video => (
                                <li key={video}><Video key={video.id} title={video.snippet.title} imgSrc={video.snippet.thumbnails.high.url}  /></li> 
                        ))
                    }
                </ul>
            </div>
            <div>
            </div>
        </div>
     );
}

export default Videos;