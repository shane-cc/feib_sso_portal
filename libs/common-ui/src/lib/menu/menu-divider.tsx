import { COLORS } from '@sso-platform/theme';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles<{ color: string }>()((_theme, { color }) => ({
  root: {
    width: '100%',
    height: 1,
    display: 'flex',
    position: 'absolute',
    bottom: '-.25rem',
    left: 0,
  },
}));

export const MenuDivider = () => {
  const { classes } = useStyles({ color: 'text.primary' });
  return (
    <div className={classes.root}>
      <svg
        width="411"
        height="1"
        viewBox="0 0 137 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 0.5H136.5"
          stroke={COLORS.grey[500]}
          stroke-opacity="0.24"
          stroke-linecap="square"
          stroke-dasharray="4 5"
        />
      </svg>
    </div>
  );
};
