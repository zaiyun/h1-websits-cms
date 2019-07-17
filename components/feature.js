import React from 'react'
import Components from './index'
import SbEditable from 'storyblok-react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIcon: 0
    }
  }
  // resizedIcon(index) {
  //   const { content } = this.props
  //   if (typeof content.icons !== 'undefined') {
  //     return content.icon.replace('//a.storyblok.com', '//img2.storyblok.com/50x50')
  //   }
  //   return null
  // }

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
          {/* {this.icon() ? Components(this.icon()) : ''} */}
          <h2>{content.name}</h2>
          <div className="feature__description">
            {content.description}
          </div>
          {/* <img src={this.resizedIcon()} className="feature__icon" /> */}
         
          <style jsx>{`
            .feature {
              text-align: center;
              padding: 30px 10px 20px;
            }

            .feature__icon {
              max-width: 800px;
            }
          `}</style>
          
        </div>
       
      </SbEditable>
    )
  }
}

