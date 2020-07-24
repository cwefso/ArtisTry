  
import {renderHook} from '@testing-library/react-hooks';
// import TestRenderer from 'react-test-renderer';
import usePaintings from './usePaintings';


describe('the usePaintings hook', () => {
    beforeAll(() => {
        jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
            json: () => Promise.resolve({
                paintings: [
                  {
                    "title": "The River Thames with St. Paul's Cathedral on Lord Mayor's Day",
                    "contentId": 250550,
                    "artistContentId": 250406,
                    "artistName": "Canaletto",
                    "completitionYear": 1746,
                    "yearAsString": "1746",
                    "width": 1296,
                    "image": "https://uploads6.wikiart.org/images/canaletto/the-river-thames-with-st-paul-s-cathedral-on-lord-mayor-s-day.jpg!Large.jpg",
                    "height": 676
                  },
                  {
                    "title": "Just what is it that makes today's homes so different, so appealing?",
                    "contentId": 243774,
                    "artistContentId": 243771,
                    "artistName": "Richard Hamilton",
                    "completitionYear": 1956,
                    "yearAsString": "1956",
                    "width": 1211,
                    "image": "https://uploads3.wikiart.org/images/richard-hamilton/http-en-wikipedia-org-wiki-file-hamilton-appealing2-jpg-1956.jpg!Large.jpg",
                    "height": 1260
                  },
                  {
                    "title": "Cape Cod Morning",
                    "contentId": 235538,
                    "artistContentId": 235517,
                    "artistName": "Edward Hopper",
                    "completitionYear": 1950,
                    "yearAsString": "1950",
                    "width": 1000,
                    "image": "https://uploads1.wikiart.org/images/edward-hopper/cape-cod-morning.jpg!Large.jpg",
                    "height": 857
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
        const { result, waitForNextUpdate } = renderHook(() => usePaintings());
        await waitForNextUpdate();
        expect(fetch).toHaveBeenCalledTimes(1);
        console.log(result)
        expect(result.current.paintings.length).toEqual(3)
    })

});