/* global describe, it, beforeEach */
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import WhiskyCard from '../../../src/components/whiskies/WhiskyCard'

describe('WhiskyCard tests', () => {

  let wrapper

  beforeEach(done => {
    const props = {
      _id: 1,
      name: 'Whisky',
      image: 'whisky.png',
      price: 100,
      distillery: {
        name: 'Whisky Distillery',
        country: 'Scotland'
      }
    }
    wrapper = shallow(<WhiskyCard {...props} />)
    done()
  })

  it('Should render the correct HTML', done => {
    expect(wrapper.find('.card').length).to.eq(1)
    expect(wrapper.find('.card-header').length).to.eq(1)
    expect(wrapper.find('.card-header-title').length).to.eq(1)
    expect(wrapper.find('.card-image').length).to.eq(1)
    expect(wrapper.find('.card-content').length).to.eq(1)
    done()
  })

  it('Should render the correct data', done => {
    expect(wrapper.find('.card-header-title').text()).to.eq('Whisky')
    expect(wrapper.find('.card-image').contains(<img src="whisky.png" alt="Whisky" />))
    expect(wrapper.find('.card-content .content').contains(<p><strong>Origin: </strong> Whisky Distillery, Scotland</p>) )
    expect(wrapper.find('.card-content .content').contains(<p>£100</p>))
    done()
  })
})
