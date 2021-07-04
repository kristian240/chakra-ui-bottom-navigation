import React from 'react';
import { render as rTLRender } from '@testing-library/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { BottomNavigationStyleConfig } from '../src';

type UI = Parameters<typeof rTLRender>[0];

export const render = (ui: UI, { wrapper: Wrapper = ({ children }: any) => children, ...options } = {}) => {
	const theme = extendTheme({
		components: {
			BottomNavigation: BottomNavigationStyleConfig,
		},
	});

	return rTLRender(
		<ChakraProvider theme={theme}>
			<Wrapper>{ui}</Wrapper>
		</ChakraProvider>,
		options
	);
};
