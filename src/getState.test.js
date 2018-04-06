import { getState } from './'
import loadable from './loadable'

describe('#getState', () => {
  it('should return only loaded components', () => {
    const getComponent = jest.fn(() => import('./__fixtures__/Dummy'))
    const Loadable = loadable(getComponent, {
      modules: ['./__fixtures__/Dummy'],
      filename: 'test.js',
    })
    expect(getState()).toEqual({ __LOADABLE_STATE__: { children: [] } })
    Loadable.load()
    expect(getState()).toEqual({
      __LOADABLE_STATE__: { children: [{ id: 'test.js-./__fixtures__/Dummy' }] },
    })
  })
})
