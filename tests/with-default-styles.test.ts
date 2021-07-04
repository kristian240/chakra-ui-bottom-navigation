import { BottomNavigationStyleConfig, withDefaultStyles } from '../src/index';

describe('withDefaultStyles', () => {
	it('should return default styles with empty object', () => {
		expect(withDefaultStyles({})).toEqual(BottomNavigationStyleConfig);
	});

	it('should override ', () => {
		const override = {
			baseStyle: {
				item: {
					mx: 2,
				},
			},
			variants: {
				flat: () => ({
					container: {
						border: 'solid',
					},
				}),
			},
		};

		const customStyleConfig = withDefaultStyles(override);

		expect(customStyleConfig.baseStyle.item.mx).toBe(2);
		expect(customStyleConfig.baseStyle.item.flex).toBe(1);

		const flatStyles = customStyleConfig.variants.flat(customStyleConfig.defaultProps);

		expect(flatStyles.container.border).toBe('solid');
		expect(flatStyles.container.bottom).toBe(0);
	});
});
