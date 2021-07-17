// import StickHeader from "./StickyHeader";
import Lottie from "react-lottie";
// import dynamic from "next/dynamic";
// import * as animationData from "https://assets10.lottiefiles.com/datafiles/9gIwZ2uiiKglyb0/data";
import * as animationData from '../../fed/data/lottie-menu.json'
import { useState, useEffect } from "react";

// const Lottie-Player = dynamic(
//     () => {
//         return import("@lottiefiles/lottie-player");
//     },
//     { ssr: false }
// );

export default function Navigation() {
    const defaultOptions = {
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const [isStopped, setIsStopped] = useState(true);

    useEffect(() => {
        const body = document.body;
        const triggerMenu = document.querySelector(
            ".page-header .trigger-menu"
        );
        const nav = document.querySelector(".page-header nav");
        const menu = document.querySelector(".page-header .menu");
        const lottieWrapper = document.querySelector(".lottie-wrapper");
        const lottiePlayer = document.querySelector("Lottie");
        console.log(lottiePlayer);
        const scrollUp = "scroll-up";
        const scrollDown = "scroll-down";
        let lastScroll = 0;

        triggerMenu.addEventListener("click", () => {
            body.classList.toggle("menu-open");
        });

        lottieWrapper.addEventListener("click", (e) => {
            e.preventDefault();
            triggerMenu.click();
            body.classList.toggle("menu-open-with-lottie");
        });

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                body.classList.remove(scrollUp);
                return;
            }

            if (
                currentScroll > lastScroll &&
                !body.classList.contains(scrollDown)
            ) {
                // down
                body.classList.remove(scrollUp);
                body.classList.add(scrollDown);
                // setIsStopped(!isStopped)
            } else if (
                currentScroll < lastScroll &&
                body.classList.contains(scrollDown)
            ) {
                // up
                body.classList.remove(scrollDown);
                body.classList.add(scrollUp);
                // setIsStopped(!isStopped)
            }
            lastScroll = currentScroll;
        });
    });

    return (
        <>
            <header className="page-header">
                <nav>
                    <div className="trigger-menu-wrapper">
                        <button className="trigger-menu">
                            <svg width="12" height="12" viewBox="0 0 24 24">
                                <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                            </svg>
                            <span>MENU</span>
                        </button>
                    </div>
                    <ul className="menu">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                            {/* <ul className="sub-menu">
                                <li>
                                    <a href="">Team</a>
                                </li>
                                <li>
                                    <a href="">Clients</a>
                                </li>
                            </ul> */}
                        </li>
                        {/* <li>
                            <a href="">Services</a>
                        </li> */}
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <a
                href=""
                role="button"
                aria-label="Toggle menu"
                className="lottie-wrapper"
            >
                <Lottie
                    options={defaultOptions}
                    height={60}
                    width={60}
                    isStopped={isStopped}
                ></Lottie>
            </a>

            {/* <main className="page-main">
                <section
                    style={{
                        backgroundImage:
                            "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/freedom.jpg)",
                    }}
                ></section>
                <section
                    style={{
                        backgroundImage:
                            "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/travel.jpg)",
                    }}
                ></section>
                <section
                    style={{
                        backgroundImage:
                            "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/holidays.jpg)",
                    }}
                ></section>
            </main> */}

            {/*  
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    Home{" "}
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                                </a>
                                <div className="dropdown-menu disabled" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                id="search"
                            />
                            <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            */}
        </>
    );
}
