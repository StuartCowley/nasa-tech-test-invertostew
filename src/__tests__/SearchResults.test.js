import { render, screen } from "@testing-library/react";

import SearchResults from "../components/SearchResults";

describe("Search", () => {
  const validProps = ["#", "#", "#"];

  it("renders correctly", () => {
    const { asFragment } = render(<SearchResults searchResults={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the default results message", () => {
    const emptyProps = [];

    render(<SearchResults searchResults={emptyProps} />);

    const input = screen.getByText(/no search results found/i);

    expect(input).toBeInTheDocument();
  });

  it("renders the correct number of images", () => {
    const { getAllByTestId } = render(
      <SearchResults searchResults={validProps} />
    );

    expect(getAllByTestId("image")).toHaveLength(3);
  });
});
