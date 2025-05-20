"use client";

import AttendanceTable from "@/components/AttendanceTable";
import { data } from "@/data/data";

export default function Page() {
  return (
    <div className="print:mx-0 print:my-0 mx-20 my-10">
      {/* Print-specific styles */}
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
      <div className="flex justify-between mb-8 print:mb-4">
        {/* the date && heading */}
        <div className="flex gap-3 items-center justify-center">
          <div>
            <h1 className="text-lg print:text-base">May 10th</h1>
          </div>
          <div>
            <h1 className="font-bold text-2xl print:text-xl underline">
              ATTENDANCE LIST
            </h1>
          </div>
        </div>
      </div>

      <div className="print:break-inside-avoid">
        <AttendanceTable data={data[0]} />
      </div>
    </div>
  );
}
