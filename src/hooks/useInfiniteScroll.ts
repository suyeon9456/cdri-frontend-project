import { useEffect, useRef, useState } from 'react';

interface Props {
  onIntersect: () => void;
  enabled?: boolean;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  scrollTarget?: HTMLElement | null;
}

const useInfiniteScroll = ({
  onIntersect,
  enabled = true,
  threshold = 1.0,
  rootMargin = '0px',
  delay = 1000,
  scrollTarget = null,
}: Props) => {
  const observerRef = useRef<HTMLDivElement | null>(null);
  const triggeredRef = useRef(false);
  const [canScroll, setCanScroll] = useState(true);

  useEffect(() => {
    const target = scrollTarget ?? document.documentElement;
    const scrollable = target.scrollHeight > target.clientHeight;
    setCanScroll(scrollable);
  }, [scrollTarget]);

  useEffect(() => {
    if (!enabled || !canScroll) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggeredRef.current) {
          triggeredRef.current = true;
          onIntersect();
          setTimeout(() => {
            triggeredRef.current = false;
          }, delay);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    const el = observerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [enabled, canScroll, onIntersect, threshold, rootMargin, delay]);

  return observerRef;
};

export default useInfiniteScroll;
