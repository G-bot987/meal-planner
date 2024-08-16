import { getCurrentDay } from "@/utils/getDay";

export default function MobileDiary() {
  const currentDay = getCurrentDay();
  return (
    <div>
      MobileDiary
      {currentDay.date}
      {currentDay.day}
    </div>
  );
}
