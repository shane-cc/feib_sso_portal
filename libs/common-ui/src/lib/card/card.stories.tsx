import type { ComponentMeta } from '@storybook/react';
import { Card } from './card';
import { CardImage } from './card-image';
import { CardContent } from './card-content';
import styled from '@emotion/styled';
import Divider from '../divider/divider';
import { CardTitle } from './card-title';
import { CardAdvancedMenu } from './card-advanced-menu';
import { MenuItem } from '../menu';
import EditIcon from '@mui/icons-material/Edit';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PolicyIcon from '@mui/icons-material/Policy';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { COLORS } from '@sso-platform/theme';
import Typography from '../typography/typography';
import Stack from '../stack/stack';
import { Button } from '../button';

const Story: ComponentMeta<typeof Card> = {
  component: Card,
  title: 'Card',
};
export default Story;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;
`;

export const DashboardCard = () => (
  <StyledContainer>
    <Card>
      <CardImage
        image=""
        sx={{
          width: '8rem',
          height: '8rem',
        }}
        isClickable
      />
      <Divider />
      <CardTitle title="社群銀行活動管理" />
    </Card>
    <Card>
      <CardImage
        image="/card-demo-icon.png"
        sx={{
          width: '8rem',
          height: '8rem',
        }}
        isClickable
      />
      <Divider />
      <CardTitle title="AP0 Admin" />
    </Card>
    <Card>
      <CardAdvancedMenu>
        <MenuItem icon={<EditIcon />} text="編輯系統" />
        <MenuItem icon={<ManageAccountsIcon />} text="管理員管理" />
        <MenuItem icon={<PolicyIcon />} divider text="查看權限" />
        <MenuItem
          icon={<DeleteForeverIcon htmlColor={COLORS.secondary.dark} />}
          text="刪除系統"
          color="secondary.dark"
        />
      </CardAdvancedMenu>
      <CardImage
        image=""
        sx={{
          width: '8rem',
          height: '8rem',
        }}
        isClickable
      />
      <Divider />
      <CardTitle title="社群銀行會員管理" />
    </Card>
    <Card>
      <CardAdvancedMenu>
        <MenuItem icon={<EditIcon />} text="編輯系統" />
        <MenuItem icon={<ManageAccountsIcon />} text="管理員管理" />
        <MenuItem icon={<PolicyIcon />} divider text="查看權限" />
        <MenuItem
          icon={<DeleteForeverIcon htmlColor={COLORS.secondary.dark} />}
          text="刪除系統"
          color="secondary.dark"
        />
      </CardAdvancedMenu>
      <CardImage
        image="/card-demo-icon.png"
        sx={{
          width: '8rem',
          height: '8rem',
        }}
        isClickable
      />
      <Divider />
      <CardTitle title="中部分行資訊系統" />
    </Card>
  </StyledContainer>
);

export const SystemInfoCard = () => (
  <StyledContainer>
    <Card>
      <CardImage
        image=""
        sx={{
          width: '8rem',
          height: '8rem',
        }}
      />
      <Divider />
      <CardContent>
        <Stack gap="12px">
          <Stack>
            <Typography variant="caption" color="text.secondary">
              系統名稱
            </Typography>
            <Typography variant="subtitle2" color="text.primary">
              會員管理系統
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="caption" color="text.secondary">
              系統代碼
            </Typography>
            <Typography variant="subtitle2" color="text.primary">
              BM0
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="caption" color="text.secondary">
              URL
            </Typography>
            <Typography variant="subtitle2" color="text.primary">
              https://www.google.com
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
    <Card>
      <CardImage
        image=""
        sx={{
          width: '8rem',
          height: '8rem',
        }}
        isEditable
      />
      <Divider />
      <CardContent>
        <Stack gap="12px">
          <Stack>
            <Typography variant="caption" color="text.secondary">
              系統名稱
            </Typography>
            <Typography variant="subtitle2" color="text.primary">
              會員管理系統
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="caption" color="text.secondary">
              系統代碼
            </Typography>
            <Typography variant="subtitle2" color="text.primary">
              BM0
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="caption" color="text.secondary">
              URL
            </Typography>
            <Typography variant="subtitle2" color="text.primary">
              https://www.google.com
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: '12.5rem' }}>
      <CardImage
        image=""
        sx={{
          width: '8rem',
          height: '8rem',
        }}
      />
      <Divider />
      <CardContent>
        <Stack gap="12px">
          <Stack>
            <Typography variant="caption" color="text.secondary">
              系統名稱
            </Typography>
            <Typography variant="subtitle2" color="text.primary">
              會員管理系統
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="caption" color="text.secondary">
              系統代碼
            </Typography>
            <Typography variant="subtitle2" color="text.primary">
              BM0
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="caption" color="text.secondary">
              URL
            </Typography>
            <Typography variant="subtitle2" color="text.primary">
              https://jgdev.jgallop.com/sso-portal/admin
            </Typography>
          </Stack>
          <Button variant="contained" color="info">
            編輯系統
          </Button>
        </Stack>
      </CardContent>
    </Card>
  </StyledContainer>
);
