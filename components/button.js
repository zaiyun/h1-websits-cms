import React from 'react'
import { Link } from '../routes'
import SbEditable from 'storyblok-react'

export default class extends React.Component {
    constructor(props) {
      super(props)
    }

render(){
 const { content } = this.props
 return(
  <SbEditable content={content}>
    <div className="button">
        
         <Link route= {content.link.cached_url}prefetch>
            <button className="button_button">
             {content.name}
             </button>
             </Link>
         <div className="lm"> 
           <Link route= "/curie">
            <a className="a" >
            {content.button2}
            </a>
          </Link>
        </div>
        
        
         {content.borderline == true && <div><hr className = "hr"></hr></div>}
        
         
        
      <style jsx>{`
       
       
       .button {
         text-align:center;
         border-color:#060364;
         
       }
       
       .button_button {
        border-color:#060364;
        margin:auto;
        background-color: #060364;
        height: 36px;
        width: 161px;
        color: #FFFFFF;
        border-radius: 2px;
        box-shadow: 0px 5px 7px 0px rgba(0,0,0,0.5);
        line-height: 18px;
        font-size: 14px;
        font-weight: light;
        letter-spacing: 0.5px;
        font-family: 'Montserrat', sans-serif;
        
        
      }
      

      .button button:hover{
        background-color:#000;
      }
      
      

      .lm { 
        color:#0AAACD;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.5px;
        line-height: 18px;
        text-align: center;
        padding:20px;
        
      }

      .a {
        color:#0AAACD;
        text-decoration:none;
      }

      
      .a:hover {
        border-color:#0AAACD;
        border-bottom: 2px solid;
        
      }

      .hr{
        margin-top:50px;
        box-sizing: border-box;
        height: 1px;
        width: 497px;
        border: 1px solid #D7D7D7;
      }
    

     

      `}</style>
    </div>
  </SbEditable>
 )

    }
}