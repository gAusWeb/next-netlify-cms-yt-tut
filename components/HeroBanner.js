import React from "react";

export default function HeroBanner(props) {
    return (
        <section className="hero_banner">
            <div className="hero_banner__bg-image"></div>

            <div className="hero_banner__text-content">
                <div className="hero_banner__text-content__container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1 className="hero_banner__text-header">
                                    {props.heading}
                                </h1>
                                <h2 className="hero_banner__text-sub-header">
                                    {props.subHeading}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
