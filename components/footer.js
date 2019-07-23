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
      
      <div className="footer">
       <div className="logo-text">
              H1.
      </div>
        <div className="table"> 
              <div className="table-head">
                  Solutions
                  <div className="table-row">
                  H1.Curie - Opinion Leader Platform
                  </div>
              </div>
              <div className="table-head">Company
                  <div className="table-row">
                    Blog
                    </div>
                    <div className="table-row">
                    Hi
                    </div>
                    <div className="table-row">
                    About
                    </div>
                    <div className="table-row">
                    Press
                    </div>
                    <div className="table-row">
                    Yo
                    </div>
                  </div>
            <div className="table-head">Legal
            
                <div className="table-row">
                  Terms of Use
                </div>

                </div>
        
       
       </div>
        
        
        
        
        
        

        <style jsx>{`
  
        .footer{
          position: relative;
          height: 328px;
          background-color: #060464;
          overflow: hidden; 
          
        }
        @media (max-width: 768px) {
          .logo-text{
            display:none;
          }
        }
        .logo-text{
          float:left;
          position: relative;
          color: #FFFFFF;
          font-size: 75px;
          font-weight: bold;
          top:17%;
          margin:auto;
          margin-left:20%;
          margin-right:30px;         
        }
       .table{  
          top:20%;
          position: relative;
          color: #FFFFFF;
          height: 50%;
          margin-left:15%;
          width:auto;
          border-collapse:collapse;
          }
      .table-row{
          color: #FFFFFF;
          padding-right:100px;
          margin-top:7px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1.7px;
          line-height: 15px;
        }
      .table-head{
            
            color: #DEDEDE;
            font-size: 13px;
            font-weight: bold;
            letter-spacing: 1.7px;
            line-height: 15px;
            display: table-cell;     
          }
          
        `}</style>
        
        
      </div>
      
      
    )
  }
}