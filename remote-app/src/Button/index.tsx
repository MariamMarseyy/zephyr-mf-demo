import type { ReactElement } from 'react';

import type { IButtonProps } from './types';

const Button = (_props?: IButtonProps): ReactElement => (
  <button
    style={{
      padding: '16px 24px',
      fontSize: '1rem',
      fontWeight: 600,
      color: '#0f172a',
      backgroundColor: '#fef08a',
      border: '2px solid #eab308',
      borderRadius: 8,
      cursor: 'pointer',
    }}
  >
    Hello from Remote App
  </button>
);

export default Button;
