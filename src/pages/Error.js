import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <section className="nf-error">
            <div className="nf-error-container">
                <h1>oops! it's a dead end</h1>
                <Link to="/" className="nf-error-back">back home</Link>
            </div>
        </section>
    )
}