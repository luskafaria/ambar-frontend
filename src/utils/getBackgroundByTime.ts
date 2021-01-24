export default function getBackgroundDayTime(hour: number): string {
  if (hour === 4 || hour === 5) return "url('images/01.png')";

  if (hour === 6 || hour === 7) return "url('images/02.png')";

  if (hour === 8 || hour === 9) return "url('images/03.png')";

  if (hour === 10 || hour === 11) return "url('images/04.png')";

  if (hour === 12) return "url('images/05.png')";

  if (hour === 13 || hour === 14) return "url('images/06.png')";

  if (hour === 15 || hour === 16) return "url('images/07.png')";

  if (hour === 17 || hour === 18) return "url('images/08.png')";

  if (hour === 19 || hour === 20) return "url('images/09.png')";

  if (hour === 21 || hour === 22) return "url('images/10.png')";

  if (hour === 23 || hour === 0) return "url('images/11.png')";

  if (hour === 1 || hour === 2 || hour === 3) return "url('images/12.png')";

  return "url('images/05.png')";
}
