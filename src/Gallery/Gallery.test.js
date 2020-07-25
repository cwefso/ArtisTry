import React from 'react';
import Gallery from './Gallery'
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

const paintings = [
  {
  title: "Mona Lisa",
  contentId: 225189,
  artistContentId: 225091,
  artistName: "Leonardo da Vinci",
  competitionYear: 1519,
  yearAsString: "1519",
  width: 2835,
  image: "https://uploads7.wikiart.org/images/leonardo-da-vinci/mona-lisa.jpg!Large.jpg",
  height: 4289
  },
  {
    title: "The Starry Night",
    contentId: 207190,
    artistContentId: 204915,
    artistName: "Vincent van Gogh",
    competitionYear: 1889,
    yearAsString: "1889",
    width: 5000,
    image: "https://uploads4.wikiart.org/00142/images/vincent-van-gogh/the-starry-night.jpg!Large.jpg",
    height: 3959
  }, 
  {
    title: "The Son of Man",
    contentId: 211454,
    artistContentId: 210903,
    artistName: "Rene Magritte",
    competitionYear: 1964,
    yearAsString: "1964",
    width: 1252,
    image: "https://uploads3.wikiart.org/images/rene-magritte/son-of-man-1964(1).jpg!Large.jpg",
    height: 1624
  }
];

describe('Gallery', () => {

  it('renders loading message', () => {
    const { getByText } = render(<BrowserRouter><Gallery paintings= {[]}/></BrowserRouter>);
    const loadingMessage = getByText("Loading Collection...");
    expect(loadingMessage).toBeInTheDocument();
  });
  
  it("should display paintings on load", () => {
    const { getByRole } = render(
      <BrowserRouter><Gallery paintings= {paintings}/></BrowserRouter>
    );
    const mona = getByRole('img', {name: "Mona Lisa"} );      
    const starry = getByRole('img', {name: "The Starry Night"} );
    const son = getByRole('img', {name: "The Son of Man"}); 
    expect(mona).toBeInTheDocument();
    expect(starry).toBeInTheDocument();
    expect(son).toBeInTheDocument();
  })
})