import { ReactNode } from 'react';

interface TimelineProps {
  children: ReactNode;
}

export const Timeline = ({ children }: TimelineProps) => {
  return (
    <ol className="relative mb-10 border-gray-200 border-s dark:border-gray-700">
      {children}
    </ol>
  );
};