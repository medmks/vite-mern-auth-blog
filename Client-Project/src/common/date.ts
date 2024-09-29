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
export const days = [
  "الاثنين",
  " الثلاثاء",
  "الأربعاء",
  " الخميس",
  "جمعة",
  "السبت",
  "الأحد",
];

export const GetTheDate = (timestamp: string) => {
  const date = new Date(timestamp);
  return `${date.getDate()} ${Mouths[date.getMonth()]}`;
};
