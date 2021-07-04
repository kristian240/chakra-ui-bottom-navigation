import {
	As,
	chakra,
	forwardRef,
	HTMLChakraProps,
	Icon,
	IconProps,
	omitThemingProps,
	StylesProvider,
	SystemStyleObject,
	ThemingProps,
	useMultiStyleConfig,
	useStyles,
} from '@chakra-ui/react';
import { dataAttr, cx, __DEV__ } from '@chakra-ui/utils';
import { mergeRefs } from '@chakra-ui/react-utils';
import React from 'react';

import {
	BottomNavigationDescendantsProvider,
	BottomNavigationItemProvider,
	BottomNavigationProvider,
	IBottomNavigationContext,
	useBottomNavigationContext,
	useBottomNavigationDescendant,
	useBottomNavigationDescendants,
	useBottomNavigationItemContext,
} from './use-bottom-navigation';

export interface IBottomNavigationProps
	extends Omit<HTMLChakraProps<'nav'>, 'onChange'>,
		ThemingProps<'BottomNavigation'>,
		IBottomNavigationContext {}

export const BottomNavigation = forwardRef<IBottomNavigationProps, 'nav'>(
	({ value, onChange, showLabel, ...props }, ref) => {
		const styles = useMultiStyleConfig('BottomNavigation', props);
		const ownProps = omitThemingProps(props);

		const descendants = useBottomNavigationDescendants();

		const ctx = React.useMemo(() => ({ value, onChange, showLabel }), [value, onChange, showLabel]);

		return (
			<BottomNavigationProvider value={ctx}>
				<BottomNavigationDescendantsProvider value={descendants}>
					<StylesProvider value={styles}>
						<chakra.nav
							ref={ref}
							className={cx('chakra-bottom-navigation', props.className)}
							__css={styles.container}
							{...ownProps}
						/>
					</StylesProvider>
				</BottomNavigationDescendantsProvider>
			</BottomNavigationProvider>
		);
	}
);

if (__DEV__) {
	BottomNavigation.displayName = 'BottomNavigation';
}

BottomNavigation.defaultProps = {
	showLabel: 'always',
};

interface IBottomNavigationItemProps extends Omit<HTMLChakraProps<'button'>, 'value'> {
	value?: string | number;
}

export const BottomNavigationItem = forwardRef<IBottomNavigationItemProps, 'button'>(({ value, ...props }, ref) => {
	const isDisabled = props.disabled || false;

	const styles = useStyles();

	const context = useBottomNavigationContext();

	const { index, register } = useBottomNavigationDescendant({
		disabled: isDisabled,
	});

	const itemValue = value || index;

	const isSelected = itemValue === context.value;

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		props.onClick?.(e);
		context.onChange(itemValue);
	};

	const itemStyles: SystemStyleObject = {
		opacity: isDisabled || !isSelected ? 0.4 : 1,
		...styles.item,
	};

	const ctx = React.useMemo(() => ({ isDisabled, isSelected }), [isDisabled, isSelected]);

	return (
		<BottomNavigationItemProvider value={ctx}>
			<chakra.button
				ref={mergeRefs(register, ref)}
				className={cx('chakra-bottom-navigation__item', props.className)}
				__css={itemStyles}
				{...props}
				onClick={handleClick}
			/>
		</BottomNavigationItemProvider>
	);
});

if (__DEV__) {
	BottomNavigationItem.displayName = 'BottomNavigationItem';
}

interface IBottomNavigationIconProps extends IconProps {
	as: As<any>;
}

export const BottomNavigationIcon: React.FC<IBottomNavigationIconProps> = (props) => {
	const styles = useStyles();

	return (
		<Icon
			aria-hidden
			__css={styles.icon}
			{...props}
			className={cx('chakra-bottom-navigation__icon', props.className)}
		/>
	);
};

if (__DEV__) {
	BottomNavigationIcon.displayName = 'BottomNavigationIcon';
}

interface IBottomNavigationLabelProps extends HTMLChakraProps<'div'> {}

export const BottomNavigationLabel = forwardRef<IBottomNavigationLabelProps, 'div'>((props, ref) => {
	const { showLabel } = useBottomNavigationContext();
	const { isSelected } = useBottomNavigationItemContext();
	const styles = useStyles();

	const dataIsLabelHidden = React.useMemo(
		() => dataAttr(showLabel === 'never' || (showLabel === 'if-active' && !isSelected)),
		[showLabel, isSelected]
	);

	const labelStyles: SystemStyleObject = {
		flex: 1,
		...styles.label,
	};

	return (
		<StylesProvider value={styles}>
			<chakra.div
				ref={ref}
				className={cx('chakra-bottom-navigation__label', props.className)}
				__css={labelStyles}
				data-hidden={dataIsLabelHidden}
				{...props}
			/>
		</StylesProvider>
	);
});

if (__DEV__) {
	BottomNavigationLabel.displayName = 'BottomNavigationLabel';
}
