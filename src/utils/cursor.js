import useMouse from "@react-hook/mouse-position";

export const useVariants = (ref) => {
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;
  let dotOpacity = 0;

  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX;
    dotOpacity = 1;
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY;
    dotOpacity = 1;
  }

  return {
    default: {
      opacity: dotOpacity,
      height: 12,
      width: 12,
      backgroundColor: "#ffffff",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.2,
      },
    },
  };
};

export const spring = {
  type: "spring",
  stiffness: 0,
  damping: 28,
};
