import { forwardRef } from 'react';

import FluentEmoji from '@/FluentEmoji';
import { DivProps } from '@/types';

import { ICON_SIZE, useStyles } from './style';

export interface TokenTagProps extends DivProps {
  /**
   * @default 'left'
   */
  displayMode?: 'left' | 'used';
  /**
   * @description Maximum value for the token
   */
  maxValue: number;
  text?: {
    overload?: string;
    tokens?: string;
  };
  /**
   * @description Current value of the token
   */
  value: number;
}

const TokenTag = forwardRef<HTMLDivElement, TokenTagProps>(
  ({ className, displayMode = 'left', maxValue, value, text, ...props }, ref) => {
    const valueLeft = maxValue - value;
    const percent = valueLeft / maxValue;
    let type: 'normal' | 'low' | 'overload';
    let emoji;

    if (percent > 0.3) {
      type = 'normal';
      emoji = '😀';
    } else if (percent > 0) {
      type = 'low';
      emoji = '😅';
    } else {
      type = 'overload';
      emoji = '🤯';
    }

    const { styles, cx } = useStyles(type);

    return (
      <div className={cx(styles.container, className)} ref={ref} {...props}>
        <FluentEmoji emoji={emoji} size={ICON_SIZE} />
        {valueLeft > 0
          ? text?.tokens || `Tokens ${displayMode === 'left' ? valueLeft : value}`
          : text?.overload || 'Overload'}
      </div>
    );
  },
);

export default TokenTag;
