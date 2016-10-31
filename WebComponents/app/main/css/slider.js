import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "sliderLayout": {},
    "slick-slider": {
        "marginBottom": 0
    },
    "slick-dottedslick-slider": {
        "marginBottom": 0
    },
    "slick-dots": {
        "position": "absolute",
        "bottom": 20,
        "display": "block",
        "width": "100%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "listStyle": "none",
        "textAlign": "center"
    },
    "slick-dots li": {
        "position": "relative",
        "display": "inline-block",
        "width": 20,
        "height": 20,
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 5,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "cursor": "pointer"
    },
    "slick-dots li button": {
        "fontSize": 0,
        "lineHeight": 0,
        "display": "block",
        "width": 20,
        "height": 20,
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "cursor": "pointer",
        "color": "transparent",
        "border": 0,
        "outline": "none",
        "background": "transparent"
    },
    "slick-dots li button:hover": {
        "outline": "none"
    },
    "slick-dots li button:focus": {
        "outline": "none"
    },
    "slick-dots li button:hover:before": {
        "opacity": 0.5
    },
    "slick-dots li button:focus:before": {
        "opacity": 1
    },
    "slick-dots li button:before": {
        "fontFamily": "'slick'",
        "fontSize": 6,
        "lineHeight": 20,
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": 20,
        "height": 20,
        "content": "'•'",
        "textAlign": "center",
        "opacity": 0.25,
        "color": "white",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "slick-dots lislick-active button:before": {
        "opacity": 0.75,
        "color": "white"
    }
});