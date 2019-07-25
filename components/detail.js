import React from 'react'
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

  bullet_points=(array,bool)=>{
        let styles = {
            fontFamily:'Montserrat',
            position: 'relative',
            paddingBottom:'10px',
            fontSize:'16px',
            color :'#333333',
            padding: '0px',
        }
        
      
    if(bool == true){
    return(
     array.map((bullet,index) =>
      
          <li style = {styles}>
               <ReactMarkdown  source={bullet} /> 
          </li>
            
      
    ))
    }else{
        return;
    }
    
  }


  render() {
    
    const { content } = this.props
    var bullets = String(content.bullets)
    console.log(bullets)
    var bool = false
    if(bullets ===''){
         bool = false;
    }else{
         bool = true;
    }
    const array = bullets.split('-')
    
    return (
      <SbEditable content={content}>
        
        <div className="detail util__flex-eq">
            
            <img className="detail__icon" src={content.icon} />

          <h2>{content.name}</h2>
          <p className="detail__description">
            {content.description}
          </p>
       
         <ul>
         {this.bullet_points(array,bool)}
        </ul>
         



          <style jsx>{`
            .detail {
              text-align: ${content.text_align};
              padding: ${content.top_padding} 20px ${content.bottom_padding}; 
              padding-left: ${content.left_padding};
              padding-right: ${content.right_padding};
              max-width:300px;
                       
            }
            
            .detail ul{
                padding-left: 20px;
            }
            

            .detail ul li::before{
                content:"•";
                font-size: 30px;
                color: #060464;
                line-height: 1em;
                vertical-align: middle;
                display: inline-table;
                font-weight: bold;
                
            }
            .detail li{
                
                position: relative;
                font-size: 16px;
            }

            
            .detail h2{ 
              color:#333333;
              font-size: 18px;
              font-weight: bold;
              line-height: 22px;
            }
            
            .detail p{
              color: #333333;
              font-size: 16px;	
              line-height: 26px;
              
            }
            .detail__icon {
              max-width: ${content.icon_max_width};
            }
          `}</style>
          
        </div>
       
      </SbEditable>
    )
  }
}

