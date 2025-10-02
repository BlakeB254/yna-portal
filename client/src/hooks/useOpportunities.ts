import { useState, useMemo } from 'react';
import { Opportunity, Track, OpportunityType } from '../types/opportunity';

interface UseOpportunitiesProps {
  opportunities: Opportunity[];
}

export const useOpportunities = ({ opportunities }: UseOpportunitiesProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTracks, setSelectedTracks] = useState<Track[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<OpportunityType[]>([]);
  const [savedOpportunities, setSavedOpportunities] = useState<string[]>([]);

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((opp) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        opp.title.toLowerCase().includes(searchLower) ||
        opp.description.toLowerCase().includes(searchLower) ||
        opp.organization.toLowerCase().includes(searchLower) ||
        opp.tracks.some((track) => track.toLowerCase().includes(searchLower));

      // Track filter
      const matchesTrack =
        selectedTracks.length === 0 ||
        selectedTracks.some((track) => opp.tracks.includes(track));

      // Type filter
      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(opp.type);

      return matchesSearch && matchesTrack && matchesType;
    });
  }, [opportunities, searchQuery, selectedTracks, selectedTypes]);

  const toggleTrack = (track: Track) => {
    setSelectedTracks((prev) =>
      prev.includes(track)
        ? prev.filter((t) => t !== track)
        : [...prev, track]
    );
  };

  const toggleType = (type: OpportunityType) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const removeTrack = (track: Track) => {
    setSelectedTracks((prev) => prev.filter((t) => t !== track));
  };

  const removeType = (type: OpportunityType) => {
    setSelectedTypes((prev) => prev.filter((t) => t !== type));
  };

  const clearFilters = () => {
    setSelectedTracks([]);
    setSelectedTypes([]);
  };

  const toggleSave = (id: string) => {
    setSavedOpportunities((prev) =>
      prev.includes(id)
        ? prev.filter((oppId) => oppId !== id)
        : [...prev, id]
    );
  };

  return {
    searchQuery,
    setSearchQuery,
    selectedTracks,
    selectedTypes,
    savedOpportunities,
    filteredOpportunities,
    toggleTrack,
    toggleType,
    removeTrack,
    removeType,
    clearFilters,
    toggleSave,
  };
};
