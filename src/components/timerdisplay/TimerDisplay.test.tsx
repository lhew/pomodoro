import { render, screen } from "@testing-library/react";
import { Default as TimerDisplay } from "./TimerDisplay.stories";
describe("TimerDisplay", () => {
  it("Should display time properly in the format hh:mm", async () => {
    render(<TimerDisplay time={Date.now()} />);
    expect(await screen.getByTestId("timer-display").innerHTML).toMatch(
      /\d{2}:\d{2}/
    );
  });

  it("Should display '--:--' due to wrongful value for 'time' prop", async () => {
    render(<TimerDisplay time={Infinity} />);
    expect(await screen.getByTestId("timer-display").innerHTML).toBe("--:--");
  });
});
