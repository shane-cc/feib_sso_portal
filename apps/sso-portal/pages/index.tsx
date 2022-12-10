import { Dashboard } from '@sso-platform/common-page';
import { NextPage } from 'next';

export const Index: NextPage = () => {
  return <Dashboard isSSOPortal />;
};

export default Index;
