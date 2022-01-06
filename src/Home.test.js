import {
  render,
  fireEvent,
  screen,
  cleanup,
  getByText,
  getByTestId,
  waitFor,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Home from "./Home";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";

describe("Input component", () => {
  afterEach(cleanup);
  it("text changed", () => {
    const { getByText } = render(<Home />);
    expect(getByText(/Initial/i).textContent).tobe("Hi");
    fireEvent.click(getByTestId("Button1"));
    expect(getByText(/Initial/i).textContent).tobe("Hi Dharneesh here");
  });

  //fireevent before
  it("firevent render", () => {
    const { getByTestId } = render(<Home />);
    const { getByText } = within(getByTestId("hitest"));
    expect(getByText("Hi")).toBeInTheDocument();
  });
   it("two buttons are rendered",()=>{
          const {getAllByTestId} = render(<Home/>);
           const buttonlist = getAllByTestId("Button1");
           expect (buttonlist).toHaveLength(2);
       });

  it("rendered input", () => {
    const { getByTestId } = render(<Home />);
    const input = getByTestId("searchtext");
    expect(input).toBeTruthy();
  });

  it("render prop", () => {
    const { getByTestId } = render(<Home descrip={true} />);
    const prop = getByTestId("displaydescrip");
    expect(prop).toBeTruthy();
  });

  // it("firevent renderss",async()=>{
  //     await act( async()=>{
  //     const {getByTestId} = render(<Home/>);
  //     const {getByText} = within(getByTestId("hitest"))
  //     const buttonElement = screen.getByRole("button", { name: /click here to know my name/i});

  //     const inputword="Hi Dharneesh here"
  //     await   fireEvent.click(buttonElement)
  //     const header = getByTestId("hitest");
  //     expect (header.innerHTML).toBe(inputword);

  //     })

  // });
  //fireevent after
  // it('should have empty input when add button is cliked', () => {
  //     render(
  //         <AddInput
  //             todos={[]}
  //             setTodos={mockedSetTodo}
  //         />
  //     );
  //     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  //     fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
  //     const buttonElement = screen.getByRole("button", { name: /Add/i});
  //     fireEvent.click(buttonElement)
  //     expect(inputElement.value).toBe("")
  // });

  //buttontests

  //     it("rendered button",()=>{
  //         const {getByTestId} = render(<Home/>);
  //         const button = getByTestId("Button1");
  //         expect (button).toBeTruthy();
  // });

  //inputtests
  it("Change text", async () => {
    await act(async () => {
      const { getByTestId } = render(<Home />);
      const input = getByTestId("searchtext");
      const header = getByTestId("displaytext");
      const inputword = "Hello";
      await fireEvent.change(input, { target: { value: inputword } });
      expect(header.innerHTML).toBe(inputword);
    });
  });

  afterEach(cleanup);
  test("button click", async () => {
    const { getByRole, getByText } = render(<Home />);
    expect(
      getByRole("button", { name: /click here to know my name/i })
    ).toBeTruthy();
    fireEvent.click(
      getByRole("button", { name: /click here to know my name/i })
    );
    await waitFor(() => {
      expect(getByText("Dharneesh here")).toBeInTheDocument();
    });

    //     await act( async()=>{

    //     const button = getByTestId("Button4");
    //     const currentname  = component.getByTestId("hitest")

    //
    //    expect(currentname.textContent).toBe("Dharneesh here");
    //    expect(getByText('Dharneesh')).toBeInTheDocument();
  });
});

//     const mockedSetTodo = jest.fn();

// it('should render input es', () => {
//     render(
//        <Home/>
//     );
//     const inputElement = screen.getByPlaceholderText(/Feedback/i);
//     expect(inputElement).toBeInTheDocument();
// });
