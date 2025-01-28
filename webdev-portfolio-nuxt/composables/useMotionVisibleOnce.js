export function useMotionVisibleOnce() {
  const target = ref(null);
  const motion = useMotion(target, {
    initial: {
      opacity: 0,
      x: -100,
    },
    visibleOnce: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 600,
      },
    },
  });

  return {
    target,
    motion,
  };
}
