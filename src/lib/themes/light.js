// import Common from './commons',

const light = {
  id: "light",
  name: "Light",
  vars: {
    $primary: "#3949ab",
    $primarySecond: "#1228af",
    $dark: "#212121",
    $light: "#fafafa",
    $danger: "#e53935",
    $dangerSecond: "#ca3a37",
    $success: "#43a047",
    $successSecond: "#11a017",
    $warning: "#ff9800",
    $warningSecond: "#e08a0a",
    $body: "#fafafa",
    $text: "#000",
    $darkGray: "#868e90",
    $textSoft: "#b1bac3",
    $backgroundDarker: "rgb(22, 28, 36)",
    $backgroundDark: "rgb(33, 43, 54)",
    $breadcrumbBackground: "#e9ecef",
  },
  button: {
    defaults: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      margin: "0",
      opacity: "1",
      transition: ".2s ease-out",
      ":disabled": {
        opacity: "0.6",
      },
    },
    size: {
      sm: {
        padding: "0px 16px 0px 16px",
        fontSize: ".775rem",
        fontWeight: "500",
        lineHeight: "1.85rem",
        borderRadius: ".2rem",
        letterSpacing: ".0892857143em",
      },
      md: {
        padding: "0px 16px 0px 16px",
        fontSize: ".875rem",
        fontWeight: "500",
        lineHeight: "2.25rem",
        borderRadius: ".2rem",
        letterSpacing: ".0892857143em",
      },
      lg: {
        padding: "0px 16px 0px 16px",
        fontSize: "1.25rem",
        fontWeight: "500",
        lineHeight: "3.25rem",
        borderRadius: ".3rem",
        letterSpacing: ".0892857143em",
      },
    },
    variant: {
      primary: {
        background:
          "linear-gradient(to top, $primary 50%, $primarySecond 50%) bottom",
        backgroundSize: "200% 200%",
        borderRadius: "4px",
        color: "white",
        border: "1px solid $primary",
        textTransform: "uppercase !important",
        boxShadow:
          "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
        ":active": {
          backgroundPosition: "top",
          boxShadow:
            "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
          border: "1px solid $primarySecond",
        },
        ":focus": {
          boxShadow: "0px 0px 0px 1px white, 0px 0px 0px 3px $primary",
        },
        ":disabled": {
          opacity: "0.6",
        },
        isOutline: {
          background: "transparent",
          border: "1px solid $primary",
          color: "$primary",
        },
      },
      success: {
        background:
          "linear-gradient(to top, $success 50%, $successSecond 50%) bottom",
        backgroundSize: "200% 200%",
        borderRadius: "3px",
        border: "1px solid $success",
        color: "white",
        textTransform: "uppercase !important",
        boxShadow:
          "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
        ":active": {
          backgroundPosition: "top",

          boxShadow:
            "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
          border: "1px solid $successSecond",
        },
        ":focus": {
          boxShadow: "0px 0px 0px 1px white, 0px 0px 0px 3px $success",
        },
        isOutline: {
          background: "transparent",
          border: "1px solid $success",
          color: "$success",
        },
      },
      danger: {
        background:
          "linear-gradient(to top, $danger 50%, $dangerSecond 50%) bottom",
        backgroundSize: "200% 200%",
        borderRadius: "3px",
        border: "1px solid $danger",
        color: "white",
        textTransform: "uppercase !important",
        boxShadow:
          "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
        ":active": {
          backgroundPosition: "top",
          boxShadow:
            "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
          border: "1px solid $dangerSecond",
        },
        ":focus": {
          boxShadow: "0px 0px 0px 1px white, 0px 0px 0px 3px $danger",
        },
        isOutline: {
          background: "transparent",
          border: "1px solid $danger",
          color: "$danger",
        },
      },
      warning: {
        background:
          "linear-gradient(to top, $warning 50%, $warningSecond 50%) bottom",
        backgroundSize: "200% 200%",
        borderRadius: "3px",
        border: "1px solid $warning",
        color: "white",
        textTransform: "uppercase !important",
        boxShadow:
          "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
        ":active": {
          backgroundPosition: "top",
          boxShadow:
            "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
          border: "1px solid $warningSecond",
        },
        ":focus": {
          boxShadow: "0px 0px 0px 1px white, 0px 0px 0px 3px $warning",
        },
        ":disabled": {
          opacity: "0.6",
        },
        isOutline: {
          background: "transparent",
          border: "1px solid $warning",
          color: "$warning",
        },
      },
      link: {
        backgroundColor: "transparent",
        borderRadius: "0",
        border: "none",
        padding: "0 !important",
        color: "#3949ab",
        textDecoration: "underline",
      },
    },
  },
  card: {
    overflow: "hidden",
    margin: "auto 0",
    width: "100%",
    fontFamily: "Roboto, arial, sans-serif",
    boxShadow:
      "rgb(0 0 0 / 24%) 0px 0px 2px 0px, rgb(0 0 0 / 24%) 0px 16px 32px -4px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    header: {
      backgroundColor: "transparent",
      textAlign: "left",
      borderBottom: "1px solid #ececec",
      display: "flex",
      justifyContent: "space-between",
      padding: "6px",
      h2: {
        margin: 0,
        fontSize: "16px",
        color: "rgb(22, 28, 36)",
        textTransform: "uppercase",
      },
    },
    content: {
      minHeight: "48px",
      padding: "10px",
      textAlign: "center",
      width: "100%",
      position: "relative",
    },
    contentImage: {
      padding: 0,
      width: "50%",
      img: {
        width: "100%",
        height: "100%",
      },
    },
    footer: {
      backgroundColor: "#fff",
      margin: "0 10px",
      textAlign: "left",
      padding: "10px",
      position: "absolute",
      fontWeight: 300,
      borderTop: "1px solid #ececec",
      bottom: "0",
      left: "0",
      right: "0",
      fontSize: "12px",
      color: "gray",
      a: {
        color: "#000",
      },
    },
    body: {
      display: "flex",
      flexDirection: "column",
      minHeight: "350px",
      paddingRight: "32px",
      paddingLeft: "32px",
      fieldset: {
        position: "relative",
        padding: 0,
        margin: 0,
        border: 0,
      },
      input: {
        padding: "7px 0",
        width: "100%",
        fontFamily: "inherit",
        fontSize: "14px",
        borderTop: 0,
        borderRight: 0,
        borderBottom: "1px solid #ddd",
        borderLeft: 0,
        transition: "border-bottom-color 0.25s ease-in",
      },
      icon: {
        color: "#666",
        cursor: "pointer",
        opacity: 0.25,
        transition: "opacity 0.25s ease-in",
      },
    },
  },
};

export default light;
