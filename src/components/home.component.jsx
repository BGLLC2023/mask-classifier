import React from "react";
import Header from "./header.component";
import New from "./newOffer.component";
import H1 from "./h1.component";
import Features from "./feature.component";
import '../styles/home.scss'

function HomePage(){
  return(
    <div className="main-div">

      <div className="header-div">
        <Header/>
      </div>
      <div>
        <div className="content">
          <New l1='N' l2='E' l3='W' project='Mask Classifier'/>
          <H1/>
        </div>
        <div>
          <Features/>
        </div>
      </div>
      
     
   </div>

  )

}



export default HomePage
