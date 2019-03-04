/* global describe, it, beforeEach, before, after */
import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom'
import Promise from 'bluebird'
import axios from 'axios'
import sinon from 'sinon'
import { expect } from 'chai'
import { mount } from 'enzyme'
import WhiskyShow from '../../../src/components/whiskies/WhiskyShow'

describe('WhiskyShow tests', () => {
  let wrapper, response

  before(done => {
    response = Promise.resolve({
      data: {
        _id: 1,
        name: 'Whisky',
        image: 'whisky.png',
        age: 18,
        price: 100,
        abv: 40,
        cask: 'Sherry',
        description: 'Lovely',
        distillery: {
          name: 'Whisky Distillery',
          country: 'Scotland'
        },
        tasted_by: {
          username: 'User',
          email: 'useremail@email.com'
        }
      }
    })
    sinon.stub(axios, 'get').returns(response)
    done()
  })

  after(done => {
    axios.get.restore()
    done()
  })

  beforeEach(done => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/whiskies/1']}>
        <Route path='/whiskies/:id' component={WhiskyShow} />
      </MemoryRouter>
    )
    done()
  })

  it('Should create the correct state', done => {
    response.then(() => {
      wrapper.update()
      expect(wrapper.find('WhiskyShow').state().data).to.be.an('object')
      expect(wrapper.find('WhiskyShow').state().data._id).to.eq(1)
      expect(wrapper.find('WhiskyShow').state().data.name).to.eq('Whisky')
      expect(wrapper.find('WhiskyShow').state().data.distillery.name).to.eq('Whisky Distillery')
      expect(wrapper.find('WhiskyShow').state().data.tasted_by.username).to.eq('User')
      done()
    })
  })

  it('Should render the correct HTML', done => {
    response.then(() => {
      wrapper.update()
      expect(wrapper.find('.section .container h3').text()).to.eq('Whisky')
      expect(wrapper.find('.section .container .columns .column Link').text()).to.eq('Whisky Distillery, Scotland')
      expect(wrapper.find('figure.image img').prop('src')).to.eq('whisky.png')
      done()
    })
  })
})
