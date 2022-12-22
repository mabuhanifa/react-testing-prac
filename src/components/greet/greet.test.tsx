import { render, screen } from "@testing-library/react";
import Greet from "./Greet";


// a -> w -> o

test.skip("greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
})

test.only("greet renders with a name", () => {
    render(<Greet name="Shourov" />);
    const textElement = screen.getByText("Hello Shourov");
    expect(textElement).toBeInTheDocument();
})