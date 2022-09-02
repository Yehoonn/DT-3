import defaultSet from "../style/defaultSet.js";

export default function aside() {
  const mainBox = document.getElementById("main-box");

  let aside = defaultSet.elementCreate("aside", 1, mainBox);
  aside.setAttribute("id", "aside");

  defaultSet.widthAndHeight(aside, "20%", "90%");
}
