import React from 'react'
import { ReactComponent as ArrowR } from "../../assets/images/IZB/arrow_right.svg";
import {AiFillCaretRight} from "react-icons/ai"


const RequiredDocuments = () => {
  return (
    <section id="eligibility" class="eligibility-area" style={{backgroundColor:"#FFF5E7"}}>
        <div className="container-fluid">
          <div className="sec-title text-center">
            <h2>Savings A/c Required Documents</h2>
            <div className="sub-title">
              <p>Basic documents required for opening a savings account.</p>
            </div>
          </div>
          <div className="container">
            
          
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              {/*Start Single Documents Box*/}
              <div className="single-documents-box h-50 m-0 mb-1" style={{backgroundColor:"#9E1B1E"}}>
                <div className="inner-title">
                  <h3 className="text-white">
                    IZB application form
                  </h3>
                </div>
              </div>
              {/*End Single Documents Box*/}
              {/*Start Single Documents Box*/}
              <div className="single-documents-box h-50 m-0 mb-1" style={{backgroundColor:"#9E1B1E"}}>
                <div className="inner-title">
                  <h3 className="text-white">
                    Recommendation letter                  </h3>
                </div>
              </div>
              {/*End Single Documents Box*/}
            </div>
            <div className="col-xl-4 col-lg-6 mb-0">
              {/*Start Single Documents Box*/}
              <div className="single-documents-box h-100" style={{backgroundColor:"#9E1B1E"}}>
                <div className="inner-title">
                  <h3 className="text-white">Proof of rasidence</h3>
                </div>
                <ul>
                  <li>
                    <p className='text-white lh-base'>
                    <AiFillCaretRight size={15} className='pe-1'/>
                        
                        Minimum of k1000 per month to be maintained.</p>
                  </li>
                  <li>
                  <p className='text-white lh-base'>
                    <AiFillCaretRight size={15} className='pe-1'/>
                        
                       T-Pin.</p>
                  </li>
                  
                </ul>
              </div>
              {/*End Single Documents Box*/}
            </div>
           
            <div className="col-xl-4 col-lg-6">
              {/*Start Single Documents Box*/}
              <div className="single-documents-box h-50 m-0 mb-1" style={{backgroundColor:"#9E1B1E"}}>
                <div className="inner-title">
                  <h3 className="text-white">
                  Passport size photos
                  </h3>
                </div>
              </div>
              {/*End Single Documents Box*/}
              {/*Start Single Documents Box*/}
              <div className="single-documents-box h-50 m-0 mb-1" style={{backgroundColor:"#9E1B1E"}}>
                <div className="inner-title">
                  <h3 className="text-white">
                    Color &amp; Passport Size
                    <br />
                    Photographs
                  </h3>
                </div>
              </div>
              {/*End Single Documents Box*/}
            </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default RequiredDocuments