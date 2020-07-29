import { renderHook } from '@testing-library/react-hooks'
import usePaintingSummary from './usePaintingSummary'
// import TestRenderer from 'react-test-renderer';

describe('the usePaintingSummary hook', () => {
  beforeAll(() => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        paintingSummary: [
          {
            artistUrl: 'edward-hopper',
            url: 'morning-sun',
            location: null,
            period: null,
            genre: 'genre painting',
            style: 'New Realism',
            technique: null,
            galleryName: 'Columbus Museum of Art',
            title: 'Morning Sun',
            artistName: 'Hopper Edward',
            completionYear: 1952
          }
        ]
      })
    }))
    jest.setTimeout(30000)
  })

  afterEach(() => {
    global.fetch.mockClear()
  })

  afterAll(() => {
    global.fetch.mockRestore()
  })

  it('should make the api call to fetch the default value and set it in the state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => usePaintingSummary())
    await waitForNextUpdate()
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(result.current.paintingSummary.length).toEqual(1)
  })
})
