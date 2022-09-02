import defaultSet from "../style/defaultSet.js";

const body = document.body;
const root = document.getElementById("root");

export default function mainBox() {
  defaultSet.reset();
  defaultSet.widthAndHeight(body, "100vw", "100vh");

  let mainBox = defaultSet.elementCreate("div", 1, root);
  mainBox.setAttribute("id", "main-box");
  defaultSet.widthAndHeight(mainBox, "85%", "90%");
  defaultSet.flexSetting(mainBox, "center", "center");
  mainBox.style.gap = "40px";
  mainBox.style.fontFamily = "Do Hyeon";
}
