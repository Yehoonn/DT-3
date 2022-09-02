import data from "./data.js";
import defaultSet from "./defaultSet.js";
import change from "./interval.js";
import styling from "./styling.js";

export default function asideItem() {
  const aside = document.getElementById("aside");
  const a = document.getElementById("a");
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const summary = document.getElementById("summary");
  const img = document.getElementById("img");

  let targetArray = ["0", "1", "2", "3"];

  let count = 0;
  let number = 1;

  let interval = setInterval(() => {
    change(number);
    number++;
    if (number === 4) {
      number = 0;
    }
  }, 5000);

  for (let value of data.thumnailData) {
    let item = defaultSet.elementCreate("img", 1, aside);
    item.setAttribute("id", count);
    count++;
    defaultSet.widthAndHeight(item, "100%", "25%");
    styling.opacitySetting(item, "30%");
    styling.cursorPointer(item);
    item.src = value.img;

    item.addEventListener("mouseover", function () {
      styling.opacitySetting(item, "100%");
    });

    item.addEventListener("mouseout", function () {
      styling.opacitySetting(item, "30%");
    });
  }

  window.addEventListener("click", function (event) {
    if (targetArray.indexOf(event.target.id) !== -1) {
      number = event.target.id;

      styling.opacitySetting(img, "20%");

      setTimeout(() => {
        clearInterval(interval);
        interval = setInterval(() => {
          if (number >= 3) {
            number = -1;
          }
          number++;
          change(number);
        }, 5000);

        a.href = data.thumnailData[event.target.id].link;
        img.src = data.thumnailData[event.target.id].img;
        styling.textContentSetting(
          title,
          data.thumnailData[event.target.id].title
        );

        styling.textContentSetting(
          author,
          data.thumnailData[event.target.id].author
        );

        styling.textContentSetting(
          summary,
          data.thumnailData[event.target.id].summary
        );
        styling.opacitySetting(img, "100%");
      }, 300);
    }
  });
}
