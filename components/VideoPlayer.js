import React from "react";

export default function VideoPlayer({ videos }) {
    console.log(videos);
    return (
        <div className="col-12">
            <div className="video-player">
                <div className="video-player__video-details">
                    <div className="video-player__video-title">
                        <h3>{videos.title}</h3>
                    </div>
                </div>

                <br />

                <div className="video-player__container">
                    <iframe
                        className="video-player__video"
                        src={videos.url}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        frameborder="0"
                        width="560"
                        height="315"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    >
                        <small>
                            BitChute embedding powered by{" "}
                            <a href="https://embed.tube">embed.tube</a>
                        </small>
                    </iframe>
                </div>

                <br />

                <div className="video-player__video-details">
                    <div className="video-player__video-desc">
                        <p>{videos.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
