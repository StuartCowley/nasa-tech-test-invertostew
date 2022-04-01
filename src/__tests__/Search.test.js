import { render, screen } from "@testing-library/react";

import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    setSearchResults: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(<Search setSearchText={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the input element", () => {
    render(<Search setSearchText={validProps} />);

    const input = screen.getByPlaceholderText(/search/i);

    expect(input).toBeInTheDocument();
  });

  it("renders the button", () => {
    render(<Search setSearchText={validProps} />);

    const button = screen.getByText(/search/i);

    expect(button).toBeInTheDocument();
  });
});
