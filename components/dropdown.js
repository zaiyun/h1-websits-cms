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
        document.addEventListener('mouseover', this.hideDropdownMenu);
        });
      }
    
      hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
          document.removeEventListener('mouseover', this.hideDropdownMenu);
        });
    
      }
    
      render() {
        const color= this.props.color;
        return (
            <div  className="dropdown" onMouseOver={this.showDropdownMenu}  >
             <div className="button" > {this.props.name} </div>
                
              { this.state.displayMenu ? (
              <ul >
             <li ><a className="active" href="#Create Page">Create Page</a></li>
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
            top:27px;
            right:0px;
            width: 100%;
            background-color: #3b3e74; 
            position: absolute;
            z-index: 1;
       }
        li a {
            color: white;
            text-decoration: none;
       }
        li {
            padding-left:10px;
            padding-right:10px;
            padding-top: 8px;
           
       }
        li:last-child {
            padding-bottom: 8px;
          
       }
        li:hover {
            background-color: #e5e5e5;
            color: white;
       }
        .button{
            padding-left:10px;
            padding-right:10px;
            width:120px;
            height:auto;
            border-radius:0px;
            color:${color};
       }
        .button:before{
            content:"";
            position:absolute;
            width:0px;
            height:0px;
            border: 7px solid;
            border-color: ${color} transparent transparent transparent;
            right:27px;
            top:7px;
            
       }
       .button:hover{
            
      
        background-color: #3b3e74;
        
   }
       
           `}
           </style>
           </div>
    
        );
      }
    }
    
    export default Dropdown;