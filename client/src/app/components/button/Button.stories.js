import { Button }  from "./index.js"
import React from 'react'


export default {
  title: 'Button',
  component: Button,
}

export const Secondary = () => <Button type='secondary'></Button>

export const Tamplate = (args) => <Button {...args}></Button>

export const Primary = Tamplate.bind({}); //bind the button to tamplate

Primary.args = {
  type: 'primary',
  label: 'Primary Button'
}


Secondary.storyName = 'Default';

