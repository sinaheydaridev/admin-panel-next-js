import moment from "moment-jalaali";

moment.locale("fa");
moment.loadPersian({ dialect: "persian-modern" });

export const dateObject = {
  getMonthLabels() {
    const items = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return items;
  },
  getMonthName() {
    const m = moment().jMonth();
    switch (m) {
      case 0:
        return "فروردین";
      case 1:
        return "اردیبهشت";
      case 2:
        return "خرداد";
      case 3:
        return "تیر";
      case 4:
        return "مرداد";
      case 5:
        return "شهریور";
      case 6:
        return "مهر";
      case 7:
        return "آبان";
      case 8:
        return "آذر";
      case 9:
        return "دی";
      case 10:
        return "بهمن";
      case 11:
        return "اسفند";
    }
  },
  localFormat() {
    const m = moment().format("L");
    return m;
  },
  timeAge(date: any) {
    const mDate = moment(date).startOf("hour").fromNow();
    return mDate;
  },
  llllFormat(date: any) {
    const mDate = moment(date).format("LLLL");
    return mDate;
  },
  getCurrentDayNumber(date: any) {
    const mDate = moment(date).format("jD");
    return mDate;
  },
  getCurrentDayLabel(date: any) {
    const mDate = moment(date).format("dddd");
    return mDate;
  },
};
