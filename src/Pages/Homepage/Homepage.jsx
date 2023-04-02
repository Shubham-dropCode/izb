import React from 'react'
import DoMore from '../../Components/DoMore/DoMore'
import Hero from '../../Components/Hero/Hero'
import EmptySpace from '../../Components/Hero/EmptySpace'
import AtmLocatinos from '../../Components/AtmLocations/AtmLocatinos'
import SavePlusAccount from '../../Components/SavePlusAccount/SavePlusAccount'
import AllAcountsSection from '../../Components/AllAccountsSection/AllAcountsSection'
import img from "../../assets/images/IZB/IZB Website Skin/Home_Page/Image_3Short.png"
const Homepage = () => {
 const accountContent = "Exclusively designed savings account to inculcate savings habits in parents and guardians for their children. This savings account offers attractive interest rates and other benefits to realize your savings goals with other value added features such as IZB Contactless Visa Card, SMS Alert, Mobile and Internet Banking facility."
  return (
    <React.Fragment>
    <Hero/>
    <EmptySpace/>
    <DoMore/>
    <AtmLocatinos/>
    <SavePlusAccount heading="Save Plus Account" subHeading="Secure your Childs Futures with our" content={accountContent} img={img}/>
    <AllAcountsSection/>
    </React.Fragment>
  )
}

export default Homepage