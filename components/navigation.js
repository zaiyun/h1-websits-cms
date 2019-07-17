import React from 'react'
import Components from './index'
import SbEditable from 'storyblok-react'

export default class extends React.Component {
    constructor(props){   
    const { content } = this.props

    }



    render(){
        const { content } = this.props
        return(
            <SbEditable content={content}>
            




            </SbEditable>

        )
    }
}