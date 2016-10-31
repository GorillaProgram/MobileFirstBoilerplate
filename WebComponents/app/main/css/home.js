import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "::-webkit-scrollbar": {
        "width": 0
    },
    "HomeLeftTabsLink": {
        "color": "#555"
    },
    "HomeLeftTabsLinkactive": {
        "color": "#1177DB",
        "cursor": "default",
        "borderBottomColor": "transparent"
    },
    "HomeLeftTabsImageLink": {}
});