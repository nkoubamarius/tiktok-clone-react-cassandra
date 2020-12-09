import React from 'react'
import FollowersColumn from '../components/FollowersColumn';
import './Home.css';

const Home=()=> {
    return (
        <div className="home">
            <FollowersColumn />
            <div className="feed">

            </div>
            <div className="suggested-box">
                
            </div>
        </div>
    )
}

export default Home
