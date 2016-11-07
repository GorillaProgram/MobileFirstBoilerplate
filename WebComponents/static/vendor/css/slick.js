import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "slick-slider": {
        "position": "relative",
        "display": "block",
        "boxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "WebkitTouchCallout": "none",
        "WebkitUserSelect": "none",
        "KhtmlUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none",
        "MsTouchAction": "pan-y",
        "touchAction": "pan-y",
        "WebkitTapHighlightColor": "transparent",
        "marginBottom": 30
    },
    "slick-list": {
        "position": "relative",
        "overflow": "hidden",
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "slick-list:focus": {
        "outline": "none"
    },
    "slick-loading slick-list": {
        "background": "#fff url(\"./ajax-loader.gif\") center center no-repeat"
    },
    "slick-listdragging": {
        "cursor": "hand"
    },
    "slick-slider slick-track": {
        "WebkitTransform": "translate3d(0, 0, 0)",
        "MozTransform": "translate3d(0, 0, 0)",
        "MsTransform": "translate3d(0, 0, 0)",
        "OTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "slick-track": {
        "position": "relative",
        "left": 0,
        "top": 0,
        "display": "block"
    },
    "slick-track:before": {
        "content": "",
        "display": "table"
    },
    "slick-track:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "slick-loading slick-track": {
        "visibility": "hidden"
    },
    "slick-slide": {
        "float": "left",
        "height": "100%",
        "minHeight": 1,
        "display": "none"
    },
    "[dir=\"rtl\"] slick-slide": {
        "float": "right"
    },
    "slick-slide img": {
        "display": "block"
    },
    "slick-slideslick-loading img": {
        "display": "none"
    },
    "slick-slidedragging img": {
        "pointerEvents": "none"
    },
    "slick-initialized slick-slide": {
        "display": "block"
    },
    "slick-loading slick-slide": {
        "visibility": "hidden"
    },
    "slick-vertical slick-slide": {
        "display": "block",
        "height": "auto",
        "border": "1px solid transparent"
    },
    "slick-prev": {
        "position": "absolute",
        "display": "block",
        "height": 20,
        "width": 20,
        "lineHeight": 0,
        "fontSize": 0,
        "cursor": "pointer",
        "background": "transparent",
        "color": "transparent",
        "top": "50%",
        "marginTop": -10,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": "none",
        "outline": "none",
        "left": -35
    },
    "slick-next": {
        "position": "absolute",
        "display": "block",
        "height": 20,
        "width": 20,
        "lineHeight": 0,
        "fontSize": 0,
        "cursor": "pointer",
        "background": "transparent",
        "color": "transparent",
        "top": "50%",
        "marginTop": -10,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": "none",
        "outline": "none",
        "right": -35
    },
    "slick-prev:hover": {
        "outline": "none",
        "background": "transparent",
        "color": "transparent"
    },
    "slick-prev:focus": {
        "outline": "none",
        "background": "transparent",
        "color": "transparent"
    },
    "slick-next:hover": {
        "outline": "none",
        "background": "transparent",
        "color": "transparent"
    },
    "slick-next:focus": {
        "outline": "none",
        "background": "transparent",
        "color": "transparent"
    },
    "slick-prev:hover:before": {
        "opacity": 1
    },
    "slick-prev:focus:before": {
        "opacity": 1
    },
    "slick-next:hover:before": {
        "opacity": 1
    },
    "slick-next:focus:before": {
        "opacity": 1
    },
    "slick-prevslick-disabled:before": {
        "opacity": 0.25
    },
    "slick-nextslick-disabled:before": {
        "opacity": 0.25
    },
    "slick-prev:before": {
        "fontFamily": "slick",
        "fontSize": 20,
        "lineHeight": 1,
        "color": "white",
        "opacity": 0.75,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "slick-next:before": {
        "fontFamily": "slick",
        "fontSize": 20,
        "lineHeight": 1,
        "color": "white",
        "opacity": 0.75,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "[dir=\"rtl\"] slick-prev": {
        "left": "auto",
        "right": -35
    },
    "[dir=\"rtl\"] slick-next": {
        "left": -35,
        "right": "auto"
    },
    "slick-dots": {
        "position": "absolute",
        "bottom": 10,
        "listStyle": "none",
        "display": "block",
        "textAlign": "center",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "width": "100%"
    },
    "slick-dots li": {
        "position": "relative",
        "display": "inline-block",
        "height": 20,
        "width": 20,
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
        "border": 0,
        "background": "transparent",
        "display": "block",
        "height": 20,
        "width": 20,
        "outline": "none",
        "lineHeight": 0,
        "fontSize": 0,
        "color": "transparent",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "cursor": "pointer"
    },
    "slick-dots li button:hover": {
        "outline": "none"
    },
    "slick-dots li button:focus": {
        "outline": "none"
    },
    "slick-dots li button:hover:before": {
        "opacity": 1
    },
    "slick-dots li button:focus:before": {
        "opacity": 1
    },
    "slick-dots li button:before": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "content": "•",
        "width": 20,
        "height": 20,
        "fontFamily": "slick",
        "fontSize": 6,
        "lineHeight": 20,
        "textAlign": "center",
        "color": "black",
        "opacity": 0.25,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "slick-dots lislick-active button:before": {
        "color": "black",
        "opacity": 0.75
    }
});