import { Layout } from '@sso-platform/common-layout';
import { Typography } from '@sso-platform/common-ui';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  return (
    <Layout>
      <Typography variant="h4">Dashboard</Typography>
    </Layout>
  );
}

export default Dashboard;
