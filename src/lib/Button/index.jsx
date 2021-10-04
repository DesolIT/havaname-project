import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button((props) => {
  let finalStyle = { color: "red" };
  if (props && props.theme && props.theme.button) {
    if (props.theme.button.defaults) {
      finalStyle = { ...finalStyle, ...props.theme.button.defaults };
    }
    if (
      props.variant &&
      props.theme.button.variant &&
      props.theme.button.variant[props.variant]
    ) {
      finalStyle = {
        ...finalStyle,
        ...props.theme.button.variant[props.variant],
      };
      if (
        props.isOutline &&
        props.theme.button.variant[props.variant].isOutline
      ) {
        finalStyle = {
          ...finalStyle,
          ...props.theme.button.variant[props.variant].isOutline,
        };
      }
    }
    if (
      props.size &&
      props.theme.button.size &&
      props.theme.button.size[props.size]
    ) {
      finalStyle = { ...finalStyle, ...props.theme.button.size[props.size] };
    }
  }
  return finalStyle;
});

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "link",
    "danger",
    "warning",
    "disabled",
    "cardHeaderBtn",
    "iconBtn",
    "modalBtn",
    "outline",
    "tableActions",
  ]),
  type: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
  type: "button",
};

export default React.memo(Button);
