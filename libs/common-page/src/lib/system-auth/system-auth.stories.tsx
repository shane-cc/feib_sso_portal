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
    pathname: '/systems/[systemCode]/auth',
    path: '/systems/[systemCode]/auth',
    asPath: '/systems/system-2/auth',
    query: {
      systemCode: 'system-2',
    },
  },
};

export const RoleManagement = () => <SystemAuth />;
RoleManagement.parameters = {
  nextRouter: {
    pathname: '/systems/[systemCode]/role',
    path: '/systems/[systemCode]/role',
    asPath: '/systems/system-2/role',
    query: {
      systemCode: 'system-2',
    },
  },
};

export const MemberManagement = () => <SystemAuth />;
MemberManagement.parameters = {
  nextRouter: {
    pathname: '/systems/[systemCode]/member',
    path: '/systems/[systemCode]/member',
    asPath: '/systems/system-2/member',
    query: {
      systemCode: 'system-2',
    },
  },
};
