# Chakra-UI Bottom Navigation

Chakra-UI Bottom Navigation is an accessible and reusable component built to work seamlessly with [Chakra-UI](https://chakra-ui.com/).

Check the [demo](https://codesandbox.io/s/chakra-ui-bottom-navigation-example-kp7hk?file=/src/index.tsx)

## Features

- Multiple variants
- Easily modifed
- Composable
- And more...

## Install

```bash
npm install chakra-ui-bottom-navigation
# or
yarn add chakra-ui-bottom-navigation
```

> NOTE: this component requries Chakra-UI >= v1.0.0 to work properly. You can follow [instructions for installing Chakara-UI](https://chakra-ui.com/docs/getting-started) or [instructions for migrating to v1](https://chakra-ui.com/docs/migration)

## Theme

By default, this component comes with some predefined styles. To utilize this styles add them to theme overrides.

```jsx
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BottomNavigationStyleConfig as BottomNavigation } from 'chakra-ui-bottom-navigation';

const theme = extendTheme({
  components: {
    BottomNavigation,
  },
});

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  );
};
```

### WithDefaultTheme

If you want to expand defualt styles of the component, use the `withDefaultStyles` HOC. Component override follows the same structure as all other Chakra-UI components. [Check the guide here.](https://chakra-ui.com/docs/theming/component-style#styling-multipart-components)

```jsx
import { withDefaultStyles } from 'chakra-ui-bottom-navigation';

const bottomNavigationOverries = {
  // ... component's override
};

const MyBottomNavigation = withDefaultStyles(bottomNavigationOverries);

const theme = extendTheme({
  components: {
    BottomNavigation: MyBottomNavigation,
  },
});
```

## Import

Chakra-UI Bottom Navigation exports 4 component:

- `BottomNavigation`: The wrapper that provides context for all children.
- `BottomNavigationItem`: A single Bottom Navigation element
- `BottomNavigationIcon`: An icon used to render the item
- `BottomNavigationLabel`: A label used to label an item

## Usage

```jsx
export const BasicExample = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation value={value} onChange={setValue}>
      <BottomNavigationItem>
        <BottomNavigationIcon as={HomeIcon} />
        <BottomNavigationLabel>Home</BottomNavigationLabel>
      </BottomNavigationItem>

      <BottomNavigationItem>
        <BottomNavigationIcon as={SearchIcon} />
        <BottomNavigationLabel>Search</BottomNavigationLabel>
      </BottomNavigationItem>

      <BottomNavigationItem>
        <BottomNavigationIcon as={StarIcon} />
        <BottomNavigationLabel>Favourites</BottomNavigationLabel>
      </BottomNavigationItem>
    </BottomNavigation>
  );
};
```

### Bottom navigation as app navigation

```jsx
export const NavigationExample = () => {
  const router = useRouter();

  const handleChange = useCallback(
    (path) => {
      router.push(path);
    },
    [router.push]
  );

  return (
    <BottomNavigation value={router.pathname} onChange={handleChange}>
      <BottomNavigationItem value="/">
        <BottomNavigationIcon as={HomeIcon} />
        <BottomNavigationLabel>Home</BottomNavigationLabel>
      </BottomNavigationItem>

      <BottomNavigationItem value="/search">
        <BottomNavigationIcon as={SearchIcon} />
        <BottomNavigationLabel>Search</BottomNavigationLabel>
      </BottomNavigationItem>

      <BottomNavigationItem value="/favorites">
        <BottomNavigationIcon as={StarIcon} />
        <BottomNavigationLabel>Favorites</BottomNavigationLabel>
      </BottomNavigationItem>
    </BottomNavigation>
  );
};
```

## Props

### BottomNavigation props

BottomNavigation composes `Box` so you call pass all `Box` related props.

| Prop name     | Description                                   | Default value | Values                                                 |
| ------------- | --------------------------------------------- | ------------- | ------------------------------------------------------ |
| `colorScheme` |                                               | `blue`        | all default chakra-ui `colorSchemes` (can be extended) |
| `onChange`    | function that is called when item is selected |               |                                                        |
| `showLabel`   | determines when label should be visible       | `always`      | `'never' \| 'if-active' \| 'always'`                   |
| `value`       | active value of bottom navigation             |               |                                                        |

### BottomNavigationItem props

BottomNavigationItem composes `Button` so you call pass all `Button` related props.

| Prop name | Description                                     | Default value                                 | Values |
| --------- | ----------------------------------------------- | --------------------------------------------- | ------ |
| `value`   | Value that will be passed to `onChange` handler | by default, value is set to index of the item |        |

### BottomNavigationIcon props

BottomNavigationItem composes `Icon` so you call pass all `Icon` related props.

### BottomNavigationLabel props

BottomNavigationItem composes `Box` so you call pass all `Box` related props.

Every `BottomNavigationItem` should have `BottomNavigationLabel` so assistive technologies can label the element. If label is now show (inactive when `showLabel: 'if-active'` or when `showLabel: `'never'`), the label is only hidden from the screen but it is still rendered in the DOM.
