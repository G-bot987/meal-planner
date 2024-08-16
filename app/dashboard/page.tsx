"use client";
import { useEffect, useState } from "react";
import Diary from "../../components/diary/page";
import MobileDiary from "@/components/diary/MobileDiary";

export default function Dashboard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    // clean up function will only run in unmounting phase not executed initially
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      super mega awesome dashbord page
      {isMobile ? <MobileDiary /> : <Diary />}
    </div>
  );
}
