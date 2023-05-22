import { ActionIcon, ActionIconProps, StroyBook, useControls, useCreateStore } from '@lobehub/ui';
import * as LucideIcon from 'lucide-react';

export default () => {
  const store = useCreateStore();
  const control: ActionIconProps | any = useControls(
    {
      size: {
        value: 'large',
        options: ['large', 'normal', 'small'],
      },
      icon: {
        value: LucideIcon.Settings,
        options: LucideIcon,
      },
      active: false,
    },
    { store },
  );
  return (
    <StroyBook levaStore={store}>
      <ActionIcon {...control} />
    </StroyBook>
  );
};
