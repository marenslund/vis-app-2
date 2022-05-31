import React from "react";
import '../style/home.style.css'
import tracks from '../data.json';
import {Navbar} from "../components/navbar";

const Genre = () => {
    const genres = tracks.map(track => track.genre).filter((genre, index, array) => array.indexOf(genre) === index);
    const countGenre = genres.map(genre => ({
        genre: genre,
        count: tracks.filter(track => track.genre === genre).length
    }));
    const sortedCountGenre = countGenre.sort((b,a) => (a.count - b.count));

    return (
        <div>
            <Navbar />
            <div className={'gradient'}>
                <h1 className={'header-1'}>Topp 3 Mest Populære Sjangre På Spotify - 2020</h1>
                <h2 className={'header-2'}>Pallen under representerer de 3 mest populære sjangrene som er spilt på Spotify i 2020.</h2>
            </div>
            <div className={'container'}>
                <div className={'pallet'}>
                    <div className={'pallet-item second'}>{sortedCountGenre[1].genre}</div>
                    <div className={'pallet-item first'}>{sortedCountGenre[0].genre}</div>
                    <div className={'pallet-item third'}>{sortedCountGenre[2].genre}</div>
                </div>
            </div>
        </div>
    )
}

export default Genre;