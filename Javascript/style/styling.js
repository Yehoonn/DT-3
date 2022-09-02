// bgColor나 fontSetting 등 스타일링 기능을 하는 함수들이 모여있는 객체
export default {
  // display를 설정하는 함수

  displaySetting: function (element, display) {
    element.style.display = display;
  },

  // background-color를 설정하는 함수
  bgColorStyling: function (element, color) {
    element.style.backgroundColor = color;
  },

  // textContent를 설정하는 함수
  textContentSetting: function (element, text) {
    element.textContent = text;
  },

  // 폰트의 color와 size를 설정하는 함수
  fontSetting: function (element, color, size) {
    element.style.color = color;
    element.style.fontSize = size;
  },

  // border-radius를 설정하는 함수
  borderRadius: function (element, radius) {
    element.style.borderRadius = radius;
  },

  // 투명도를 설정하는 함수
  opacitySetting: function (element, number) {
    element.style.opacity = number;
  },

  // pointerEvent를 설정하는 함수 (중복 클릭 방지를 위함)
  pointerEventSetting: function (element, event) {
    element.style.pointerEvents = event;
  },

  // trasnform을 설정하는 함수
  transformSetting: function (element, transform) {
    element.style.transform = transform;
  },

  // cursor pointer를 설정하는 함수

  cursorPointer: function (element) {
    element.style.cursor = "pointer";
  },

  // listStyleType을 설정하는 함수

  listStyleType: function (element, text) {
    element.style.listStyleType = text;
  },

  // gap을 설정하는 함수

  gap: function (element, value) {
    element.style.gap = value;
  },

  // fontWeight을 설정하는 함수
  fontWeight: function (element, value) {
    element.style.fontWeight = value;
  },
};
