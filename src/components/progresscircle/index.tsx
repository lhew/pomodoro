import React, { VFC } from "react";
import { Arc, Circle, Group, Layer, Stage } from "react-konva";

const ProgressCircle: VFC<{ progress?: number }> = ({ progress = 0 }) => {
  const CANVAS = 300;
  const RADIUS = CANVAS / 2;
  const MARKER_WIDTH = 25;
  const DEFAULT_ROTATION = -90;

  let computedProgress = progress;

  computedProgress = computedProgress < 0 ? 0 : computedProgress;
  computedProgress = computedProgress > 100 ? 100 : computedProgress;

  const progress2Deg = (360 * computedProgress) / 100;

  return (
    <div data-testid="canvas">
      <Stage
        width={CANVAS}
        height={CANVAS}
        style={{
          width: `${CANVAS}px`,
          height: `${CANVAS}px`,
        }}
      >
        <Layer>
          <Arc
            x={RADIUS}
            y={RADIUS}
            fill="#EEEEEE"
            angle={360}
            innerRadius={RADIUS - MARKER_WIDTH * 1.25}
            outerRadius={RADIUS - MARKER_WIDTH / 1.75}
          />
          <Arc
            angle={progress2Deg}
            rotation={DEFAULT_ROTATION}
            x={RADIUS}
            y={RADIUS}
            fill="#D8D8D8"
            innerRadius={RADIUS - MARKER_WIDTH * 1.25}
            outerRadius={RADIUS - MARKER_WIDTH / 1.75}
          />
          <Group
            width={CANVAS}
            height={CANVAS}
            x={RADIUS}
            y={RADIUS}
            offset={{ x: RADIUS, y: RADIUS }}
            rotation={DEFAULT_ROTATION + progress2Deg}
          >
            <Circle
              radius={MARKER_WIDTH}
              fill="blue"
              x={CANVAS - MARKER_WIDTH}
              y={RADIUS}
            />
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};

export default ProgressCircle;
