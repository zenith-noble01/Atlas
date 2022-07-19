export const themeAction = {
  toggleTheme: (state) => {
    if (state === "light") {
      return "dark";
    } else {
      return "light";
    }
  },
};
