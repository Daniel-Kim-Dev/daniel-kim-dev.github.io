import { useRef, useCallback } from 'react';

function useAnimateElement() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }

  const handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.5) {
        entry.target.classList.add('Animated');
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = useRef(new IntersectionObserver(handleIntersect, options));

  const observeElement = useCallback(
    (ref) => {
      observer.current.observe(ref);
    }, []
  );

  return observeElement;
}

export default useAnimateElement;