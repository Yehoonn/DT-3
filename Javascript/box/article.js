import defaultSet from "../style/defaultSet.js";
import styling from "../style/styling.js";

export default function article() {
  const mainBox = document.getElementById("main-box");

  let article = defaultSet.elementCreate("article", 1, mainBox);
  article.setAttribute("id", "article");
  defaultSet.widthAndHeight(article, "80%", "90%");
  styling.displaySetting(article, "flex");
  article.style.flexDirection = "column";
}
