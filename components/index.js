import React from 'react'
import Teaser from './teaser'
import Feature from './feature'
import Page from './page'
import Grid from './grid'
import Image from './image'
import Nav from './nav'
import Icon from './icon'
import Button from './button'
import Detail from './detail'
import Contact from './contacts'
import Footer from './footer'
import Dropdown from './dropdown'
import Slide from './slide'

const Components = {
  'teaser': Teaser,
  'feature': Feature,
  'page': Page,
  'grid': Grid,
  'image': Image,
  'nav' : Nav,
  'icon':Icon,
  'button':Button,
  'detail':Detail,
  'contact':Contact,
  'footer': Footer,
  'dropdown': Dropdown,
  'slide':Slide,
}

export default (blok) => {
  if (typeof Components[blok.component] !== 'undefined') {
    return React.createElement(Components[blok.component], { key: blok._uid, content: blok })
  }
  return React.createElement(() => (
    <div>The component {blok.component} has not been created yet.</div>
  ), {key: blok._uid})
}