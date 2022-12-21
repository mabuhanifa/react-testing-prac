import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
})

test("greet renders with a name", () => {
    render(<Greet name="Shourov" />);
    const textElement = screen.getByText("Hello Shourov");
    expect(textElement).toBeInTheDocument();
})