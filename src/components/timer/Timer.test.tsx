import { render, screen } from "@testing-library/react";
import Timer from ".";
describe("Timer", () => {
  it("Should test timer", async () => {
    render(<Timer progress={10} />);
    expect(await screen.getByTestId("canvas")).toBeInTheDocument();
  });
});
