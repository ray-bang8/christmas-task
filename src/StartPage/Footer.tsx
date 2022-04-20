/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-data">
                    <p className="copyright">©</p>
                    <p className="year">2021</p>
                    <a
                        className="github-link"
                        href="https://github.com/ray-bang8"
                        target="_blank"
                    >
                        ray-bang8
                    </a>
                </div>
                <a
                    className="rss-logo"
                    href="https://rs.school/js/"
                    target="_blank"
                ></a>
            </div>
        </footer>
    )
}
