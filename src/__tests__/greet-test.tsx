import { render, screen } from "@testing-library/react";
import Greet from "../components/greet/Greet";

// a -> w -> o
// describe.only/skip

describe("Greet", () => {
    test("greet renders correctly", () => {
        render(<Greet />);
        const textElement = screen.getByText('Hello');
        expect(textElement).toBeInTheDocument();
    })
})


describe("nested", () => {
    test("greet renders with a name", () => {
        render(<Greet name="Shourov" />);
        const textElement = screen.getByText("Hello Shourov");
        expect(textElement).toBeInTheDocument();
    })
})
