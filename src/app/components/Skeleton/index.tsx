import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
}

const SkeletonWrapper = styled.div<SkeletonProps>`
  display: inline-block;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '16px'};
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: ${({ borderRadius }) => borderRadius || '4px'};
`;

const Skeleton: React.FC<SkeletonProps> = ({ width, height, borderRadius }) => {
  return (
    <SkeletonWrapper
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  );
};

export default Skeleton;
