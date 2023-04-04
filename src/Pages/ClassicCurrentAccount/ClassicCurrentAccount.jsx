import React from 'react'
import AllAcountsSection from '../../Components/AllAccountsSection/AllAcountsSection'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'

const ClassicCurrentAccount = () => {
  return (
    <>
    <Breadcrumb Heading="Classic Current Account"/>
    <AllAcountsSection/>
    </>
  )
}

export default ClassicCurrentAccount