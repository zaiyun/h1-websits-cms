import React from 'react'
import Teaser from './teaser'
import Feature from './feature'
import Page from './page'
import Grid from './grid'
import Slide from './slide'
import Nav from './nav'
import Icon from './icon'
import Button from './button';

const Components = {
  'teaser': Teaser,
  'feature': Feature,
  'page': Page,
  'grid': Grid,
  'slide': Slide,
  'nav' : Nav,
  'icon':Icon,
  'button':Button,
}

export default (blok) => {
  if (typeof Components[blok.component] !== 'undefined') {
    return React.createElement(Components[blok.component], { key: blok._uid, content: blok })
  }
  return React.createElement(() => (
    <div>The component {blok.component} has not been created yet.</div>
  ), {key: blok._uid})
}