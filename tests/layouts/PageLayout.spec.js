import React from 'react'
import PageLayout from 'layouts/AppLayout/AppLayout'
import { shallow } from 'enzyme'

describe('(Layout) AppLayout', () => {
  it('renders as a <div>', () => {
    shallow(<PageLayout />).should.have.tagName('div')
  })

  it('renders a project title', () => {
    shallow(<PageLayout />).find('h1').should.have.text('React Redux Starter Kit')
  })

  it('renders its children inside of the viewport', () => {
    const Child = () => <h2>child</h2>
    shallow(
      <PageLayout>
        <Child />
      </PageLayout>
    )
      .find('.page-layout__viewport')
      .should.contain(<Child />)
  })
})
