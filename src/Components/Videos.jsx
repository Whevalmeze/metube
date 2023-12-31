import { useEffect, useState } from "react";
import {Video} from "./Video"

const API_KEY = "AIzaSyBAxIpTPsTgU0hCbFOa2K7oiEUg-s0V6SA";
const ID= "Ks-_Mh1QhMc";



function Videos() {
    const [videos, setVideos] = useState([]);

    useEffect( () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&key=${API_KEY}`)
            .then(response => response.json())
            .then(data => setVideos(data.items))
            .catch(err => console.error("Error: ", err))
    }, []);



    return ( 
        <div>
            <div>
                <ul style={{
                    display: "grid",
                    justifyItems: "center",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gridTemplateRows: "auto",
                    gap: 0,
                    listStyleType: "none",
                    padding: 0
            }}>
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