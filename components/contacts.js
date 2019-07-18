import React from 'react'
import SbEditable from 'storyblok-react';


export default class extends React.Component {

  render(){
    const { content } = this.props
    return(
  <SbEditable content={content}>
    <div className="contact">
        <p>
        <input placeholder="Name"></input>
        </p>
        <input placeholder="Company"></input>
        <p>
        <input placeholder="Email"></input>
        </p>
        <p>
        <input placeholder="- Select Product -"></input>
        </p>
        <p>
        <input placeholder="Phone (optional)"></input>
        </p>
        <p>
        <input placeholder="Message (optional)"></input>
        </p>
      <style jsx>{`
        .contact{
            text-align: left;
            padding-top:70px;
            
            padding-left: ${content.left_padding};
            padding-right: ${content.right_padding};
            max-width:600px;
            
            height: 200px;
            
            
        }
        .contact input{
            border-width:0px;
            border-bottom: 1px solid rgba(0,0,0,0.12);
            margin-bottom: 10px;
            width: 500px;
            font-size: 16px;
        }
        .contact input:focus{
            outline: none;
        }
        
      `}</style>
    </div>
  </SbEditable>
    )
  }
}