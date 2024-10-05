import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export const hp = (percentage) => {
  return (percentage * deviceHeight) / 100;
};

export const wp = (percentage) => {
  return (percentage * deviceWidth) / 100;
};

export const stripHtmlTags = (html) => {
  return html.replace(/<[^>]*>?/gm, "");
};

export const getColumnCount = () => {
  if (deviceWidth >= 1024) {
    return 4;
  } else if (deviceWidth >= 768) {
    return 3;
  } else {
    return 2;
  }
};

export const getImageSize = (width, height) => {
  if (width > height) {
    return 250;
  } else if (width < height) {
    return 300;
  } else {
    return 200;
  }
};
