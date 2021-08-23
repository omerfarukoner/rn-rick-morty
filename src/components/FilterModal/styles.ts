import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.paleBlack,
  },
  modalView: {
    width: '90%',
    height: 275,
    backgroundColor: COLORS.white,
    padding: SIZES.subBase,
    borderRadius: SIZES.radius,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: SIZES.radius,
    padding: SIZES.subBase / 2,
    elevation: 2,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: COLORS.blue,
    marginTop: SIZES.subBase,
  },

  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    ...FONTS.body2,
    fontWeight: '700',
  },
  title: {
    ...FONTS.h1,
    fontWeight: 'bold',
    marginBottom: SIZES.subBase / 2,
  },
  divider: {
    width: '110%',
    height: 0.5,
    backgroundColor: COLORS.darkGray,
    alignSelf: 'center',
    marginBottom: SIZES.subBase / 2,
  },
  bodyText: {
    color: COLORS.black,
    marginVertical: SIZES.subBase / 2,
    textAlign: 'center',
    ...FONTS.body2,
  },

  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  radioButton: {
    backgroundColor: COLORS.gray,
    height: SIZES.default,
    width: SIZES.default,
    borderRadius: SIZES.default / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    backgroundColor: COLORS.blue,
    height: SIZES.base,
    width: SIZES.base,
    borderRadius: SIZES.base / 2,
  },
});
