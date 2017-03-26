/**
 * Calendar Picker Component
 *
 * Copyright 2016 Yahoo Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */

export const Utils = {
  WEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  WEEKDAYS_MON: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  MONTHS: [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ],
  MAX_ROWS: 7,
  MAX_COLUMNS: 7,
  getDaysInMonth: function(month, year) {
    const lastDayOfMonth = new Date(year, month + 1, 0);
    return lastDayOfMonth.getDate();
  },
  compareDates: function(date1, date2) {
    if (parseInt(date1.getDate()) !== parseInt(date2.getDate())) {
      return false;
    }

    if (parseInt(date1.getMonth()) !== parseInt(date2.getMonth())) {
      return false;
    }

    if (parseInt(date1.getFullYear()) !== parseInt(date2.getFullYear())) {
      return false;
    }

    return true;
  }
};
