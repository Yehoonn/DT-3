import data from "./data.js";
import defaultSet from "./defaultSet.js";
import styling from "./styling.js";

const body = document.body;

export default function colorMode() {
  let element = defaultSet.elementCreate("div", 1, body);
  defaultSet.widthAndHeight(element, "50px", "50px");
  styling.borderRadius(element, "15px");
  body.style.backgroundImage = `url(${data.colorAssets[0]})`;
  // styling.bgColorStyling(element, data.colorAssets[1]);
  styling.bgColorStyling(element, "salmon");
  styling.cursorPointer(element);
  element.style.position = "fixed";
  element.style.bottom = "50px";
  element.style.left = "95%";
  let isChange = false;

  element.addEventListener("click", function () {
    if (isChange === false) {
      // styling.bgColorStyling(body, data.colorAssets[1]);
      // styling.bgColorStyling(element, data.colorAssets[0]);
      body.style.backgroundImage = `url(${data.colorAssets[1]})`;
      styling.bgColorStyling(element, "lightgray");
      styling.transformSetting(element, "rotate(360deg)");

      isChange = true;
    } else {
      // styling.bgColorStyling(body, data.colorAssets[0]);
      // styling.bgColorStyling(element, data.colorAssets[1]);
      body.style.backgroundImage = `url(${data.colorAssets[0]})`;
      styling.bgColorStyling(element, "salmon");
      styling.transformSetting(element, "rotate(0deg)");

      isChange = false;
    }
  });
}
