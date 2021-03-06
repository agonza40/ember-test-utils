/**
 * Integration test of the my-greeting component
 */
import {expect} from 'chai'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach, describe, it} from 'mocha'
import {integration} from 'dummy/tests/helpers/ember-test-utils/setup-component-test'

const test = integration('my-greeting')
describe(test.label, function () {
  test.setup()

  describe('when rendereed', function () {
    beforeEach(function () {
      this.set('name', 'Paul')
      this.render(hbs`{{my-greeting name=name}}`)
    })

    it('should render an <h2> tag', function () {
      expect(this.$('h2')).to.have.length(1)
    })

    it('should render the greeting within the <h2> tag', function () {
      expect(this.$('h2').text().trim()).to.equal('Hello, Paul')
    })
  })
})
