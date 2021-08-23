import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants';

export default StyleSheet.create({
  list: {
    paddingBottom: SIZES.default,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
    overflow: 'hidden',
  },
  noMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.base,
    paddingTop: SIZES.subBase / 2,
    justifyContent: 'space-between',
  },
  noMoreText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    ...FONTS.body1,
    fontWeight: '400',
  },
  topText: {
    fontWeight: 'bold',
  },
  indicator: {
    padding: SIZES.subBase / 2,
  },
  upIcon: {
    backgroundColor: COLORS.koromike,
    width: SIZES.default,
    height: SIZES.default,
    borderRadius: SIZES.default / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.default - 2,
  },

  iconStyle: { right: SIZES.default, color: COLORS.gray },
});
