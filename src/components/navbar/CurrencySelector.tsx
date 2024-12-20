import { FC } from 'react';

export const CurrencySelector: FC = () => {
  return (
    <select className="text-sm bg-transparent">
      <option value="KES">KES</option>
      <option value="USD">USD</option>
    </select>
  );
}; 