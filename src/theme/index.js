/* eslint-disable */

import { React, useMemo } from 'react';
import { PropTypes } from 'prop-types';
import { CssBaseline } from '@mui/material';
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';
import ComponentsOverrides from './overrides';
import typography from './typography';

export default function ThemeConfig({ children }) {
  const themeOptions = useMemo(() => ({ typography }));

  const theme = createTheme(themeOptions);
  theme.components = ComponentsOverrides(theme);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
ThemeConfig.PropTypes = {
  children: PropTypes.node,
  // foo: PropTypes.string.isRequired,
};
