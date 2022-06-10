/**
 * Calendar Picker Component
 *
 * Copyright 2016 Yahoo Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */
import { Dimensions, PixelRatio } from 'react-native';

const DEFAULT_SELECTED_BACKGROUND_COLOR = '#5ce600';
const DEFAULT_SELECTED_TEXT_COLOR = '#000000';
const DEFAULT_TODAY_BACKGROUND_COLOR = '#CCCCCC';


export const DesignWidth = 375;
export const DesignHeight = 812;
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const scale = SCREEN_WIDTH / 375;

export function normalize(size) {
  return PixelRatio.roundToNearestPixel(size * scale);
}

export const vw = (width) => {
  let percent = (width / DesignWidth) * 100;
  const elemWidth = parseFloat(percent + "%");
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};

export const vh = (height) => {
  let percent = (height / DesignHeight) * 100;
  const elemHeight = parseFloat(percent + "%");
  return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};


function getBorderRadiusByShape(scaler, dayShape) {
  if (dayShape === 'square') {
    return 0;
  } else {
    return 50;
  }
}

export function makeStyles(params) {
  const {
    containerWidth,
    containerHeight,
    scaleFactor,
    selectedDayColor,
    selectedDayTextColor,
    todayBackgroundColor,
    dayShape
  } = params;
  const scaler = Math.min(containerWidth, containerHeight) / scaleFactor;
  const SELECTED_BG_COLOR = selectedDayColor ? selectedDayColor : DEFAULT_SELECTED_BACKGROUND_COLOR;
  const SELECTED_TEXT_COLOR = selectedDayTextColor ? selectedDayTextColor : DEFAULT_SELECTED_TEXT_COLOR;
  const TODAY_BG_COLOR = todayBackgroundColor ? todayBackgroundColor : DEFAULT_TODAY_BACKGROUND_COLOR;

  return {
    containerWidth,
    containerHeight,

    calendar: {
      height: 320*scaler,
      marginTop: 10*scaler
    },

    dayButton: {
      width: 50,
      height: 50,
      borderRadius: getBorderRadiusByShape(scaler, dayShape),
      alignSelf: 'center',
      justifyContent: 'center'
    },

    dayLabel: {
      fontSize: 14*scaler,
      color: '#000',
      alignSelf: 'center'
    },

    selectedDayLabel: {
      color: SELECTED_TEXT_COLOR,
    },

    dayLabelsWrapper: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderTopWidth: 1,
      paddingTop: 24,
      paddingBottom: 10*scaler,
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.0)',
      borderColor: 'rgba(0,0,0,0.2)'
    },

    daysWrapper: {
      alignSelf: 'center',
      justifyContent: 'center'
    },

    dayLabels: {
      width: 50,
      fontSize: 12*scaler,
      color: '#000',
      textAlign: 'center'
    },

    selectedDay: {
      width: 50,
      height: 50,
      borderRadius: getBorderRadiusByShape(scaler, dayShape),
      alignSelf: 'center',
      justifyContent: 'center'
    },

    selectedDayBackground: {
      // backgroundColor: SELECTED_BG_COLOR,
    },

    selectedToday: {
      width: 50,
      height: 50,
      // backgroundColor: TODAY_BG_COLOR,
      borderRadius: getBorderRadiusByShape(scaler, dayShape),
      alignSelf: 'center',
      justifyContent: 'center'
    },

    dayWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      backgroundColor: 'rgba(0,0,0,0.0)'
    },

    startDayWrapper: {
      width: 50,
      height: 50,
      borderTopLeftRadius: 20*scaler,
      borderBottomLeftRadius: 20*scaler,
      backgroundColor: SELECTED_BG_COLOR,
      alignSelf: 'center',
      justifyContent: 'center'
    },

    endDayWrapper: {
      width: 50,
      height: 50,
      borderTopRightRadius: 20*scaler,
      borderBottomRightRadius: 20*scaler,
      backgroundColor: SELECTED_BG_COLOR,
      alignSelf: 'center',
      justifyContent: 'center'
    },

    inRangeDay: {
      width: 50,
      height: 50,
      backgroundColor: SELECTED_BG_COLOR,
      alignSelf: 'center',
      justifyContent: 'center'
    },

    headerWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
      width: containerWidth,
      padding: 5*scaler,
      paddingBottom: 3*scaler,
      marginBottom: 10*scaler,
      backgroundColor: 'rgba(0,0,0,0.0)'
    },

    monthYearHeaderWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 3*scaler,
    },

    previousContainer: {
      marginLeft: 10*scaler,
    },

    nextContainer: {
      marginRight: 10*scaler,
      alignItems: 'flex-end',
    },

    navButtonText: {
      fontSize: 14*scaler,
    },

    weeks: {
      flexDirection: 'column'
    },

    weekRow: {
      flexDirection: 'row'
    },

    disabledText: {
      fontSize: 14*scaler,
      color: '#BBBBBB',
      alignSelf: 'center',
      justifyContent: 'center'
    },

    selectedDisabledText: {
      fontSize: 14*scaler,
      color: '#DDDDDD',
      alignSelf: 'center',
      justifyContent: 'center'
    },

    monthHeaderMainText: {
      fontSize: 16*scaler,
      color: '#000',
      textAlign: 'right',
      marginHorizontal: 3*scaler,
    },

    monthButton: {
      width: 50,
      height: 50,
      borderRadius: 50,
      alignSelf: 'center',
      justifyContent: 'center'
    },

    monthsHeaderText: {
      flex: 1,
      fontSize: 16*scaler,
      color: '#000',
      textAlign: 'center'
    },

    monthContainer: {
      flex: 1,
      alignItems: 'center',
    },

    monthText: {
      fontSize: 14*scaler,
      color: '#000',
      alignSelf: 'center'
    },

    monthsWrapper: {
      alignSelf: 'center',
      justifyContent: 'center',
      width: containerWidth,
    },

    monthsRow: {
      flexDirection: 'row',
      padding: 20*scaler,
    },

    yearHeaderMainText: {
      fontSize: 16*scaler,
      color: '#000',
      marginHorizontal: 3*scaler,
    },

    yearContainer: {
      flex: 1,
      alignItems: 'center',
    },

    yearText: {
      fontSize: 14*scaler,
      color: '#000',
      alignSelf: 'center'
    },

    yearsHeaderText: {
      fontSize: 16*scaler,
      color: '#000',
      width: 180*scaler,
      textAlign: 'center'
    },

    yearsWrapper: {
      alignSelf: 'center',
      justifyContent: 'center',
      width: containerWidth,
    },

    yearsRow: {
      flexDirection: 'row',
      padding: 20*scaler,
    },

  };
}
