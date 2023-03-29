import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import AllAcountsSection from '../../Components/AllAccountsSection/AllAcountsSection'
import Directors from '../../Components/Directors/Directors'

const BoardOfDirectors = () => {
  return (
    <>
    <Breadcrumb Heading="Board of Directors"/>
    <Directors/>
    <AllAcountsSection/>
    </>
  )
}

export default BoardOfDirectors