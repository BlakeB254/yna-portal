import { Opportunity } from '../../types/opportunity';
import { Badge } from '../atoms';
import { Calendar, MapPin, Award, ExternalLink, Bookmark } from 'lucide-react';
import { format } from 'date-fns';

interface ListViewProps {
  opportunities: Opportunity[];
  savedOpportunities: string[];
  onSave: (id: string) => void;
}

export const ListView = ({ opportunities, savedOpportunities, onSave }: ListViewProps) => {
  if (opportunities.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-500 dark:text-gray-400">
          No opportunities found. Try adjusting your filters.
        </p>
      </div>
    );
  }

  const getDeadlineDate = (opp: Opportunity) => {
    if (opp.dates.applicationClose) {
      return format(new Date(opp.dates.applicationClose), 'MMM dd, yyyy');
    }
    if (opp.dates.eventDate) {
      return format(new Date(opp.dates.eventDate), 'MMM dd, yyyy');
    }
    return 'Ongoing';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {opportunities.map((opp) => (
          <div
            key={opp.id}
            className="p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              {/* Left: Main Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-3 mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {opp.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {opp.organization}
                    </p>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="type">{opp.type}</Badge>
                  {opp.tracks.slice(0, 2).map((track) => (
                    <Badge key={track} variant="track">
                      {track}
                    </Badge>
                  ))}
                  {opp.difficulty && <Badge variant="difficulty">{opp.difficulty}</Badge>}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 line-clamp-2">
                  {opp.description}
                </p>

                {/* Metadata */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{getDeadlineDate(opp)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{opp.location}</span>
                  </div>
                  {opp.benefits.monetary && (
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold">
                      <Award className="w-4 h-4" />
                      <span>{opp.benefits.monetary}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex flex-col gap-2 items-end">
                <button
                  onClick={() => window.open(opp.applicationUrl, '_blank')}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg
                    hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Apply
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onSave(opp.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium
                    ${
                      savedOpportunities.includes(opp.id)
                        ? 'bg-gray-600 text-white'
                        : 'border-2 border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                >
                  <Bookmark className="w-4 h-4" />
                  {savedOpportunities.includes(opp.id) ? 'Saved' : 'Save'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
