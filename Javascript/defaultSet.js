// 요소를 만들고 width와 height, flex 등 기본적인 값을 설정하는 함수가 모여있는 객체
export default {
  // 새로운 HTML 요소를 생성하는 함수
  elementCreate: function (element, number, parent) {
    if (typeof element !== "string" || typeof number !== "number") {
      console.log("first arg need string, second arg need number");
    }

    for (let i = 0; i < number; i++) {
      let newElement = document.createElement(element);
      parent.appendChild(newElement);
      return newElement;
    }
  },

  // 요소의 width와 height 값을 설정하는 함수
  widthAndHeight: function (element, width, height) {
    if (typeof width !== "string" || typeof height !== "string") {
      console.log("second, third args need string");
    }
    element.style.width = width;
    element.style.height = height;
  },

  // flex 스타일을 설정하는 함수
  flexSetting: function (element, justify, align) {
    element.style.display = "flex";
    element.style.justifyContent = justify;
    element.style.alignItems = align;
  },
  // body margin, padding 초기화 함수
  reset: function () {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.boxSizing = "border-box";
    document.body.style.userSelect = "none";
    document.body.style.transition = "0.5s";
  },

  bodySetting: function () {
    this.reset();
    this.flexSetting(document.body, "center", "center");
  },
};
