import React from 'react'
import Components from './index'
import SbEditable from 'storyblok-react'

class Dropdown extends React.Component {
    constructor(){
     super();
    
     this.state = {
           displayMenu: false,
         };
    
      this.showDropdownMenu = this.showDropdownMenu.bind(this);
      this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    
    };
    
    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }
    
      hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }
    
      render() {
        return (
            <div  className="dropdown"  >
             <div className="button" onClick={this.showDropdownMenu}> My Setting </div>
    
              { this.state.displayMenu ? (
              <ul>
             <li><a className="active" href="#Create Page">Create Page</a></li>
             <li><a href="#Manage Pages">Manage Pages</a></li>
             <li><a href="#Create Ads">Create Ads</a></li>
             <li><a href="#Manage Ads">Manage Ads</a></li>
             <li><a href="#Activity Logs">Activity Logs</a></li>
             <li><a href="#Setting">Setting</a></li>
             <li><a href="#Log Out">Log Out</a></li>
              </ul>
            ):
            (
              null
            )
            }
    
    

           <style jsx>{`
           .dropdown {
            position: relative;
            display: inline-block;
       }
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            top:45px;
            right:0px;
            width: 200px;
            background-color: white;
            font-weight:bold;
            position: absolute;
       
           
            z-index: 1;
       }
        li a {
            color: #000;
            text-decoration: none;
       }
        li {
            padding: 8px 16px;
           
       }
        li:last-child {
            border-bottom: none;
       }
        li:hover {
           
            color: white;
       }
        .button{
            width:178px;
            height:18px;
            border-radius:5px;
            font-weight:bold;
            color:white;
       }
        .button:before{
            content:"";
            position:absolute;
            width:0px;
            height:0px;
            border: 10px solid;
            border-color: white transparent transparent transparent;
            right:40px;
           
            top:8px;
       }
           `}
           </style>
           </div>
    
        );
      }
    }
    
    export default Dropdown;