import data from "./data.js";
import styling from "./styling.js";

export default function change(number) {
  let count = number;

  styling.opacitySetting(img, "20%");
  setTimeout(() => {
    img.src = data.thumnailData[count].img;

    styling.opacitySetting(img, "100%");
  }, 200);

  styling.textContentSetting(title, data.thumnailData[count].title);
  styling.textContentSetting(author, data.thumnailData[count].author);
  styling.textContentSetting(summary, data.thumnailData[count].summary);
  a.href = data.thumnailData[count].link;
}
