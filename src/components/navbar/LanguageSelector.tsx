import { FC } from 'react';

export const LanguageSelector: FC = () => {
  return (
    <select className="text-sm bg-transparent">
      <option value="en">English</option>
      <option value="sw">Swahili</option>
    </select>
  );
}; 