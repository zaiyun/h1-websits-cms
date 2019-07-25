import React from 'react'
import { Link } from '../routes'
import SbEditable from 'storyblok-react'
import Dropdown from './dropdown'
import { blue } from 'ansi-colors';
export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
  


    const { settings, co } = this.props
    const fontColor = co === '#060464'  ? '#FFFFFF' : '#333333';
    const lineColor = co === '#060464'  ? '#FFFFFF' : '#060464';
    return (
      
      <header className="top-header  util__flex util__container"  >
            <l1 href="/" className="top-header__logo">
              <l1 >{settings.content.logo}</l1>
            </l1> 
        <nav className="top-header__col" >
          <ul className="top-header__nav">
            {settings && settings.content.main_navi.map((navitem, index) =>
                <li key={index}>
                    <a className="top-header__link">   <Dropdown name = {navitem.name} color = {fontColor} /></a>
                </li>
            )}
          </ul>
        </nav>
        
        
        
          
        <nav className="top-header__col top-header__second-navi">
          <div>
            <ul className="top-header__nav top-header__nav--right">
          
              <li >
            
                <Link route="/en/blog"><a className="top-header__link top-header sign-in">{settings.content.sign_in}</a></Link>
               
            </li>
            <li>
         
            <Link route="/en/blog"><button className="top-header__link">{settings.content.demo_button}</button></Link>
        </li>
        </ul>
        </div>
        
        </nav>
        
        
        <div><hr className = "hr"></hr></div>
        
        

        <style jsx>{`
          .top-header {
            color: ${fontColor}; 
            padding-top: 20px;
            padding-bottom: 10px;
          }
          .top-header__col{
            margin-right: 5%;
            margin-left: 2%;
            margin-top:auto;
            
            margin-bottom:auto;
            white-space: nowrap;
            
            
          }
          .top-header__logo { 
            margin-top:auto;
            margin-bottom:auto;
            margin-left: 5%;
            height: 24px;
            width: 30px;
            color: ${lineColor}; 
            font-family: Montserrat;
            font-size: 20px;
            font-weight: bold;
            line-height: 24px;
          }
          .top-header button{
            background-color: #FAB3A3;
            border-radius: 2px;
            color: #333333;
            font-family: 'Montserrat';
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.5px;
            line-height: 12px;
            border-width:.5px;
            border-color:#FAB3A3;
            height:34px;
            width:124px;
          }
          .top-header button:hover{
            background-color:#FFCDC1;
            border-color:#FFCDC1;
            transition: background .7s ease;
            transition: border .7s ease;
          }

          }
          .top-header__second-navi {
            text-align: right;
            margin-left: auto;
          }
          .top-header__nav {  
            display: flex;
            list-style: none;
            margin: 0;
            padding-left: 0px;
          }
          .top-header__nav li {
            padding: 0 40px 0 0;
          }
          .top-header__nav--right li {
            margin-top:auto;
            margin-bottom:auto;
            padding-right: 0;
            padding:auto;
            padding-left: 40px;
          }
          .top-header__link {
            line-height: 1.5;
            text-decoration: none;
            border-bottom: 2px solid transparent;
            transition: border .15s ease;
            font-family: 'Montserrat';
            font-size: 16px;
            line-height: 18px;
            
            
          }
          .top-header__link:hover {
            border-bottom: 2px solid white;
          }
          

         .sign-in{
          font-family: 'Montserrat';
          font-family: Montserrat;
          font-size: 18px;
          line-height:22px;
          font-weight: bold;
         
         }
         .hr{
          position:absolute;
          box-sizing: border-box;
          left: 0;
          right: 0;
          margin-left: auto;
          margin-right: auto;
          top: 55px;
          width: 90%;
          border: 0.7px solid ${lineColor};
        }
            
       
          
        `}</style>
        
        
      </header>
      
      
    )
  }
}