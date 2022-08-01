import { Icons } from "../generated/icons/types";
import { TimerState } from "../provider/repository/types";

export const statusIcon = (timerState: TimerState) => {
    switch (timerState) {
      case "stopped":
        return Icons.PLAY;
      case "running":
        return Icons.PAUSE;
      case "paused":
        return Icons.PLAY;
      default:
        return Icons.PLAY;
    }
  };