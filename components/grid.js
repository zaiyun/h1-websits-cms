import React from 'react'
import Components from './index'
import SbEditable from 'storyblok-react'

export default (props) => (
  <SbEditable content="props.content">
    <div className="util__flex">
      {props.content.columns.map((blok) =>
        Components(blok)
      )}
    </div>
    <style jsx>{`
    .util__flex{
      padding-bottom: ${props.content.bottom_padding};
      padding-top: ${props.content.top_padding};
    }
    `}</style>
  </SbEditable>
)