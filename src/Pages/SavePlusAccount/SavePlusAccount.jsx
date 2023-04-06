import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import AllAcountsSection from '../../Components/AllAccountsSection/AllAcountsSection'
import SavePlusAccountComponent from '../../Components/SavePlusAccount/SavePlusAccountComponent'
import img1 from "../../assets/images/IZB/IZB Website Skin/IZB Save Plus Account/7xm.xyz196228.jpg"
import ContainsArea from '../../Components/ContainsArea/ContainsArea'
import Benefits from '../../Components/Benefits/Benefits'

const SavePlusAccount = () => {
  const accountContent = "Exclusively designed savings account to inculcate savings habits in parents and guardians for their children. This savings account offers attractive interest rates and other benefits to realize your savings goals with other value added features such as IZB Visa Chip & Pin Debit Card, SMS Alert, Mobile and Internet Banking facility."
  return (
    <>
    <Breadcrumb Heading="Save Plus Bank A/C"/>
    <SavePlusAccountComponent heading="IZB Save Plus Account" subHeading="Know About" content={accountContent} img={img1}/>
    <ContainsArea/>
    <Benefits/>
    <AllAcountsSection/>
    </>
  )
}

export default SavePlusAccount