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

  // pagClass(index) {
  //   return 'teaser__pag-dot ' + (index == this.state.currentSlide ? 'teaser__pag-dot--current' : '')
  // }

  // handleDotClick(index) {
  //   this.setState({
  //     currentSlide: index
  //   })
  // }

  render() {
    const { content } = this.props
    return (
      <SbEditable content={content}>
        <div className="teaser">
          {this.slide() ? Components(this.slide()) : ''}
          <div>
            {content.headline1}
            <h2>
              {content.headline2}
            </h2>
         </div>

          <style jsx>{`
             .teaser{
              background-color: #060464;
             }
             .teaser div{
              text-align: center;
              font-size: 42px;	
              line-height: 52px;
              position: absolute;
              top: 20%;
              color: #FFFFFF;
              left:0;
              width: 100%
            }
    
            .teaser h2{
              font-size: 26px;	
              font-weight: 600;
              text-align: center;
              position: absolute;
              color: #FFFFFF;
              left:0;
              width: 100%;
            } 
            
          `}</style>
        </div>
      </SbEditable>
    )
  }
}