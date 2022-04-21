import { render, screen, fireEvent} from "@testing-library/react";
import Input from "../input";

const MockSearchFunction = jest.fn();

describe("AddInput", () => {
  test("Should render input element", async () => {
    render(
      <Input
        searchQuery={""}
        handleSearchQuery={MockSearchFunction}
        handleSearch={MockSearchFunction}
      />
    );
    const inputElemnet = screen.getByPlaceholderText(/Search your fav gif.../i);
    expect(inputElemnet).toBeInTheDocument();
  });


  test("Should be able to type into input",  () => {
    render(
      <Input
        // searchQuery={""}
        handleSearchQuery={MockSearchFunction}
        handleSearch={MockSearchFunction}
      />
    );
    const inputElemnet = screen.getByPlaceholderText(/Search your fav gif.../i);
    fireEvent.change(inputElemnet, { target : {value : "Cook" }})
    expect(inputElemnet.value).toEqual("Cook");
  });

    test("Should be empty if Search button is clicked", async () => {
    render(
      <Input
        // searchQuery={""}
        handleSearchQuery={MockSearchFunction}
        handleSearch={MockSearchFunction}
      />
    );
    const inputElemnet = screen.getByPlaceholderText(/Search your fav gif.../i);
    const buttonElement = screen.getByTestId("search");
    fireEvent.change(inputElemnet, { target: { value: "" } });
    fireEvent.click(buttonElement);
    expect(inputElemnet.value).toBe("");
  });
  
});



