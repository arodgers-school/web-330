/**
 * Set the default theme to light if one has not been set in the browsers localStorage
 */
//setDefaultTheme();

function setDefaultTheme() {
  const theme = localStorage.getItem("mode") || "light-theme";
  const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
  const iconText = localStorage.getItem("iconText") || "Light Mode";

  document.body.classList.value = theme;
  document.getElementById("icon-mode").classList.add(iconMode);
  document.getElementById("icon-text").innerHTML = iconText;
}

function toggleMode(x) {
  let colorTheme = document.body.classList; // get the body's CSS class
  let iconMode = x.classList; // get the current classes assigned to the triggered button

  /**
   * If the current body class is set to the light-theme, update the user's preference to the dark-theme in the browsers
   * local storage.
   */
  if (colorTheme.value === "light-theme") {
    localStorage.clear();
    localStorage.setItem("mode", "dark-theme");
    localStorage.setItem("iconMode", "fa-toggle-on");
    localStorage.setItem("iconText", "Dark Mode");
  } else {
    /**
     * If the current body class is set to the dark-theme, update the user's preference to the light-theme in the browsers
     * local storage.
     */
    localStorage.clear();
    localStorage.setItem("mode", "light-theme");
    localStorage.setItem("iconMode", "fa-toggle-off");
    localStorage.setItem("iconText", "Light Mode");
  }

  /**
   * Apply the updated selection to the HTML page elements
   */
  colorTheme.value = localStorage.getItem("mode");
  iconMode.value = `fa ${localStorage.getItem("iconMode")} pull-right`;
  document.getElementById("icon-text").innerHTML = localStorage.getItem("iconText");
}