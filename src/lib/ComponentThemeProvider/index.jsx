import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { checkTheme } from "./utils";

const ComponentThemeProvider = ({ theme, children }) => {
  const newTheme = checkTheme({ theme });
  return <ThemeProvider theme={newTheme}>{children}</ThemeProvider>;
};

ComponentThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  theme: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ComponentThemeProvider;
