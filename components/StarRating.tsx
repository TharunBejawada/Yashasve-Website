import React from 'react';
import { Star } from '@phosphor-icons/react';

interface StarRatingProps {
  score: number;
  maxStars?: number;
  size?: number;
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({ score, maxStars = 5, size = 14, className }) => (
  <div role="img" aria-label={`${score} out of ${maxStars} stars`} className={className}>
    <div className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: maxStars }, (_, i) => (
        <Star
          key={i}
          size={size}
          weight={i < Math.round(score) ? 'fill' : 'regular'}
          className={i < Math.round(score) ? 'text-yellow-400' : 'text-stone-300'}
        />
      ))}
    </div>
  </div>
);

StarRating.displayName = 'StarRating';
