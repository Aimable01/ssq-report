export default function Page() {
  return (
    <div className="mx-20 my-10">
      {/* the header with data && logo */}
      <div className="flex justify-between">
        {/* the date && heading */}
        <div className="flex gap-3 items-center justify-center">
          <div>
            <h1>May 10th</h1>
          </div>
          <div>
            <h1 className="font-bold text-2xl underline">ATTENDANCE LIST</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
