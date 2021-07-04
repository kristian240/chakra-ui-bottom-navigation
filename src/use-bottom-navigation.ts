import { createContext } from '@chakra-ui/react-utils';
import { createDescendantContext } from '@chakra-ui/descendant';

export const [
	BottomNavigationDescendantsProvider,
	useBottomNavigationDescendantsContext,
	useBottomNavigationDescendants,
	useBottomNavigationDescendant,
] = createDescendantContext<HTMLButtonElement>();

export interface IBottomNavigationContext {
	value: number;
	onChange(newValue: number): void;
	showLabel?: 'never' | 'if-active' | 'always';
}

export const [BottomNavigationProvider, useBottomNavigationContext] = createContext<IBottomNavigationContext>({
	name: 'BottomNavigationContext',
	errorMessage:
		'useBottomNavigationContext: `context` is undefined. Seems you forgot to wrap the accordion components in `<BottomNavigation />`',
});

export interface IBottomNavigationItemContext {
	isDisabled?: boolean;
	isSelected: boolean;
}

export const [BottomNavigationItemProvider, useBottomNavigationItemContext] =
	createContext<IBottomNavigationItemContext>({
		name: 'BottomNavigationItemContext',
		errorMessage:
			'useBottomNavigationItemContext: `context` is undefined. Seems you forgot to wrap the accordion components in `<BottomNavigationItem />`',
	});
