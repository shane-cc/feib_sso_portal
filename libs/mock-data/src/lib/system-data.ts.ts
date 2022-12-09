import { System } from '@sso-platform/types';

export const generateSystemData = (): System[] => {
  return [
    {
      systemId: 'system-1',
      systemName: 'AP0 Admin Panel',
      systemUrl: 'https://ap0-admin-panel.sso-platform.com',
      systemImage:
        'https://cdn2.iconfinder.com/data/icons/social-media-2189/48/30-Twitter-256.png',
      auth: {
        isAuthEditable: true,
        isViewable: true,
        isEditable: true,
        isDeletable: true,
        isAdminAssignable: true,
      },
    },
    {
      systemId: 'system-2',
      systemName: '會員管理系統',
      systemUrl: 'https://member-management.sso-platform.com',
      systemImage:
        'https://cdn2.iconfinder.com/data/icons/social-media-2189/48/22-Yahoo-256.png',
      auth: {
        isAuthEditable: true,
        isViewable: true,
        isEditable: false,
        isDeletable: false,
        isAdminAssignable: true,
      },
    },
    {
      systemId: 'system-3',
      systemName: '行政文件稽核系統',
      systemUrl: 'https://administration-audit.sso-platform.com',
      systemImage:
        'https://cdn2.iconfinder.com/data/icons/social-media-2189/48/29-Slack-256.png',
      auth: {
        isAuthEditable: true,
        isViewable: true,
        isEditable: true,
        isDeletable: true,
        isAdminAssignable: true,
      },
    },
    {
      systemId: 'system-4',
      systemName: '社群銀行活動管理',
      systemUrl: 'https://sm-bank-activities.sso-platform.com',
      systemImage:
        'https://cdn2.iconfinder.com/data/icons/social-media-2189/48/16-Reddit-256.png',
      auth: {
        isAuthEditable: false,
        isViewable: true,
        isEditable: true,
        isDeletable: false,
        isAdminAssignable: true,
      },
    },
    {
      systemId: 'system-5',
      systemName: '中山分行訂餐系統',
      systemUrl: 'https://ch02-meal-order.sso-platform.com',
      systemImage:
        'https://cdn2.iconfinder.com/data/icons/social-media-2189/48/19-Digg-256.png',
      auth: {
        isAuthEditable: true,
        isViewable: true,
        isEditable: true,
        isDeletable: true,
        isAdminAssignable: true,
      },
    },
    {
      systemId: 'system-6',
      systemName: '中山分行快遞郵件登記',
      systemUrl: 'https://ch02-mail-dilivery.sso-platform.com',
      systemImage:
        'https://cdn2.iconfinder.com/data/icons/social-media-2189/48/21-Gmail-256.png',
      auth: {
        isAuthEditable: true,
        isViewable: true,
        isEditable: true,
        isDeletable: true,
        isAdminAssignable: true,
      },
    },
  ];
};
