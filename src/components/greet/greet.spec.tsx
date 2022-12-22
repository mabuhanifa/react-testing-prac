import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

// a -> w -> o
// describe.only/skip

// it == test
// fit == test.only
// xit == test.skip


describe("Greet", () => {
    fit("greet renders correctly", () => {
        render(<Greet />);
        const textElement = screen.getByText('Hello');
        expect(textElement).toBeInTheDocument();
    })
})


describe("nested", () => {
    xit("greet renders with a name", () => {
        render(<Greet name="Shourov" />);
        const textElement = screen.getByText("Hello Shourov");
        expect(textElement).toBeInTheDocument();
    })
})


