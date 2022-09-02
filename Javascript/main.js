import article from "./box/article.js";
import aside from "./box/aside.js";
import asideItem from "./item/asideItem.js";
import colorMode from "./interaction/colorMode.js";
import header from "./box/header.js";
import mainBox from "./box/mainBox.js";
import thumanail from "./item/thumnail.js";

header();
mainBox();
article();
thumanail.createThumnail();
aside();
asideItem();
colorMode();
