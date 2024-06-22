import React from "react";
import '../styles/new.scss'

function New({l1,l2,l3,project}){
  return(
    <div className="new">
      <div className="l-div">{l1}</div>
      <div className="l-div">{l2}</div>
      <div className="l-div">{l3}</div>
      <div className="pName">{project}</div>
    </div>
  )
}

export default New