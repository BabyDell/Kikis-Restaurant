import { useState, useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

export function useAnimations() {
  const [isLoaded, setIsLoaded] = useState(false);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const dish1Ref = useRef<HTMLDivElement>(null);
  const dish2Ref = useRef<HTMLDivElement>(null);

  const welcomeInView = useInView(welcomeRef, { once: true, amount: 0.5 });
  const dish1InView = useInView(dish1Ref, { once: true, amount: 0.5 });
  const dish2InView = useInView(dish2Ref, { once: true, amount: 0.5 });

  const welcomeControls = useAnimation();
  const dish1Controls = useAnimation();
  const dish2Controls = useAnimation();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (welcomeInView) {
      welcomeControls.start({ opacity: 1, y: 0 });
    }
  }, [welcomeInView, welcomeControls]);

  useEffect(() => {
    if (dish1InView) {
      dish1Controls.start({ opacity: 1, x: 0 });
    }
  }, [dish1InView, dish1Controls]);

  useEffect(() => {
    if (dish2InView) {
      dish2Controls.start({ opacity: 1, x: 0 });
    }
  }, [dish2InView, dish2Controls]);

  return {
    isLoaded,
    welcomeRef,
    dish1Ref,
    dish2Ref,
    welcomeControls,
    dish1Controls,
    dish2Controls,
  };
}

