import { useEffect, useRef } from 'react';

interface Props {
  onIntersect: () => void;
  enabled?: boolean;
  threshold?: number;
  rootMargin?: string;
}

const useInfiniteScroll = ({
  onIntersect,
  enabled = true,
  threshold = 1.0,
  rootMargin = '0px',
}: Props) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    const el = observerRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [enabled, onIntersect, threshold, rootMargin]);

  return observerRef;
};

export default useInfiniteScroll;
