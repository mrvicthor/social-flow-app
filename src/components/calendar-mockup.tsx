const CalendarMockUp = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className="grid grid-cols-7 gap-2 text-xs">
      {days.map((day) => (
        <div key={day}>{day}</div>
      ))}
      {Array.from({ length: 21 }, (_, i) => (
        <div key={i} className="aspect-square border rounded-lg p-1 relative">
          <span className="text-xs text-gray-400">{i + 1}</span>
          {(i + 1) % 3 === 0 && (
            <div className="absolute bottom-1 left-1 right-1">
              <div className="h-1 bg-blue-500 rounded-full" />
            </div>
          )}
          {(i + 1) % 5 === 0 && (
            <div className="absolute bottom-1 left-1 right-1">
              <div className="h-1 bg-purple-500 rounded-full" />
            </div>
          )}
          {(i + 1) % 8 === 0 && (
            <div className="absolute bottom-1 left-1 right-1">
              <div className="h-1 bg-green-500 rounded-full" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CalendarMockUp;
