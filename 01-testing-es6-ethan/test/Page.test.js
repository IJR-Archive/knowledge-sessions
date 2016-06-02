import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import Page from '../src/Page'

describe('Page', () => {
  it('should say hi', () => {
    const wrapper = shallow(<Page name={'Marty'} />)
    expect(wrapper.find('h1').text()).to.include('Hi Marty!')
  })
})
