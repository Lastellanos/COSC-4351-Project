import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
export default class Reserve extends Component {
    render() {
        return (
            <Hero hero="roomsHero">
                <Banner title="reserve table">
                    <Link to="/" className="btn-primary">
                        Return home
                    </Link>
                </Banner>
            </Hero>
        )
    }
}
