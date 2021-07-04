# Chakra-UI Bottom Navigation

Chakra-UI Bottom Navigation is an accessible and reusable component built to work seamlessly with [Chakra-UI](https://chakra-ui.com/).

<!-- TODO create sandbox demo -->

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

## Usage

> NOTE: this component requries Chakra-UI >= v1.0.0 to work properly. You can follow [instructions for installing Chakara-UI](https://chakra-ui.com/docs/getting-started) or [instructions for migrating to v1](https://chakra-ui.com/docs/migration)

<!-- TODO: add theme section -->

### Basic example

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
export const BasicExample = () => {
  const router = useRouter();

  const handleChange = useCallback((path) => {
    router.push(path);
  });

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

<!-- ## Props

### BottomNavigation props

BottomNavigation composes `Box` so you call pass all `Box` related props.

| Prop name   | Values                      | Default value | Description |
| ----------- | --------------------------- | ------------- | ----------- |
| colorScheme | default chakra colorSchemes | "blue"        |             | -->
