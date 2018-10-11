# Zeplin React Native Styled Components Extension

Generates React Native [Glamorous](https://github.com/robinpowered/glamorous-native) type Styled Components and Themes from colors, text styles and layers. ⚛️📱

#### 🎨 Sample colors output:

```js
const base = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  yellow: "#ffff00",
  black: "#000000",
  black50: "rgba(0, 0, 0, 0.5)",
  white: "#ffffff"
};
```

#### 🔤 Sample text components output:

```js
const SampleTextStyle = glamorous.text((props, theme) => ({
  fontFamily: theme.font.arial,
  fontSize: 20,
  textAlign: "left",
  color: theme.color.black
}));

const SampleTextStyleWithColor = glamorous.text((props, theme) => ({
  fontFamily: theme.font.arial,
  fontSize: 20,
  textAlign: "left",
  color: theme.color.red
}));
```

#### 🍰 Sample layer output:

```js
import { SampleTextStyle } from 'StyledComponents/Typography'

export const Component = glamorous(SampleTextStyle){((props, theme) => ({
  height: 24,
  width: 220,
})
```

## ⚙️ Options

#### Color format

Supports HEX, RGB or HSL. Sample colors output as HSL:

```js
const colors = {
  red: "hsl(0, 100%, 50%)",
  black50: "hsla(0, 0%, 0%, 0.5)"
};
```

#### Add font scale property to texts

Adds support for a `fontScale` property to all Text components. Default output:

```js
const SampleTextStyle = glamorous.text((props, theme) => ({
  fontSize: 20,
  lineHeight: 22
}));
```

`fontScale` enabled:

```js
const SampleTextStyle = glamorous.text((props, theme) => ({
  fontSize: 20 * (props.fontScale || 1),
  lineHeight: 22 * (props.fontScale || 1)
}));
```

#### Add color property to texts

Adds support for a `color` property to all Text components. Default output:

```js
const SampleTextStyle = glamorous.text((props, theme) => ({
  color: "red"
}));
```

`color` enabled:

```js
const SampleTextStyle = glamorous.text((props, theme) => ({
  color: props.color || "red"
}));
```

#### Text base component

Set the base component for all texts. Default output:

```js
const SampleTextStyle = glamorous.text((props, theme) => ({
  fontSize: 20
}));
```

With base component `Base`:

```js
const SampleTextStyle = glamorous(Base)((props, theme) => ({
  fontSize: 20
}));
```

#### Theme namespace for colors in styled components

Namespace for all color type vars in styled components. Use this option if you have a certain namespace in your theme for your colors. Default output:

```js
const RedView = glamorous.view((props, theme) => ({
  backgroundColor: theme.color.red
}));
```

With namespace `V2.Color`:

```js
const RedView = glamorous.view((props, theme) => ({
  backgroundColor: theme.V2.Color.red
}));
```

#### Theme namespace for texts in styled components

Namespace for all font type vars in styled components. Use this option if you have a certain namespace in your theme for your fonts. Default output:

```js
const ArialText = glamorous.text((props, theme) => ({
  fontFamily: theme.font.arial
}));
```

With namespace `V2.Font`:

```js
const ArialText = glamorous.text((props, theme) => ({
  fontFamily: theme.V2.Font.arial
}));
```

#### Path to typography components

When generating text layers the extension automatically imports text components created in the Zeplin `Styleguide`. This option should be the path to these components in your RN project. Default output:

```js
import { ArialText } from "StyledComponents/Typography";
```

With path `Style/Text`:

```js
import { ArialText } from "Style/Text";
```

#### Path to BlurView component

When generating layers with a blur effect the extension automatically generates a blur view by importing [`react-native-blur`](https://github.com/react-native-community/react-native-blur). However, you might already have a blur view in your RN project, you can set the path to this view with this option. Default output:

```js
import { BlurView as RNBlurView } from 'react-native-blur'

const StyledContainer = glamorous.view((props, theme) => ({
  height: 100,
  width: 100,
  backgroundColor: '#00ffff'
})

const BlurView = glamorous(RNBlurView)({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
})

export const Component = props => {
  const { children } = props
  return <StyledContainer {...props}>
    <BlurView blurType="dark" /> // "xlight", "light" or "dark"
    {children}
  </StyledContainer>
}
```

With path `StyledComponents/BlurView`:

```js
import { BlurView } from 'StyledComponents/BlurView`'

const StyledContainer = glamorous.view((props, theme) => ({
  height: 100,
  width: 100,
  backgroundColor: '#00ffff'
})

export const Component = props => {
  const { children } = props
  return <StyledContainer {...props}>
    <BlurView blurType="dark" /> // "xlight", "light" or "dark"
    {children}
  </StyledContainer>
}
```

## 📝 Roadmap

- Implement usage of a `Spacing` component that handles position/margins.
- Use flexbox to position components.

## 🏗 Development

This extension is developed using [zem](https://github.com/zeplin/zem), Zeplin Extension Manager. zem is a command line tool that lets you quickly create and test extensions.

This extension is open source, you can find it on Github:
[https://github.com/johankasperi/zem-rn-styled-components](https://github.com/johankasperi/zem-rn-styled-components)

## License

MIT License

Copyright (c) 2018 Johan Kasperi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
