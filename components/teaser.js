import React from 'react'
import Components from './index'
import SbEditable from 'storyblok-react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlide: 0
    }
  }

  slide() {
    let slides = this.props.content.body.filter((slide, index) => {
      return this.state.currentSlide === index
    })
    if (slides.length) {
      return slides[0]
    }
    return null
  }

  render() {
    const { content } = this.props
    return (
      <SbEditable content={content}>
        <div className="teaser">
          {this.slide() ? Components(this.slide()) : ''}
          <div>
            <p className = "teaser_headline1">
            {content.headline1}
            </p>
            <p className = "teaser_headline2">
              {content.headline2}
            </p>
         </div>

          <style jsx>{`
             .teaser{
              background-color: #060464;
              padding-top:20px;
             }
             .teaser div{
              text-align: center;
              position: absolute;
              top: 25%;
              color: #FFFFFF;
              
              left:0;
              width: 100%
            }
            .teaser_headline1 {   
                color: #FFFFFF;
                font-family: Montserrat, sans-serif;
                font-size: 42px;
                line-height: 52px;
                margin:auto;
                text-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
              
            }
            .teaser_headline2{
           
                margin:auto;
                color: #FFFFFF;
                font-family: Montserrat, sans-serif;
                font-size: 26px;
                font-weight: 540;
                line-height: 32px;
                max-width: 540px;
                text-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
              
              
            } 
            
          `}</style>
        </div>
      </SbEditable>
    )
  }
}