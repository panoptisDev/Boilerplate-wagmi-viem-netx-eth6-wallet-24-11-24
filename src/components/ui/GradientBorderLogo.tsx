import React, { useState, useCallback, useEffect, CSSProperties } from 'react';

const GRADIENT_BORDER_WIDTH = 4;

const logoContainerStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  borderRadius: '50%',
  overflow: 'hidden',
};

const gradientStyle: CSSProperties = {
  position: 'absolute',
  background:
    'conic-gradient(from 180deg, #45E1E5 0deg, #0052FF 86.4deg, #B82EA4 165.6deg, #FF9533 255.6deg, #7FD057 320.4deg, #45E1E5 360deg)',
};

const innerContainerStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  backgroundColor: 'black',
  borderRadius: '50%',
};

type GradientBorderLogoProps = {
  src: string;
  alt: string;
  size?: number;
};

export const GradientBorderLogo: React.FC<GradientBorderLogoProps> = ({
  src,
  alt,
  size = 85,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
    }
  }, [isAnimating]);

  useEffect(() => {
    if (isAnimating) {
      const animationTimeout = setTimeout(() => {
        setIsAnimating(false);
      }, 2000);
      return () => clearTimeout(animationTimeout);
    }
  }, [isAnimating]);

  const animatedGradientStyle: CSSProperties = {
    ...gradientStyle,
    transform: `rotate(${isAnimating ? '720deg' : '0deg'})`,
    transition: isAnimating
      ? 'transform 2s cubic-bezier(0.27, 0, 0.24, 0.99)'
      : 'none',
    top: -GRADIENT_BORDER_WIDTH,
    left: -GRADIENT_BORDER_WIDTH,
    right: -GRADIENT_BORDER_WIDTH,
    bottom: -GRADIENT_BORDER_WIDTH,
  };

  return (
    <div
      style={{
        ...logoContainerStyle,
        width: `${size}px`,
        height: `${size}px`,
      }}
      onMouseEnter={handleMouseEnter}
    >
      <div style={animatedGradientStyle} />
      <div
        style={{
          ...innerContainerStyle,
          top: GRADIENT_BORDER_WIDTH,
          left: GRADIENT_BORDER_WIDTH,
          right: GRADIENT_BORDER_WIDTH,
          bottom: GRADIENT_BORDER_WIDTH,
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width: `${size - 2 * GRADIENT_BORDER_WIDTH}px`,
            height: `${size - 2 * GRADIENT_BORDER_WIDTH}px`,
          }}
          className="filter-invert"
        />
      </div>
    </div>
  );
};