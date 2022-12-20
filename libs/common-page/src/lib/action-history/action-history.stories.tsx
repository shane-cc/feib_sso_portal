import type { ComponentMeta } from '@storybook/react';
import { ActionHistory } from './action-history';

const Story: ComponentMeta<typeof ActionHistory> = {
  component: ActionHistory,
  title: 'Action History',
};
export default Story;

export const General = () => <ActionHistory />;
