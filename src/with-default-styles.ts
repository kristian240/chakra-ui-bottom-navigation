import { mergeThemeOverride } from '@chakra-ui/react';

import { BottomNavigationStyleConfig } from './index';

type Dict = Record<string, any>;

export const withDefaultStyles = (overrides: Dict): Dict => {
	return mergeThemeOverride(BottomNavigationStyleConfig, overrides);
};
