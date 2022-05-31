import React, {useState} from "react";
import '../style/home.style.css'
import {Navbar} from "../components/navbar";
import {TableData} from "../components/tableData";
import {Button} from "../components/button";


const Home = () => {
    const [showTopTen, setShowTopTen] = useState(false);
    const [btnClassname, setBtnClassname] = useState('');

    const onButtonClick = () => {
        if (!showTopTen) {
            setShowTopTen(true);
            setBtnClassname('button-active');
        } else {
            setShowTopTen(false);
            setBtnClassname('');
        }
    }

    return (
        <div>
            <Navbar />
            <div className={'gradient'}>
                <h1 className={'header-1'}>Topp 50 Mest Spilte Spotify Sanger - 2020</h1>
                <div className={'button-container'}>
                    <Button text={'Vis topp 10'} classname={btnClassname} onClick={onButtonClick} />
                </div>
            </div>
            <div className={'container'}>
                <TableData showTopTen={showTopTen} />
            </div>
        </div>
    )
}

export default Home;