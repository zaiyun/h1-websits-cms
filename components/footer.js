import React from 'react'
import { Link } from '../routes'
import SbEditable from 'storyblok-react'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings } = this.props
    return (
      
      <div className="table">
        <div className="table-row">
        <div className="table-head">Table Header</div>
        <div className="table-head">Table Header</div>
        <div className="table-head">Table Header</div>
     </div>
     <div className="table-row">
        <div className="table-cell">Table Cell</div>
        <div className="table-cell">Table Cell</div>
        <div className="table-cell">Table Cell</div>
     </div>
        
        
        
        
        
        

        <style jsx>{`
       .table{
        display: table;
        width:100%;
        border-collapse:collapse;
        }
      .table-row{
          display: table-row;
        }
      .table-cell, .table-head{
            display: table-cell;
            padding:1em;
            border:#f0f0f0 1px solid;
          }
      .table-head{
           font-weight:bold;
          }
          
        `}</style>
        
        
      </div>
      
      
    )
  }
}