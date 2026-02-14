/// animation-frame-provider.tsx
/// Provides a single shared RAF loop for all animated components to subscribe to.
/// This prevents multiple RAF loops from running simultaneously and improves performance.
///
/// Author: Gavin Kerr
/// Date: Fri Feb 14 2026
/// Copyright 2023-2026 Gavin Kerr, All Rights Reserved.

import { createContext, useContext, useEffect, useRef, useState } from "react";

interface AnimationFrameContextValue {
  subscribe: (callback: (deltaTime: number) => void) => () => void;
  timestamp: number;
}

const AnimationFrameContext = createContext<AnimationFrameContextValue | null>(
  null,
);

export const AnimationFrameProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const subscribers = useRef<Set<(deltaTime: number) => void>>(new Set());
  const lastTime = useRef<number>(0);
  const [timestamp, setTimestamp] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const tick = (time: number) => {
      const deltaTime = lastTime.current ? time - lastTime.current : 0;
      lastTime.current = time;

      // Notify all subscribers
      subscribers.current.forEach((callback) => {
        try {
          callback(deltaTime);
        } catch (error) {
          console.error("Error in animation frame callback:", error);
        }
      });

      setTimestamp(time);
      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const subscribe = (callback: (deltaTime: number) => void) => {
    subscribers.current.add(callback);
    return () => {
      subscribers.current.delete(callback);
    };
  };

  return (
    <AnimationFrameContext.Provider value={{ subscribe, timestamp }}>
      {children}
    </AnimationFrameContext.Provider>
  );
};

export const useAnimationFrame = (
  callback: (deltaTime: number) => void,
  deps: React.DependencyList = [],
) => {
  const context = useContext(AnimationFrameContext);

  if (!context) {
    throw new Error(
      "useAnimationFrame must be used within AnimationFrameProvider",
    );
  }

  useEffect(() => {
    const unsubscribe = context.subscribe(callback);
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context, ...deps]);
};
