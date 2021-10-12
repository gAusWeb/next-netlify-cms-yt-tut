import React from 'react'
import VideoTeaser from './VideoTeaser'
import data from '../data/videos'

export default function VideoGrid() {
    const data2 = data();
    
    return (
        <div className="video-grid">
            <div className="container">
                <div className="row">
                    {data2.map((data) => {
                        return <VideoTeaser videoUrl={data.videoUrl} videoTitle={data.videoTitle} videoDesc={data.videoDesc} thumbnailImage={data.thumbnailImage} />
                    })}
                </div>
            </div>
        </div>
    )
};
