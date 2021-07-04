import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { AddIcon } from '@chakra-ui/icons';

import { BottomNavigation, BottomNavigationItem, BottomNavigationIcon, BottomNavigationLabel } from '../src';
import { render } from './utils';

describe('BottomNavigation', () => {
	it('should render all items', async () => {
		render(
			<BottomNavigation value={0} onChange={jest.fn()}>
				<BottomNavigationItem>
					<BottomNavigationIcon as={AddIcon} />
					<BottomNavigationLabel>Label 1</BottomNavigationLabel>
				</BottomNavigationItem>

				<BottomNavigationItem>
					<BottomNavigationIcon as={AddIcon} />
					<BottomNavigationLabel>Label 2</BottomNavigationLabel>
				</BottomNavigationItem>

				<BottomNavigationItem>
					<BottomNavigationIcon as={AddIcon} />
					<BottomNavigationLabel>Label 3</BottomNavigationLabel>
				</BottomNavigationItem>
			</BottomNavigation>
		);

		expect(await screen.findByText('Label 1')).toBeTruthy();
		expect(await screen.findByText('Label 2')).toBeTruthy();
		expect(await screen.findByText('Label 3')).toBeTruthy();
	});

	it('should change the value', async () => {
		const change = jest.fn();

		const Component = () => {
			const [v, setV] = React.useState<string | number>(0);

			const handleChange = (newV: string | number) => {
				change(newV);
				setV(newV);
			};

			return (
				<BottomNavigation value={v} onChange={handleChange}>
					<BottomNavigationItem>
						<BottomNavigationIcon as={AddIcon} />
						<BottomNavigationLabel>Label 1</BottomNavigationLabel>
					</BottomNavigationItem>

					<BottomNavigationItem>
						<BottomNavigationIcon as={AddIcon} />
						<BottomNavigationLabel>Label 2</BottomNavigationLabel>
					</BottomNavigationItem>
				</BottomNavigation>
			);
		};

		render(<Component />);

		expect((await screen.findByText('Label 1')).parentElement?.getAttribute('aria-selected')).toBe('true');

		fireEvent.click((await screen.findByText('Label 2')).parentElement as HTMLButtonElement);

		expect(change).toBeCalled();
		expect(change).toBeCalledWith(1);
		expect((await screen.findByText('Label 1')).parentElement?.getAttribute('aria-selected')).toBeFalsy();
		expect((await screen.findByText('Label 2')).parentElement?.getAttribute('aria-selected')).toBe('true');
	});

	it('should work with custom values', async () => {
		let change = jest.fn();

		render(
			<BottomNavigation value="custom1" onChange={change}>
				<BottomNavigationItem value="custom1">
					<BottomNavigationIcon as={AddIcon} />
					<BottomNavigationLabel>Label 1</BottomNavigationLabel>
				</BottomNavigationItem>

				<BottomNavigationItem value="custom2">
					<BottomNavigationIcon as={AddIcon} />
					<BottomNavigationLabel>Label 2</BottomNavigationLabel>
				</BottomNavigationItem>
			</BottomNavigation>
		);

		const secondItemLabel = await screen.findByText('Label 2');

		fireEvent.click(secondItemLabel.parentElement as HTMLButtonElement);

		expect(change).toBeCalledWith('custom2');
	});
});
