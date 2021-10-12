import React from "react";

export default function VideoTeaser(props) {
    return (
        <div className="col-sm-4 col-md-3 text-center">
            <div className="video-teaser">
                <a href="">
                    <div className="video-teaser__container">
                        <img className="video-teaser__thumbnailImage" src={props.thumbnailImage} alt="" />
                    </div>
                </a>

                <div className="video-teaser__video-details">
                    <div className="video-teaser__video-title">
                        <a href="">
                            <h3 className="video-teaser__video-title">{props.videoTitle}</h3>
                        </a>
                    </div>

                    <div className="video-teaser__video-desc">
                        <p>{props.videoDesc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
