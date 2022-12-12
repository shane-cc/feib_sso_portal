import { Tabs as MuiTabs, TabsTypeMap } from '@mui/material';
import type { TabsProps as MuiTabsProps } from '@mui/material';
import { forwardRef } from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';

/* eslint-disable-next-line */
export interface TabsProps extends MuiTabsProps {}

// export const Tabs: OverridableComponent<TabsTypeMap> = forwardRef(function Tabs<
//   D extends React.ElementType
// >(props: MuiTabsProps<D>, ref: React.Ref<HTMLDivElement> | null) {
//   return (
//     <MuiTabs {...props} ref={ref} component="div">
//       {props.children}
//     </MuiTabs>
//   );
// }) as OverridableComponent<TabsTypeMap>;
// The above line is a workaround for the following error:
// Mui tabs component forwardRef typescript incompatible (cannot use HTMLDivElement and assign the component props to "div") that causes the nested button element error.

export const Tabs = forwardRef<HTMLButtonElement, TabsProps>((props, ref) => {
  return (
    <MuiTabs {...props} ref={ref} component="button">
      {props.children}
    </MuiTabs>
  );
});

export default Tabs;
