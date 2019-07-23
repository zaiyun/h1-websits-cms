import React from 'react'
import Components from './index'
import SbEditable from 'storyblok-react'
import ReactMarkdown from 'react-markdown'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIcon: 0
    }
  }

  icon() {
    let icons = this.props.content.body.filter((icon, index) => {
      return this.state.currentIcon === index
    })
    if (icons.length) {
      return icons[0]
    }
    return null
  }



  render() {
    const { content } = this.props
    return (
      <SbEditable content={content}>
        
        <div className="feature util__flex-eq">
          <h2>{content.name}</h2>
          <p className="feature_discription">
          <ReactMarkdown source={content.description} />
          </p>
          
          <style jsx>{`
            .feature {
              text-align: ${content.text_align};
              padding: ${content.top_padding} 20px ${content.bottom_padding}; 
              padding-left: ${content.feature_left_padding};
              padding-right: ${content.feature_right_padding};
              max-width:${content.max_width};
              min-width:${content.min_width};
              margin:auto;
            }
            .feature h2{
              font-size: 26px;	
              font-weight: 500;	
              line-height: 32px;
              max-width: ${content.title_max_width};
             
            }

            .feature p{
              color: #333333;
              margin: ${content.margin};
              font-size:16px;
              line-height: 26px;
              max-width: ${content.discription_max_width};
              margin-left: ${content.left_padding};
              margin-right: ${content.right_padding};
            }

          `}</style>
          
        </div>
       
      </SbEditable>
    )
  }
}

