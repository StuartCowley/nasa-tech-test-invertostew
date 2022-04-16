import { render, screen } from "@testing-library/react";

import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    setSearchResults: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <Search setSearchResults={validProps.setSearchResults} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the input element", () => {
    render(<Search setSearchResults={validProps.setSearchResults} />);

    const input = screen.getByPlaceholderText(/search/i);

    expect(input).toBeInTheDocument();
  });

  it("renders the button", () => {
    render(<Search setSearchResults={validProps.setSearchResults} />);

    const button = screen.getByText(/search/i);

    expect(button).toBeInTheDocument();
  });
});
