# Zeplin React Native Styled Components Extension

Generates React Native [Glamorous](https://github.com/robinpowered/glamorous-native) type Styled Components and Themes from colors, text styles and layers. ⚛️📱

Sample colors output:
```js
const base = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  yellow: "#ffff00",
  black: "#000000",
  black50: "rgba(0, 0, 0, 0.5)",
  white: "#ffffff"
}
```

Sample text components output:
```js
const SampleTextStyle = glamorous(Base)((props, theme) => ({
  fontFamily: theme.font.sfProTextRegular,
  fontSize: 20,
  textAlign: "left",
  color: theme.color.black
}))

const SampleTextStyleWithColor = glamorous(Base)((props, theme) => ({
  fontFamily: theme.font.sfProTextRegular,
  fontSize: 20,
  textAlign: "left",
  color: theme.color.red
}))
```

Sample layer output:
```js
Not supported yet.
```

## Options

#### Color format

Supports HEX, RGB or HSL. Sample colors output as HSL:
```js
const colors = {
  red: "hsl(0, 100%, 50%)",
  black50: "hsla(0, 0%, 0%, 0.5)"
};
```

#### Colors theme prefix in styled components

Prefix for all color type vars in styled components. Use this option if you have a certain namespace in your theme for your colors. Default output:
```js
const RedView = glamorous.view((props, theme) => ({
  backgroundColor: theme.color.red
}))
```
With namespace `V2.Color`:
```js
const RedView = glamorous.view((props, theme) => ({
  backgroundColor: theme.V2.Color.red
}))
```

#### Fonts theme prefix in styled components

Prefix for all font type vars in styled components. Use this option if you have a certain namespace in your theme for your fonts. Default output:
```js
const ArialText = glamorous(Base)((props, theme) => ({
  fontFamily: theme.font.arial
}))
```
With namespace `V2.Font`:
```js
const ArialText = glamorous(Base)((props, theme) => ({
  fontFamily: theme.V2.Font.arial
}))
```

## Development

This extension is developed using [zem](https://github.com/zeplin/zem), Zeplin Extension Manager. zem is a command line tool that lets you quickly create and test extensions.