import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Chip,
  CircularProgress,
  Stack,
  Typography,
} from '@sso-platform/common-ui';
import {
  GeneralMessage,
  GetAuthRolesResponse,
  QueryCacheKey,
  getAuthRolesList,
} from '@sso-platform/shared';
import { AuthRole } from '@sso-platform/types';
import { Dispatch, SetStateAction, useState } from 'react';
import { useQuery } from 'react-query';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

interface AuthRoleFilterQueryProps {
  checkedList: AuthRole[];
  setCheckedList: Dispatch<SetStateAction<AuthRole[]>>;
  handleSearch: () => void;
  systemCode: string;
}

export const AuthRoleFilterQuery: React.FC<AuthRoleFilterQueryProps> = ({
  checkedList,
  setCheckedList,
  handleSearch,
  systemCode,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const { data: authRolesData, isFetching: isAuthRolesLoading } = useQuery<
    GetAuthRolesResponse,
    Error
  >([QueryCacheKey.AUTH_ROLES_LIST, systemCode], () =>
    getAuthRolesList({ systemCode })
  );
  const authRolesList = authRolesData?.data.authRoles ?? [];

  const handleToggleExpanded = (
    _e: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded);
  };

  const handleClick = (authRole: AuthRole) => {
    setCheckedList((prev) => {
      const target = prev.find(
        (item) => item.authRoleCode === authRole.authRoleCode
      );
      if (typeof target !== 'undefined') {
        return prev.filter(
          (item) => item.authRoleCode !== authRole.authRoleCode
        );
      }
      return [...prev, authRole];
    });
  };

  const handleClear = () => {
    setCheckedList([]);
  };

  const handleSelectAll = () => {
    setCheckedList([...authRolesList]);
  };

  return (
    <Accordion
      disableGutters
      disableElevation
      onChange={handleToggleExpanded}
      sx={{
        borderRadius: '.5rem',
        '&:last-of-type': {
          borderRadius: '.5rem',
        },
      }}
    >
      <AccordionSummary
        sx={{
          display: 'flex',
          '.MuiAccordionSummary-content': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        }}
      >
        <Typography variant="h6" fontWeight={500} margin={0}>
          群組篩選
        </Typography>
        <Button
          variant="text"
          color="info"
          endIcon={
            expanded ? (
              <KeyboardArrowUpRoundedIcon color="info" />
            ) : (
              <KeyboardArrowDownRoundedIcon color="info" />
            )
          }
        >
          {expanded ? '收闔條件篩選' : '展開條件篩選'}
        </Button>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          display: 'flex',
          gap: '1rem',
          flexDirection: 'column',
        }}
      >
        <Stack
          direction="row"
          gap=".5rem"
          width="100%"
          sx={{
            flexWrap: 'wrap',
          }}
        >
          {isAuthRolesLoading && <CircularProgress />}
          {!isAuthRolesLoading && authRolesList.length === 0 && (
            <Typography variant="body2">
              {GeneralMessage.EMPTY_ROLE_SELECTION_LIST}
            </Typography>
          )}
          {authRolesList.map((authRole, idx) => (
            <Chip
              key={`${authRole.authRoleCode}-${idx}`}
              id={authRole.authRoleCode}
              handleClick={() => handleClick(authRole)}
              defaultCheckedStatus={
                typeof checkedList.find(
                  (item) => item.authRoleCode === authRole.authRoleCode
                ) !== 'undefined'
              }
              label={`${authRole.authRoleCode} / ${authRole.authRoleName}`}
            />
          ))}
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" gap=".5rem">
            <Button
              variant="outlined"
              color="inherit"
              size="small"
              onClick={handleSelectAll}
            >
              全選
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="small"
              onClick={handleClear}
            >
              全部清除
            </Button>
          </Stack>
          <Button variant="contained" color="info" onClick={handleSearch}>
            套用篩選
          </Button>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};
