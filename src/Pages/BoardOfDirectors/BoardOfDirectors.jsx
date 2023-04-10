import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import AllAcountsSection from '../../Components/AllAccountsSection/AllAcountsSection'
import Directors from '../../Components/Directors/Directors'
import BackgroundBrundcrumb from "../../assets/images/IZB/BackgroundBrundcrumb.png";

const BoardOfDirectors = () => {
  return (
    <>
    <Breadcrumb Heading="Board of Directors" img={BackgroundBrundcrumb}/>
    <Directors/>
    <AllAcountsSection/>
    </>
  )
}

export default BoardOfDirectors