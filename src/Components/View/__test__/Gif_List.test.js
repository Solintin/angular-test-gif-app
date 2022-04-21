import { render, screen } from "@testing-library/react";
import GifList from "../GifList";
import { BrowserRouter } from "react-router-dom";
const MockGifList = () => {
  return (
    <BrowserRouter>
      <GifList  gif={ApiMock} id={0}  />
    </BrowserRouter>
  );
};
const ApiMock = {
  images: {
    fixed_height: {
      url: "http://example.com",
    },
  },
};
describe("GifList", () => {
  test("renders list of gif images", async () => {
    render(<MockGifList />);
    const imageElement = await screen.findByTestId("image-0");
    expect(imageElement).toBeInTheDocument();
  });

  
  test("renders number of gif", async () => {
    render(<MockGifList />);
    const imageElements = await screen.findAllByTestId(/image/i);
    expect(imageElements.length).toBe(1);
  });
});
