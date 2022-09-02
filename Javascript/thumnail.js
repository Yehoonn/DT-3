import data from "./data.js";
import defaultSet from "./defaultSet.js";
import change from "./interval.js";
import styling from "./styling.js";

export default {
  createThumnail: function () {
    const article = document.getElementById("article");
    let count = 0;
    let thumnailBox = defaultSet.elementCreate("div", 1, article);
    thumnailBox.setAttribute("id", "thumnailBox");
    defaultSet.widthAndHeight(thumnailBox, "95%", "100%");
    styling.displaySetting(thumnailBox, "flex");
    thumnailBox.style.flexDirection = "column";
    thumnailBox.style.gap = "30px";

    let a = defaultSet.elementCreate("a", 1, thumnailBox);
    a.href = data.thumnailData[count].link;
    a.setAttribute("id", "a");
    let Img = defaultSet.elementCreate("img", 1, a);
    Img.setAttribute("id", "img");

    Img.src = data.thumnailData[count].img;
    defaultSet.widthAndHeight(Img, "100%", "550px");

    let title = defaultSet.elementCreate("div", 1, thumnailBox);
    styling.textContentSetting(title, data.thumnailData[count].title);
    styling.fontSetting(title, "black", "3rem");
    title.setAttribute("id", "title");

    let author = defaultSet.elementCreate("div", 1, thumnailBox);
    styling.textContentSetting(author, data.thumnailData[count].author);
    styling.fontSetting(author, "black", "1.5rem");
    author.setAttribute("id", "author");

    let summary = defaultSet.elementCreate("div", 1, thumnailBox);
    styling.textContentSetting(summary, data.thumnailData[count].summary);
    styling.fontSetting(summary, "black", "1.2rem");
    summary.setAttribute("id", "summary");
  },
};
