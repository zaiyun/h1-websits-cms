import React from 'react'
import { Link } from '../routes'
import SbEditable from 'storyblok-react'
import Dropdown from './dropdown'
export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings } = this.props
    return (
      
      <header className="top-header util__flex util__container">
        
      <l1 href="/" className=" top-header__logo">
              <l1>{settings.content.logo}</l1>
            </l1>
        <nav className="top-header__col">
          <ul className="top-header__nav">
          
            {settings && settings.content.main_navi.map((navitem, index) =>
                <li key={index}>
                  <Dropdown/>
                  <Link route={navitem.link.cached_url} prefetch>
                    <a className="top-header__link">{navitem.name}</a>
                  </Link>
                </li>
            )}
          </ul>
        </nav>
        
        
        
          
        <nav className="top-header__col top-header__second-navi">
          <div>
            <ul className="top-header__nav top-header__nav--right">
          
              <li>
                <Link route="/en/blog"><a className="top-header__link">{settings.content.sign_in}</a></Link>
            </li>
            
            <li>
            <Link route="/en/blog"><button className="top-header__link">{settings.content.demo_button}</button></Link>
            </li>
        </ul>
        </div>
        
        </nav>
        
        
        
        
        

        <style jsx>{`
          .top-header {
            
            background-color: #060464;
            padding-top: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #ECF0F1;
            
          }
          .top-header__col{
            margin-right: 200px;
            margin-left: 40px;
            white-space: nowrap;
            
          }
          .top-header__logo { 
            margin-left: 160px;
            height: 24px;
            width: 30px;
            color: #FFFFFF;
            font-family: Montserrat;
            font-size: 20px;
            font-weight: bold;
            line-height: 24px;
          }
          .top-header button{
        
            background-color: #FAB3A3;
            border-radius: 2px;
            color: #333333;
            font-family: 'Montserrat', sans-serif;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.5px;
            line-height: 15px;
            text-align: center
            border-width:.5px;
            border-color:#FAB3A3;
            padding: 10px 15px 10px 15px;
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
            padding-right: 0;
            padding-left: 20px;
          }
          .top-header__link {
            
            line-height: 1.5;
            color: #FFFFFF;
            text-decoration: none;
            border-bottom: 2px solid transparent;
            transition: border .15s ease;
            mr-auto;
            font-weight:400;
          }
          .top-header__link:hover {
            border-bottom: 2px solid white;
          }
          
          .hr{
            box-sizing: border-box;
            height: 1px;
            width: 437px;
            border: 1px solid #D7D7D7;
            margin-top:4.5%;
          }

          .line {
            box-sizing: border-box;
            height: 1px;
            width: -1695px;
            border: 1px solid #ECF0F1;}

            
       
          
        `}</style>
        
        
      </header>
      
      
    )
  }
}