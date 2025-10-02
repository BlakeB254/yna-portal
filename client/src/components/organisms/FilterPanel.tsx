import { Track, OpportunityType } from '../../types/opportunity';
import { Filter } from 'lucide-react';

interface FilterPanelProps {
  selectedTracks: Track[];
  selectedTypes: OpportunityType[];
  onTrackToggle: (track: Track) => void;
  onTypeToggle: (type: OpportunityType) => void;
}

const allTracks: Track[] = [
  'General',
  'Engineering',
  'Media',
  'IT/Coding',
  'Business',
  'Athletics',
  'Communications',
  'Agriculture',
];

const allTypes: OpportunityType[] = [
  'Scholarship',
  'Competition',
  'Job',
  'Grant',
  'Internship',
  'Event',
  'Workshop',
  'Hackathon',
];

export const FilterPanel = ({
  selectedTracks,
  selectedTypes,
  onTrackToggle,
  onTypeToggle,
}: FilterPanelProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Filters</h2>
      </div>

      {/* Track Filters */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Your Track
        </h3>
        <div className="space-y-2">
          {allTracks.map((track) => (
            <label
              key={track}
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded"
            >
              <input
                type="checkbox"
                checked={selectedTracks.includes(track)}
                onChange={() => onTrackToggle(track)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">{track}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Type Filters */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Opportunity Type
        </h3>
        <div className="space-y-2">
          {allTypes.map((type) => (
            <label
              key={type}
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded"
            >
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => onTypeToggle(type)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">{type}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
