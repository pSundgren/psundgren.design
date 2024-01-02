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
      height: 32,
      width: 32,
      borderColor: "#71717A",
      borderWidth: "1px",
      backgroundColor: "rgba(124, 140, 142, 0)",
      x: mouseXPosition - 12,
      y: mouseYPosition - 10,
      transition: {
        type: "spring",
        mass: 0.4,
      },
    },
    hover: {
      opacity: dotOpacity,
      height: 46,
      width: 46,
      borderColor: "#71717A",
      borderWidth: "1px",
      backgroundColor: "rgba(124, 140, 142, 0)",
      x: mouseXPosition - 18,
      y: mouseYPosition - 14,
      transition: {
        type: "spring",
        mass: 0.4,
      },
    },
  };
};

export const spring = {
  type: "spring",
  stiffness: 0,
  damping: 28,
};
