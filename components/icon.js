import React from 'react'
import SbEditable from 'storyblok-react'

export default ({ content }) => (
  <SbEditable content={content}>
    <div className="icon">
      <img src={content.image} />
      <style jsx>{`
       .icon img{
        
        margin-right: 20px;
        margin-left: 20px;
        
        text-align:center;
        
        
        max-height: 88px;
        vertical-align:middle

       }
      `}</style>
    </div>
  </SbEditable>
)

