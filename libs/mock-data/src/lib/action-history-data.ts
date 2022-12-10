import { IndividualActionHistory } from '@sso-platform/types';
import { BaseData } from '..';

export type ActionHistoryData = IndividualActionHistory & BaseData;
export const generateActionHistoryData = (): ActionHistoryData[] => {
  return [
    {
      id: '1',
      platform: 'SSO Portal',
      action: 'Login',
      date: '2022.11.05 19:32:49',
      type: 'secondary',
    },
    {
      id: '2',
      platform: 'SSO Portal',
      action: 'Logout',
      date: '2022.11.05 09:36:56',
      type: 'primary',
    },
    {
      id: '3',
      platform: 'AP0 Admin Panel',
      action: 'Logout',
      date: '2022.11.05 09:04:13',
      type: 'primary',
    },
    {
      id: '4',
      platform: 'AP0 Admin Panel',
      action: 'Login',
      date: '2022.11.04 19:32:49',
      type: 'secondary',
    },
    {
      id: '5',
      platform: 'SSO Portal',
      action: 'Login',
      date: '2022.11.04 09:03:12',
      type: 'secondary',
    },
    {
      id: '6',
      platform: 'SSO Portal',
      action: 'Login',
      date: '2022.11.05 19:32:49',
      type: 'secondary',
    },
    {
      id: '7',
      platform: 'SSO Portal',
      action: 'Logout',
      date: '2022.11.05 09:36:56',
      type: 'primary',
    },
    {
      id: '8',
      platform: 'AP0 Admin Panel',
      action: 'Logout',
      date: '2022.11.05 09:04:13',
      type: 'primary',
    },
    {
      id: '9',
      platform: 'AP0 Admin Panel',
      action: 'Login',
      date: '2022.11.04 19:32:49',
      type: 'secondary',
    },
    {
      id: '10',
      platform: 'SSO Portal',
      action: 'Login',
      date: '2022.11.04 09:03:12',
      type: 'secondary',
    },
    {
      id: '11',
      platform: 'SSO Portal',
      action: 'Login',
      date: '2022.11.05 19:32:49',
      type: 'secondary',
    },
    {
      id: '12',
      platform: 'SSO Portal',
      action: 'Logout',
      date: '2022.11.05 09:36:56',
      type: 'primary',
    },
    {
      id: '13',
      platform: 'AP0 Admin Panel',
      action: 'Logout',
      date: '2022.11.05 09:04:13',
      type: 'primary',
    },
    {
      id: '14',
      platform: 'AP0 Admin Panel',
      action: 'Login',
      date: '2022.11.04 19:32:49',
      type: 'secondary',
    },
    {
      id: '15',
      platform: 'SSO Portal',
      action: 'Login',
      date: '2022.11.04 09:03:12',
      type: 'secondary',
    },
  ];
};
