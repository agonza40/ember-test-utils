/**
 * Unit test for dummy app demo route
 */
import {expect} from 'chai'
import {beforeEach, describe, it} from 'mocha'
import sinon from 'sinon'

import {returnPromiseWithArgs, stubStore} from 'dummy/tests/helpers/ember-test-utils/ember-data'
import {route} from 'dummy/tests/helpers/ember-test-utils/setup-test'

const test = route('demo', ['model:company'])
describe(test.label, function () {
  test.setup()

  let route, sandbox, store, resolver
  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    store = stubStore(this, sandbox)
    route = this.subject()
  })

  describe('.model()', function () {
    let model
    beforeEach(function () {
      resolver = returnPromiseWithArgs(store.findAll)
      route.model().then((value) => {
        model = value
      })
    })

    it('should find all the companies', function () {
      expect(store.findAll).to.have.been.calledWith('company')
    })

    describe('when findAll resolves', function () {
      beforeEach(function () {
        resolver.resolve(['one', 'two', 'three'])
        return resolver.promise
      })

      it('should return the proper username', function () {
        expect(model.username).to.equal('tony.stark')
      })

      it('should return the proper companies', function () {
        expect(model.companies).to.eql(['one', 'two', 'three'])
      })
    })
  })
})
