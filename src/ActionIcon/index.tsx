import { Icon } from '@/index';
import { DivProps } from '@/types';
import { LucideIcon } from 'lucide-react';
import React from 'react';
import { useStyles } from './style';

export type ActionIconSize =
  | 'large'
  | 'normal'
  | 'small'
  | {
      blockSize?: number;
      fontSize?: number;
      strokeWidth?: number;
      borderRadius?: number;
    };

export interface ActionIconProps extends DivProps {
  /**
   * @description Whether the icon is active or not
   * @default false
   */
  active?: boolean;
  /**
   * @description Size of the icon
   * @default 'normal'
   */
  size?: ActionIconSize;
  /**
   * @description The icon element to be rendered
   * @type LucideIcon
   */
  icon: LucideIcon;
}

const ActionIcon: React.FC<ActionIconProps> = ({
  className,
  active,
  icon,
  size = 'normal',
  style,
  ...props
}) => {
  const { styles, cx } = useStyles(active);
  let blockSize: number;
  let borderRadius: number;
  switch (size) {
    case 'large':
      blockSize = 44;
      borderRadius = 8;
      break;
    case 'normal':
      blockSize = 36;
      borderRadius = 5;
      break;
    case 'small':
      blockSize = 28;
      borderRadius = 5;
      break;
    default:
      blockSize = size?.blockSize || 36;
      borderRadius = size?.borderRadius || 5;
      break;
  }
  return (
    <div
      className={cx(styles.block, className)}
      style={{ width: blockSize, height: blockSize, borderRadius, ...style }}
      {...props}
    >
      <Icon size={size} icon={icon} />
    </div>
  );
};

export default React.memo(ActionIcon);
