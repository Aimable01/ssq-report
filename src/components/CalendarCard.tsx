import React from "react";

interface CalendarCardProps {
  date: string | Date;
}

function formatDateParts(date: string | Date) {
  const d = typeof date === "string" ? new Date(date) : date;
  const day = d.getDate();
  const month = d.toLocaleString("default", { month: "short" });
  return { day, month };
}

const CalendarCard: React.FC<CalendarCardProps> = ({ date }) => {
  const { day, month } = formatDateParts(date);
  return (
    <div
      className="relative flex flex-col items-center justify-start w-20 h-20 print:w-16 print:h-16 rounded-2xl shadow-xl print:shadow-none select-none"
      style={{
        background: "linear-gradient(to bottom, #e53935 60%, #fff 40%)",
      }}
    >
      {/* rings on the calendar */}
      <div className="absolute -top-2 left-0 w-full flex justify-between px-2">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="inline-block w-3 h-3 print:w-2 print:h-2 rounded-full border-2 border-yellow-400 bg-black shadow-md"
            style={{ zIndex: 2 }}
          />
        ))}
      </div>
      {/* red top with month */}
      <div
        className="w-full flex flex-col items-center rounded-t-2xl pt-4 pb-1 print:pt-2 print:pb-0.5"
        style={{ background: "#e53935" }}
      >
        <span className="text-white font-extrabold text-base print:text-xs tracking-widest drop-shadow-md">
          {month.toUpperCase()}
        </span>
      </div>
      {/* white lower section */}
      <div className="flex-1 w-full flex flex-col items-center justify-center rounded-b-2xl bg-white">
        <span
          className="text-black font-extrabold text-3xl print:text-xl drop-shadow-md"
          style={{ letterSpacing: "-2px" }}
        >
          {day}
        </span>
      </div>
    </div>
  );
};

export default CalendarCard;
