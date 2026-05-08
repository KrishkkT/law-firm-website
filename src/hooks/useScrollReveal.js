import { useEffect, useRef } from 'react';

export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    ...options
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0) blur(0)';
      }
    }, defaultOptions);

    if (ref.current) {
      ref.current.style.opacity = '0';
      ref.current.style.transform = 'translateY(24px) blur(10px)';
      ref.current.style.transition = 'all 0.8s ease-out';
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [defaultOptions]);

  return ref;
};

export const useStaggerChildren = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const children = entry.target.querySelectorAll('[data-stagger]');
        children.forEach((child, index) => {
          child.style.opacity = '0';
          child.style.transform = 'translateY(24px) blur(10px)';
          child.style.animation = `fadeUp 0.8s ease-out ${index * 80}ms forwards`;
        });
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
};
