import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import BriefHistory from '../../Components/BriefHistory/BriefHistory'
import img from "../../assets/images/IZB/IZB Website Skin/Why bank with us/image_2.png";
import WhyBankWithUsComponents from '../../Components/WhyBankWithUsComponent/WhyBankWithUsComponent';
import BackgroundBrundcrumb from "../../assets/images/IZB/BackgroundBrundcrumb.png";


const WhyBankWithUs = () => {
  return (
    <>
    <Breadcrumb Heading="Why Bank With Us" img={BackgroundBrundcrumb}/>
    <BriefHistory heading="Branch Networks" content="Since the formation of Indo Zambia Bank in 1984 we have continued promoting bank facilities in support of economic development across the entire landscape with 35 in all 10 provincial centres of Zambia." image={img} />
    <WhyBankWithUsComponents/>
    </>
  )
}

export default WhyBankWithUs