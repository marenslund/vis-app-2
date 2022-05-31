import React, {useState} from "react";
import '../style/home.style.css'
import {Navbar} from "../components/navbar";
import {Button} from "../components/button";
import {TablePropertiesData} from "../components/tablePropertiesData";


const Properties = () => {
    const [showTopTen, setShowTopTen] = useState(false);
    const [btnClassname, setBtnClassname] = useState('');
    const [moodClassname, setMoodClassname] = useState('button-active');
    const [propertiesClassname, setPropertiesClassname] = useState('');
    const [contextClassname, setContextClassname] = useState('');
    const [propertyType, setpropertyType] = useState('mood');

    const onButtonClick = () => {
        if (!showTopTen) {
            setShowTopTen(true);
            setBtnClassname('button-active');
        } else {
            setShowTopTen(false);
            setBtnClassname('');
        }
    }

    const handleProperyTypeOnClick = (propertyType: string) => {
        setpropertyType(propertyType)

        if (propertyType === 'mood') {
            setMoodClassname('button-active');
            setPropertiesClassname('');
            setContextClassname('');
        }
        else if (propertyType === 'properties') {
            setMoodClassname('');
            setPropertiesClassname('button-active');
            setContextClassname('');
        }
        else if (propertyType === 'context') {
            setMoodClassname('');
            setPropertiesClassname('');
            setContextClassname('button-active');
        }
    }

    return (
        <div>
            <Navbar />
            <div className={'gradient'}>
                <h1 className={'header-1'}>Topp 50 Mest Spilte Spotify Sanger - 2020</h1>
                <h2 className={'header-2'}>I tabellen under vises de 50 mest spilte sangene på Spotify i 2020. Velg
                    om du ønsker å se informasjon om stemning, egenskaper eller kontekst.</h2>
                <div className={'button-container'}>
                    <Button text={'Vis topp 10'} classname={btnClassname} onClick={onButtonClick} />
                    <Button text={'Stemning'} onClick={() => handleProperyTypeOnClick('mood')} classname={moodClassname} />
                    <Button text={'Egenskaper'} onClick={() => handleProperyTypeOnClick('properties')} classname={propertiesClassname}/>
                    <Button text={'Kontekst'} onClick={() => handleProperyTypeOnClick('context')} classname={contextClassname}/>
                </div>
            </div>
            <div className={'container'}>
                <TablePropertiesData showTopTen={showTopTen} propertyType={propertyType}/>
            </div>
        </div>
    )
}

export default Properties;