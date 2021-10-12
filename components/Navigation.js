import lottie from "lottie-web";
import * as animationData from "../data/lottie-menu.json";
import { useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector(".lottie-wrapper"),
            animationData,
            loop: false,
            autoplay: false,
        });

        const body = document.body;
        const triggerMenu = document.querySelector(
            ".page-header .trigger-menu"
        );

        const menuLinksScope = document.querySelector("ul.menu");
        const menuLinks = menuLinksScope.querySelectorAll("li > a");
        const lottieWrapper = document.querySelector(".lottie-wrapper");
        const scrollUp = "scroll-up";
        const scrollDown = "scroll-down";
        let lastScroll = 0;
        // const nav = document.querySelector(".page-header nav");
        // const menu = document.querySelector(".page-header .menu");

        body.classList.add(scrollDown);
        lottie.play();

        triggerMenu.addEventListener("click", () => {
            body.classList.toggle("menu-open");
        });

        menuLinks.forEach((el) => {
            console.log(el);
            el.addEventListener("click", () => {
                body.classList.contains("menu-open")
                    ? body.classList.remove("menu-open")
                    : null;
            });
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
                body.classList.remove("menu-open-with-lottie");
                return;
            }

            if (
                currentScroll > lastScroll &&
                !body.classList.contains(scrollDown)
            ) {
                // down
                body.classList.remove(scrollUp);
                body.classList.add(scrollDown);
                lottie.play();
            } else if (
                currentScroll < lastScroll &&
                body.classList.contains(scrollDown)
            ) {
                // up
                body.classList.remove(scrollDown);
                body.classList.add(scrollUp);
                lottie.stop();
            }
            lastScroll = currentScroll;
        });
    }, []);

    return (
        <section>
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
                    <div className="main-menu">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="main-menu__content-container">
                                        {/* <h1>Main menu</h1> */}

                                        <ul className="menu">
                                            <li>
                                                <Link href="/">
                                                    <a>Home</a>
                                                </Link>
                                                <p>back to homepage</p>
                                            </li>
                                            <li>
                                                <Link href="/about">
                                                    <a>About</a>
                                                </Link>
                                                <p>Learn more about us</p>
                                                {/* <ul className="sub-menu">
                                                <li>
                                                    <a href="">Team</a>
                                                </li>
                                                <li>
                                                    <a href="">Clients</a>
                                                </li>
                                            </ul> */}
                                            </li>
                                            <li>
                                                <Link href="/admin/index.html">
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Admin login
                                                    </a>
                                                </Link>
                                                <p>Login to make cms changes</p>
                                            </li>
                                            <li>
                                                <Link href="/videos">
                                                    <a>Recommended videos</a>
                                                </Link>
                                                <p>
                                                    Pre-rendered api
                                                    data/dynamic routing #2
                                                </p>
                                            </li>
                                            <li>
                                                <Link href="/posts">
                                                    <a>User Data</a>
                                                </Link>
                                                <p>
                                                    Pre-rendered api
                                                    data/dynamic routing #2
                                                </p>
                                            </li>
                                            <li>
                                                <Link href="/contact">
                                                    <a>Contact</a>
                                                </Link>
                                                <p>
                                                    Reach out to our friendly
                                                    staff
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <a
                href=""
                role="button"
                aria-label="Toggle menu"
                className="lottie-wrapper"
            ></a>

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
        </section>
    );
}
