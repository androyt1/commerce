import { screen, render } from "@testing-library/react";
import Navbar from "../_components/Navbar";
import { describe } from "node:test";

describe("Navbar", () => {
    it("renders the navbar correctly", () => {
        render(<Navbar />);
        expect(screen.getByText(/home/i)).toBeInTheDocument();
        expect(screen.getByText(/shop/i)).toBeInTheDocument();
        expect(screen.getByText(/new arrivals/i)).toBeInTheDocument();
        expect(screen.getByText(/best sellers/i)).toBeInTheDocument();
        expect(screen.getByText(/offers/i)).toBeInTheDocument();
        expect(screen.getByText(/about us/i)).toBeInTheDocument();
        expect(screen.getByText(/blog/i)).toBeInTheDocument();
        expect(screen.getByText(/contact us/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
    });
});
