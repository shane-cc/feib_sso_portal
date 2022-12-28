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
import { Dispatch, SetStateAction, SyntheticEvent, useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { AuthFunctionDetail } from '@sso-platform/types';
import { useQuery } from 'react-query';
import {
  GetAuthFunctionsResponse,
  QueryCacheKey,
  getAuthFunctionsList,
} from '@sso-platform/shared';

interface FilterQueryProps {
  checkedList: AuthFunctionDetail[];
  setCheckedList: Dispatch<SetStateAction<AuthFunctionDetail[]>>;
  handleSearch: () => void;
  systemCode: string;
}

export const FilterQuery: React.FC<FilterQueryProps> = ({
  checkedList,
  setCheckedList,
  handleSearch,
  systemCode,
}) => {
  const [expended, setExpended] = useState<boolean>(false);
  const { data: authFunctionsData, isFetching: isAuthFunctionsLoading } =
    useQuery<GetAuthFunctionsResponse, Error>(
      [QueryCacheKey.AUTH_FUNCTIONS_LIST, systemCode],
      () => getAuthFunctionsList({ systemCode })
    );
  const authFunctionsList = authFunctionsData?.data.authFunctions ?? [];

  const handleToggleExpanded = (_e: SyntheticEvent, isExpanded: boolean) => {
    setExpended(isExpanded);
  };

  const handleClick = (authFunction: AuthFunctionDetail) => {
    setCheckedList((prev) => {
      const target = prev.find(
        (item) => item.authFunctionCode === authFunction.authFunctionCode
      );
      if (typeof target !== 'undefined') {
        return prev.filter(
          (item) => item.authFunctionCode !== authFunction.authFunctionCode
        );
      }
      return [...prev, authFunction];
    });
  };

  const handleClear = () => {
    setCheckedList([]);
  };

  const handleSelectAll = () => {
    setCheckedList([...authFunctionsList]);
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
          權限篩選
        </Typography>
        <Button
          variant="text"
          color="info"
          endIcon={
            expended ? (
              <KeyboardArrowUpRoundedIcon color="info" />
            ) : (
              <KeyboardArrowDownRoundedIcon color="info" />
            )
          }
        >
          {expended ? '收闔條件篩選' : '展開條件篩選'}
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
          {isAuthFunctionsLoading && <CircularProgress />}
          {authFunctionsList.map((authFunction, idx) => (
            <Chip
              key={`${authFunction.authFunctionCode}-${idx}`}
              id={authFunction.authFunctionCode}
              handleClick={() => handleClick(authFunction)}
              defaultCheckedStatus={
                typeof checkedList.find(
                  (item) =>
                    item.authFunctionCode === authFunction.authFunctionCode
                ) !== 'undefined'
              }
              label={`${authFunction.authFunctionCode} / ${authFunction.authFunctionName}`}
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
