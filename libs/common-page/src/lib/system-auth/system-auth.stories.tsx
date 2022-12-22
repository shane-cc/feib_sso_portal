import type { ComponentMeta } from '@storybook/react';
import { SystemAuth } from './system-auth';

const Story: ComponentMeta<typeof SystemAuth> = {
  component: SystemAuth,
  title: 'System Auth Management',
};
export default Story;

export const AuthManagement = () => <SystemAuth />;

AuthManagement.parameters = {
  nextRouter: {
    path: '/systems/[systemCode]/auth',
    asPath: '/systems/system-2/auth',
    query: {
      systemCode: 'system-2',
    },
  },
};
