import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjAbout, homeObjEdu, homeObjComp, homeObjSkills, homeObjContato} from './Data'

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjAbout} />
            <HeroSection {...homeObjEdu} />
            <HeroSection {...homeObjComp} />
            <HeroSection {...homeObjSkills} />
            <HeroSection {...homeObjContato} />
        </>
    )
}

export default Home
