export function useMotionVisibleOnce() {
  const target = ref(null);
  const motion = useMotion(target, {
    initial: {
      opacity: 0,
      y: 50,
    },
    visibleOnce: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 600,
        delay: 100,
      },
    },
  });

  return {
    target,
    motion,
  };
}
