  
import { renderHook } from '@testing-library/react-hooks';
import usePaintingSummary from './usePaintingSummary';

describe('the usePaintingInfo hook', () => {
  beforeAll(() => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        paintingInfo: [
          {
            artistId: "57726d85edc2cb3880b48ccd",
            artistName: "Leonardo da Vinci",
            artistUrl: "leonardo-da-vinci",
            completitionYear: 1519,
            height: 600,
            id: "57727444edc2cb3880cb7bf6",
            image: "https://uploads7.wikiart.org/images/leonardo-da-vinci/mona-lisa.jpg!Large.jpg",
            title: "Mona Lisa",
            url: null,
            width: 397
          }
        ]
      })
    }))
    jest.setTimeout(30000)
  });

  afterEach(() => {
      global.fetch.mockClear();
  });

  afterAll(() => {
      global.fetch.mockRestore();
  })

  it('should make the api call to fetch the default value and set it in the state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => usePaintingSummary());
    await waitForNextUpdate();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result.current.paintingInfo.length).toEqual(1)
  })
});