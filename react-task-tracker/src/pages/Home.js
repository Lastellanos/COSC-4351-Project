import React from 'react'
import Hero from "../components/Hero";
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
export default function Home() {
    return (
        <Hero>
            <Banner title = "Restaurant"subtitle ="reserve your table now!">
                <Link to='/Reserve' className="btn-primary">
                    Get started
                </Link>
            </Banner>
        </Hero>
    )
}
