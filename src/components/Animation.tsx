import { Box, Grid } from "@mui/material";
import {
  Children,
  cloneElement,
  FC,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";

const Animation: FC<{
  duration?: number;
  delay?: number;
  animationName: string;
  animationEasing?: string;
  beforeStyle: { [key: string]: any };
  doneStyle: { [key: string]: any };
  element: ReactElement;
  shouldAnimate: boolean;
}> = ({
  duration = 0,
  delay = 0,
  animationName,
  animationEasing = "ease-in-out",
  beforeStyle,
  doneStyle,
  shouldAnimate,
  element,
}) => {
  // Component variables
  const [done, setDone] = useState(false);

  // Component state

  // Component effects
  useEffect(() => {
    console.log({ shouldAnimate });
    if (shouldAnimate) {
      const timeout = duration + delay;
      console.log({ shouldAnimate, timeout });
      setTimeout(() => {
        setDone(true);
      }, timeout);
    }
  }, [shouldAnimate]);

  // Function binding

  console.log({ element, done });
  return cloneElement(element, {
    sx: {
      ...element.props.sx,
      animation: shouldAnimate
        ? `${animationName} ${duration}ms ${animationEasing} ${delay}ms`
        : undefined,
      ...(done ? doneStyle : beforeStyle),
    },
  });
};

export default Animation;
