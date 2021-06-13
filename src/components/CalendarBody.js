const CalendarBody = ({
  days,
  noOfDays,
  items,
  year,
  month,
  showNewItemModal,
  theme,
}) => {
  return (
    <div className="-mx-1 -mb-1">
      <div className="flex flex-wrap">
        {days.map((day, idx) => (
          <div key={idx} className="w-1/7 px-2 py-2">
            <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">
              {day}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap border-t border-l">
        {noOfDays.map((day, idx) => (
          <div
            key={idx}
            onClick={() => showNewItemModal(`${year}-${month + 1}-${day}`)}
            className="w-1/7 lg:h-20 sm:h-28 px-2 pt-2 border-r border-b relative cursor-pointer"
          >
            <div className="inline-flex w-6 h-6 items-center justify-center text-center leading-none rounded-full transition ease-in-out duration-100">
              {day}
            </div>
            <div className="lg:flex overflow-y-visi e mt-1 relative">
              {items
                .filter(
                  (item) =>
                    new Date(item.createdAt).toDateString() ===
                    new Date(year, month, day).toDateString()
                )
                .map((itemFiltered, idx) => (
                  <div
                    key={idx}
                    className={`w-full px-1 py-1 mr-1 rounded-lg border bg-${theme.color}-200`}
                  >
                    <p className="text-sm text-center">{itemFiltered.value}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarBody;
