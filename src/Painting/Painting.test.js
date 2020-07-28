import React from "react";
import Painting from "./Painting";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

describe("Painting", () => {

  it("should display paintings on load", () => {
    const painting = {
      artistId: "57726d85edc2cb3880b48ccd",
      artistName: "Leonardo da Vinci",
      artistUrl: "leonardo-da-vinci",
      competitionYear: 1519,
      height: 600,
      id: "57726d85edc2cb3880b48ccd",
      image: "https://uploads7.wikiart.org/images/leonardo-da-vinci/mona-lisa.jpg!Large.jpg",
      title: "Mona Lisa",
      url: "mona-lisa",
      width: 397
    }

    const { getByRole, getByAltText } = render(
      <BrowserRouter><Painting painting= {painting}/></BrowserRouter>
    )
      
    const title = getByAltText("Mona Lisa");
    expect(title).toBeInTheDocument();
    const img = getByRole("img")
    expect(img).toBeInTheDocument();
  })
})
