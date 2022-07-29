import { render, screen } from "@testing-library/react";
import { Default as ProgressCircle } from "./ProgressCircle.stories";

describe("ProgressCircle", () => {
  it("Should render ProgressCircle", async () => {
    render(<ProgressCircle progress={10} />);
    expect(await screen.getByTestId("canvas")).toBeInTheDocument();
  });
});
