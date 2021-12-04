import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import ReserveTable from '../components/ReserveTable';
import {Link} from 'react-router-dom'
export default class Reserve extends Component {
    render() {
        return (
            <>
            <Hero hero="roomsHero">
                <Banner title="reserve table">
                    <Link to="/" className="btn-primary">
                        Return home
                    </Link>
                </Banner>
            </Hero>
            <p>

            </p>
            <div class="col-sm-15 div-to-align">
                <ReserveTable></ReserveTable>
            </div>
            
            </>
        )
    }
}
