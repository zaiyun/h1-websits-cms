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
            <button>
             {content.name}
             </button>
         </Link>
        
      <style jsx>{`
       .button button{
        
        background-color: #060364;
        height: 36px;
        width: 161px;
        color: #FFFFFF;
        border-radius: 2px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.5px;
        line-height: 18px;
        text-align: center;
      }
      `}</style>
    </div>
  </SbEditable>
 )

    }
}