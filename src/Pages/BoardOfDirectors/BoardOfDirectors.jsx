import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import AllAcountsSection from '../../Components/AllAccountsSection/AllAcountsSection'
import Directors from '../../Components/Directors/Directors'
import BackgroundBrundcrumb from "../../assets/images/IZB/BackgroundBrundcrumb.png";
import { useEffect } from 'react';

const BoardOfDirectors = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    
    <>
    <Breadcrumb Heading="Board of Directors" img={BackgroundBrundcrumb}/>
    <Directors/>
    <AllAcountsSection/>
    </>
  )
}

export default BoardOfDirectors