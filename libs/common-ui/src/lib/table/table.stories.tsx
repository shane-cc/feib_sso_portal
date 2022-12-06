import type { ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';
import { Table } from './table';
import { TableContainer } from './table-container';
import { TableRow } from './table-row';
import { TableCell } from './table-cell';
import { TableHead } from './table-head';
import { TableBody } from './table-body';
import Paper from '../paper/paper';
import { Toolbar } from '../toolbar';
import Typography from '../typography/typography';
import { TextField } from '../text-field';
import Stack from '../stack/stack';
import SearchIcon from '@mui/icons-material/Search';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '../button';
import EditIcon from '@mui/icons-material/Edit';

const Story: ComponentMeta<typeof Table> = {
  component: Table,
  title: 'Table',
};
export default Story;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const testData = new Array(10).fill('');

export const General = () => (
  <StyledContainer>
    <Paper>
      <TableContainer>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            width="100%"
            alignItems="center"
          >
            <Typography variant="h6">權限管理</Typography>
            <Stack direction="row" gap="1rem">
              <TextField
                label="搜尋"
                name="authQuery"
                size="small"
                sx={{
                  width: '380px',
                }}
                placeholder="搜尋權限代碼／權限名稱（英文字母不分大小寫）"
                startIcon={<SearchIcon color="info" />}
              />
              <Button variant="contained" color="secondary" size="small">
                匯入權限
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>權限代碼</TableCell>
              <TableCell>權限描述</TableCell>
              <TableCell>功能分類</TableCell>
              <TableCell>是否啟用</TableCell>
              <TableCell align="right" colSpan={2}>
                操作
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testData.map((_, idx) => (
              <TableRow>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>create_new_member</TableCell>
                <TableCell>建立新的會員</TableCell>
                <TableCell>系統</TableCell>
                <TableCell>Y</TableCell>
                <TableCell align="right" colSpan={2}>
                  <Stack direction="row" gap=".5rem" justifyContent="flex-end">
                    <Button
                      variant="soft"
                      color="inherit"
                      size="small"
                      startIcon={<EditIcon />}
                    >
                      編輯
                    </Button>
                    <Button
                      variant="soft"
                      color="secondary"
                      size="small"
                      startIcon={<DeleteForeverIcon />}
                    >
                      刪除
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  </StyledContainer>
);

export const Dense = () => (
  <StyledContainer>
    <Paper>
      <TableContainer>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            width="100%"
            alignItems="center"
          >
            <Typography variant="h6">可設定權限</Typography>
            <TextField
              label="搜尋"
              name="authQuery"
              size="small"
              sx={{
                maxWidth: '400px',
              }}
              placeholder="搜尋權限代碼／權限名稱（英文字母不分大小寫）"
              startIcon={<SearchIcon color="info" />}
            />
          </Stack>
        </Toolbar>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Cell 1</TableCell>
              <TableCell>Cell 2</TableCell>
              <TableCell>Cell 3</TableCell>
              <TableCell>Cell 4</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Cell 1 Data 1</TableCell>
              <TableCell>Cell 2 Data 1</TableCell>
              <TableCell>Cell 3 Data 1</TableCell>
              <TableCell>Cell 4 Data 1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cell 1 Data 2</TableCell>
              <TableCell>Cell 2 Data 2</TableCell>
              <TableCell>Cell 3 Data 2</TableCell>
              <TableCell>Cell 4 Data 2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cell 1 Data 3</TableCell>
              <TableCell>Cell 2 Data 3</TableCell>
              <TableCell>Cell 3 Data 3</TableCell>
              <TableCell>Cell 4 Data 3</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  </StyledContainer>
);
