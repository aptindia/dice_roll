export const mobileRemoveWhiteStrip = () => {
  const vh = window.innerHeight;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.body.setAttribute(
    "style",
    `height: calc(var(--vh, ${vh}px));`
  );
  // End Code
};
