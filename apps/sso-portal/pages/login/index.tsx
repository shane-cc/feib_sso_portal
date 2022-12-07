import { useStyles } from '../../styles/login.style';
import Image from 'next/image';
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@sso-platform/common-ui';
import { NextPage } from 'next';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

/* eslint-disable-next-line */
export interface LoginProps {}

const validationLoginSchema = z.object({
  account: z.string().min(1, '請填寫帳號'),
  password: z.string().min(1, '請填寫密碼'),
});

type ValidationLoginSchema = z.infer<typeof validationLoginSchema>;

export const Login: NextPage<LoginProps> = () => {
  const { classes } = useStyles();

  const methods = useForm<ValidationLoginSchema>({
    resolver: zodResolver(validationLoginSchema),
    defaultValues: {
      account: '',
      password: '',
    },
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: ValidationLoginSchema) => {
    console.log(data);
  };

  return (
    <Box className={classes.root}>
      <Box component="header" className={classes.header}>
        <Box className={classes.logo}>
          <Image src="/assets/feib_logo.svg" alt="遠東銀行" fill />
        </Box>
      </Box>
      <Box className={classes.formBackground}></Box>
      <Paper className={classes.form} elevation={0}>
        <Typography variant="h2" fontSize={30} lineHeight={1.25} align="center">
          登入管理系統
        </Typography>
        <Typography variant="body2" align="center" color="primary">
          請使用行內LDAP帳號帳號登入
        </Typography>
        <Box className={classes.formContent}>
          <Controller
            control={control}
            name="account"
            render={({ field }) => (
              <TextField
                label="帳號"
                {...field}
                error={!!errors.account}
                helperText={errors.account?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                label="密碼"
                type="password"
                {...field}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSubmit(onSubmit)}
            size="large"
          >
            登入
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
