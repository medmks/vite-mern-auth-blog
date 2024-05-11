const Mouths = [
  "يناير",
  "فبراير ",
  "مارس",
  "أبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
];
<<<<<<< HEAD
export const days = [
  "الاثنين",
  " الثلاثاء",
  "الأربعاء",
  " الخميس",
  "جمعة",
  "السبت",
  "الأحد",
];
=======
// const days = ["الاثنين"," الثلاثاء","الأربعاء"," الخميس","جمعة","السبت","الأحد"]
>>>>>>> d3ca1500c89221ab9b27f706d55d41b0759c9fce
export const Getthedate = (timestamp: string) => {
  const date = new Date(timestamp);
  return `${date.getDate()} ${Mouths[date.getMonth()]}`;
};
