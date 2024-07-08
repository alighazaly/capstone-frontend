import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { parse, isWithinInterval, isBefore } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import toast from 'react-hot-toast'; // Import react-hot-toast

const Calendar = ({ onDatesSelect, ReservedDates }) => {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(), // Initial start date
    endDate: new Date(), // Initial end date
    key: 'selection',
  });

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Parse the reserved dates array of strings into an array of date ranges
  const parsedReservedDates = ReservedDates.map(dateString => {
    const [startStr, endStr] = dateString.split(' - ');
    return {
      start: parse(startStr, 'dd/MM/yyyy', new Date()),
      end: parse(endStr, 'dd/MM/yyyy', new Date())
    };
  });

  const handleSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;

    // Check if any selected date range overlaps with reserved date ranges
    const isReserved = parsedReservedDates.some(reservedDate =>
      isWithinInterval(reservedDate.start, { start: startDate, end: endDate }) ||
      isWithinInterval(reservedDate.end, { start: startDate, end: endDate }) ||
      isWithinInterval(startDate, { start: reservedDate.start, end: reservedDate.end }) ||
      isWithinInterval(endDate, { start: reservedDate.start, end: reservedDate.end })
    );

    if (isReserved) {
      toast.error('The apartment is reserved for the specified dates. Please select an alternative date.');
    } else {
      const startDateString = startDate.toLocaleDateString('en-GB');
      const endDateString = endDate.toLocaleDateString('en-GB');
      const selectedDatesString = `${startDateString} - ${endDateString}`;
      setSelectionRange(ranges.selection);
      // Call the onDatesSelect callback with the selected dates string
      onDatesSelect(selectedDatesString);
    }
  };

  const isDateDisabled = (date) => {
    // Disable dates before tomorrow and reserved dates
    return isBefore(date, tomorrow) || parsedReservedDates.some(reservedDate =>
      isWithinInterval(date, { start: reservedDate.start, end: reservedDate.end })
    );
  };


  return (
    <div>
      <DateRange
        ranges={[selectionRange]}
        onChange={handleSelect}
        editableDateInputs={true}
        dragSelectionEnabled={false}
        scroll={{ enabled: false }}
        showSelectionPreview={false}
        moveRangeOnFirstSelection={false}
        minDate={tomorrow}
        dayContentRenderer={(date) => (
          <div
            className={
              isDateDisabled(date)
                ? 'text-gray-500 line-through cursor-not-allowed'
                : 'text-black cursor-pointer'
            }
            onClick={() => isDateDisabled(date)}
          >
            {date.getDate()}
          </div>
        )}
      />
    </div>
  );
};

export default Calendar;
