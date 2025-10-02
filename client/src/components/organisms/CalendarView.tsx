import { useState } from 'react';
import Calendar from 'react-calendar';
import { Opportunity } from '../../types/opportunity';
import { Badge, Card } from '../atoms';
import { format, isSameDay, parseISO } from 'date-fns';
import 'react-calendar/dist/Calendar.css';
import { ExternalLink } from 'lucide-react';

interface CalendarViewProps {
  opportunities: Opportunity[];
  savedOpportunities: string[];
  onSave: (id: string) => void;
}

export const CalendarView = ({ opportunities, savedOpportunities, onSave }: CalendarViewProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // Get opportunities for a specific date
  const getOpportunitiesForDate = (date: Date): Opportunity[] => {
    return opportunities.filter((opp) => {
      const dates = [
        opp.dates.applicationClose,
        opp.dates.applicationOpen,
        opp.dates.eventDate,
        opp.dates.programStart,
        opp.dates.programEnd,
      ].filter(Boolean);

      return dates.some((d) => d && isSameDay(parseISO(d), date));
    });
  };

  // Get all dates that have opportunities
  const getDatesWithOpportunities = (): Date[] => {
    const dates: Date[] = [];
    opportunities.forEach((opp) => {
      [
        opp.dates.applicationClose,
        opp.dates.applicationOpen,
        opp.dates.eventDate,
        opp.dates.programStart,
        opp.dates.programEnd,
      ].forEach((dateStr) => {
        if (dateStr) {
          dates.push(parseISO(dateStr));
        }
      });
    });
    return dates;
  };

  const tileClassName = ({ date }: { date: Date }) => {
    const hasOpportunities = getOpportunitiesForDate(date).length > 0;
    return hasOpportunities ? 'has-opportunities' : '';
  };

  const selectedDateOpportunities = getOpportunitiesForDate(selectedDate);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Calendar */}
      <div className="lg:col-span-2">
        <Card className="p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Opportunities Calendar
          </h2>
          <div className="calendar-container">
            <Calendar
              onChange={(value) => setSelectedDate(value as Date)}
              value={selectedDate}
              tileClassName={tileClassName}
              className="w-full border-0 rounded-lg"
            />
          </div>
          <style>{`
            .calendar-container .react-calendar {
              border: none;
              font-family: inherit;
            }
            .calendar-container .react-calendar__tile {
              padding: 1rem;
              position: relative;
            }
            .calendar-container .react-calendar__tile.has-opportunities::after {
              content: '';
              position: absolute;
              bottom: 4px;
              left: 50%;
              transform: translateX(-50%);
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background-color: #3b82f6;
            }
            .calendar-container .react-calendar__tile--active.has-opportunities::after {
              background-color: white;
            }
            .calendar-container .react-calendar__tile--active {
              background-color: #3b82f6;
              color: white;
            }
            .calendar-container .react-calendar__tile:hover {
              background-color: #e5e7eb;
            }
            .calendar-container .react-calendar__tile--active:hover {
              background-color: #2563eb;
            }
            .dark .calendar-container .react-calendar {
              background-color: #1f2937;
              color: white;
            }
            .dark .calendar-container .react-calendar__tile:hover {
              background-color: #374151;
            }
            .dark .calendar-container .react-calendar__navigation button {
              color: white;
            }
            .dark .calendar-container .react-calendar__month-view__weekdays {
              color: #9ca3af;
            }
          `}</style>
        </Card>
      </div>

      {/* Selected Date Opportunities */}
      <div className="lg:col-span-1">
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            {format(selectedDate, 'MMMM d, yyyy')}
          </h3>

          {selectedDateOpportunities.length === 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No opportunities on this date.
            </p>
          ) : (
            <div className="space-y-4">
              {selectedDateOpportunities.map((opp) => (
                <div
                  key={opp.id}
                  className="border-l-4 border-blue-600 pl-3 py-2 bg-gray-50 dark:bg-gray-700 rounded"
                >
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">
                    {opp.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    {opp.organization}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    <Badge variant="type" className="text-xs px-2 py-0.5">
                      {opp.type}
                    </Badge>
                    {opp.tracks[0] && (
                      <Badge variant="track" className="text-xs px-2 py-0.5">
                        {opp.tracks[0]}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => window.open(opp.applicationUrl, '_blank')}
                      className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Apply <ExternalLink className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => onSave(opp.id)}
                      className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      {savedOpportunities.includes(opp.id) ? 'Saved' : 'Save'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};
