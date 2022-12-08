import type { ComponentMeta } from '@storybook/react';
import { Dashboard } from './dashboard';

const Story: ComponentMeta<typeof Dashboard> = {
  component: Dashboard,
  title: 'Dashboard',
};
export default Story;

export const General = () => <Dashboard />;
