import type { Track, OpportunityType } from '../../types/opportunity';
import { X } from 'lucide-react';

interface FilterBarProps {
  selectedTracks: Track[];
  selectedTypes: OpportunityType[];
  onRemoveTrack: (track: Track) => void;
  onRemoveType: (type: OpportunityType) => void;
  onClearAll: () => void;
}

export const FilterBar = ({
  selectedTracks,
  selectedTypes,
  onRemoveTrack,
  onRemoveType,
  onClearAll,
}: FilterBarProps) => {
  const hasFilters = selectedTracks.length > 0 || selectedTypes.length > 0;

  if (!hasFilters) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Active Filters:
      </span>

      {selectedTracks.map((track) => (
        <button
          key={track}
          onClick={() => onRemoveTrack(track)}
          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium
            bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200
            hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
        >
          {track}
          <X className="w-3 h-3" />
        </button>
      ))}

      {selectedTypes.map((type) => (
        <button
          key={type}
          onClick={() => onRemoveType(type)}
          className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium
            bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200
            hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
        >
          {type}
          <X className="w-3 h-3" />
        </button>
      ))}

      <button
        onClick={onClearAll}
        className="ml-2 text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
      >
        Clear All
      </button>
    </div>
  );
};
