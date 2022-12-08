import type { ComponentMeta } from '@storybook/react';
import { PageTitle } from './page-title';

const Story: ComponentMeta<typeof PageTitle> = {
  component: PageTitle,
  title: 'Page Title',
  parameters: {
    layout: 'padded',
  },
};
export default Story;

export const General = () => (
  <PageTitle
    pageTitle="近一個月活動紀錄"
    showBreadcrumb
    breadcrumbs={[
      {
        label: 'Dashboard',
        link: '/',
      },
      {
        label: '活動紀錄',
        link: '/actions-history',
      },
    ]}
  />
);
