import { useState } from 'react';
import type { ReactElement } from 'react';

import type { IButtonProps } from './types';

const Button = (_props?: IButtonProps): ReactElement => {
  const [isPrimary, setIsPrimary] = useState(true);

  const backgroundColor = isPrimary ? '#fef08a' : '#38bdf8';
  const borderColor = isPrimary ? '#eab308' : '#0284c7';

  return (
    <button
      type="button"
      onClick={() => setIsPrimary((previous) => !previous)}
      style={{
        padding: '16px 24px',
        fontSize: '1rem',
        fontWeight: 600,
        color: '#0f172a',
        backgroundColor,
        border: `2px solid ${borderColor}`,
        borderRadius: 8,
        cursor: 'pointer',
      }}
    >
      Click to change color
    </button>
  );
};

export default Button;
