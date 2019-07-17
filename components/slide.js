import React from 'react'
import SbEditable from 'storyblok-react';


export default class extends React.Component {
  resizedIcon(index) {
    const { content } = this.props
    if (typeof content.image !== 'undefined') {
      return content.image.replace('//img2.storyblok.com/120x120', '//a.storyblok.com')
    }
    return null
  }
  
  render(){
    const { content } = this.props
    return(
  <SbEditable content={content}>
    <div className="slide">
      <img src={content.image} />
    
      <style jsx>{`
        .slide{
          
        }
        .slide img {
          opacity: 0.8;
          display: block;
          margin-left: auto;
          margin-right: auto;
          text-align:center;
          width: 45%;
          
          max-height: 700px;
          vertical-align:middle
          

        }
       
         
        
        
      `}</style>
    </div>
  </SbEditable>
    )
  }
}