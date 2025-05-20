"use client";
import Image from "next/image";
import AttendanceTable from "@/components/AttendanceTable";
import CalendarCard from "@/components/CalendarCard";
import { data } from "@/data/data";

export default function Page() {
  const reportDate = "2024-05-10"; // this date will also come as a prop
  return (
    <div className="print:mx-0 print:my-0 mx-20 my-10">
      {/* print styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 1cm;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>

      {/* the header with data && logo */}
      <div className="flex justify-between">
        {/* the date && heading */}
        <div className="flex gap-3 items-center justify-center">
          <CalendarCard date={reportDate} />
          <div>
            <h1 className="font-bold text-2xl underline">ATTENDANCE LIST</h1>
          </div>
        </div>
        {/* the SDA logo */}
        <div>
          <Image src="/sda_logo.svg" alt="logo" width={200} height={200} />
        </div>
      </div>

      <div className="print:break-inside-avoid my-10">
        <AttendanceTable data={data[0]} />
      </div>
    </div>
  );
}
