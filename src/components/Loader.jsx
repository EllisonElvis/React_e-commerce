import React, { useEffect, useState } from "react";
import "../Loader.css";

const Loader = ({ onFinish }) => {

    const [progress, setProgress] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {

        let current = 0;

        const interval = setInterval(() => {

            current++;

            setProgress(current);

            if (current >= 100) {

                clearInterval(interval);

                setTimeout(() => {

                    setFade(true);

                }, 300);

                setTimeout(() => {

                    onFinish();

                }, 900);

            }

        }, 50);

        return () => clearInterval(interval);

    }, []);

    return (

        <div className={`loader ${fade ? "loader-hide" : ""}`}>

            {/* Background Glow */}

            <div className="loader-bg"></div>

            {/* Logo */}

            <div className="logo-wrapper">

                <svg
                    className="cart-logo"
                    viewBox="0 0 24 24"
                    fill="none"
                >

                    <path

                        d="M6 8h12l-1.2 10.5a2 2 0 0 1-2 1.5H9.2a2 2 0 0 1-2-1.5L6 8z"

                        stroke="white"

                        strokeWidth="1.8"

                        strokeLinecap="round"

                        strokeLinejoin="round"

                    />

                    <path

                        d="M9 8V6a3 3 0 1 1 6 0v2"

                        stroke="white"

                        strokeWidth="1.8"

                        strokeLinecap="round"

                    />

                </svg>
                <h1>SneaX</h1>

                <p>Preparing your experience...</p>
                <div className="loader-dots">

                    <span></span>

                    <span></span>

                    <span></span>

                </div>

            </div>

            {/* Percentage */}

            <div className="loader-percent">

                {progress}%

            </div>

            {/* Progress Bar */}

            <div className="loader-progress">

                <div
                    className="loader-progress-fill"
                    style={{
                        width: `${progress}%`
                    }}
                >

                    <span className="progress-glow"></span>

                </div>

            </div>

        </div>

    );

};

export default Loader;