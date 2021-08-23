import { StyleSheet } from 'react-native';
import { COLORS, STYLES, FONTS, SIZES } from '../../constants';

export default StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    width: 327,
    height: 265,
    marginBottom: SIZES.subBase,
    borderRadius: SIZES.radius,
    ...STYLES.shaddow,
  },
  textContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    padding: SIZES.subBase,
  },
  image: {
    width: '100%',
    height: 168,
    borderTopLeftRadius: SIZES.radius,
    borderTopRightRadius: SIZES.radius,
  },
  idTitle: {
    alignSelf: 'flex-end',
    ...FONTS.body1,
    marginBottom: SIZES.subBase / 2,
  },
  idText: {
    ...FONTS.body1,
    color: COLORS.darkGray,
  },
  nameTitle: {
    ...FONTS.body1,
    marginBottom: SIZES.subBase / 2,
  },
  nameText: {
    ...FONTS.body1,
    color: COLORS.darkGray,
  },
  locationTitle: {
    ...FONTS.body1,
  },
  locationText: {
    ...FONTS.body1,
    color: COLORS.darkGray,
  },
});
