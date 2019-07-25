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

        {settings && settings.content.bottom_navi.map((column, index) =>
                
                  <div className="table-head">{column.head}
                    {column.solutions.map((nav_item,index)=>
                       <Link route={nav_item.link.cached_url} prefetch>
                        <div className="table-row"><a className="nav_link">{nav_item.name}</a></div>
                        </Link>
                    )}
                  </div>     
            )}

            </div>

       
        

        <style jsx>{`
  
        .nav_link {
          text-decoration:none;
        }

        
        .nav_link:hover {    
          color: #FFFFFF;
          
        }
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
        @media (max-width: 768px) {
          .table{  
            top:20%;
            position: relative;
            color: #FFFFFF;
            height: 50%;
            margin-left:3%;
            width:auto;
            border-collapse:collapse;
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
        @media (min-width: 768px) {
       .table{  
          top:20%;
          position: relative;
          color: #FFFFFF;
          height: 50%;
          margin-left:34%;
          width:auto;
          border-collapse:collapse;
          }
        }
      .table-row{
          cursor: pointer;
          color: #DEDEDE;
          padding-right:100px;
          margin-top:12px;
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