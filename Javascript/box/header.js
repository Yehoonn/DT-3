import data from "../data/data.js";
import defaultSet from "../style/defaultSet.js";
import styling from "../style/styling.js";

const root = document.getElementById("root");
const aTagArray = [];
let count = 0;

export default function header() {
  let header = defaultSet.elementCreate("header", 1, root);
  header.style.width = "100%";

  let ul = defaultSet.elementCreate("ul", 1, header);
  defaultSet.flexSetting(ul, "center", "center");
  styling.gap(ul, "20px");
  styling.listStyleType(ul, "none");
  styling.fontWeight(ul, "bold");

  for (let value of data.header) {
    let li = defaultSet.elementCreate("a", 1, ul);
    aTagArray.push(li);
    li.style.textDecoration = "none";
    li.style.color = "black";

    defaultSet.widthAndHeight(li, "100px", "40px");
    defaultSet.flexSetting(li, "center", "center");
    styling.borderRadius(li, "10px");
    styling.textContentSetting(li, value);
    styling.cursorPointer(li);

    li.addEventListener("mouseover", function () {
      styling.bgColorStyling(li, "salmon");
    });

    li.addEventListener("mouseout", function () {
      styling.bgColorStyling(li, "unset");
    });
  }

  let hr = defaultSet.elementCreate("hr", 1, header);
  defaultSet.widthAndHeight(hr, "90%", "1px");
  styling.bgColorStyling(hr, "black");

  for (let value of data.alinkData) {
    aTagArray[count].href = value;
    count++;
  }
}
