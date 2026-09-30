import React, { useState } from 'react';
import {
  Compass,
  MapPin,
  Calendar,
  Clock,
  Search,
  ArrowRight,
  ShieldCheck,
  Utensils,
  Wallet,
  Sparkles,
  Plane,
  X,
  CheckCircle2
} from 'lucide-react';
import { DestinationGuide } from '../types/travel.js';

interface DestinationsViewProps {
  destinations: DestinationGuide[];
  onSelectForPlanning: (destinationName: string) => void;
}

export const DestinationsView: React.FC<DestinationsViewProps> = ({
  destinations,
  onSelectForPlanning
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDest, setSelectedDest] = useState<DestinationGuide | null>(null);

  const filtered = destinations.filter(d =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.tagline.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
              Verified Local Knowledge Base
            </span>
            <span className="text-xs text-slate-500 font-medium">12 Curated Indian Destinations</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Explore Supported Destinations
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            TripMate uses this strictly controlled local database for RAG retrieval to prevent hallucinations regarding attractions, prices, timings, and itineraries.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search by city or state..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800"
          />
        </div>
      </div>

      {/* Grid of 12 Destinations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(dest => (
          <div
            key={dest.id}
            className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{dest.name}</h3>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                    <MapPin className="w-3 h-3 text-indigo-500" />
                    {dest.state}
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                  {dest.idealTripDuration}
                </span>
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                {dest.tagline}
              </p>

              {/* Best Season */}
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-xs mb-3 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-700 font-bold">
                  <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                  Best Season: {dest.bestSeason.months}
                </div>
                <p className="text-[11px] text-slate-500 line-clamp-1">
                  {dest.bestSeason.description}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-500">Attractions</span>
                  <span className="font-bold text-slate-800">{dest.majorAttractions.length} verified sites</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-500">Daily Budget (Mid-tier)</span>
                  <span className="font-bold text-emerald-700">{dest.dailyBudgets.medium.totalPerDay}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-500">Coordinates (Weather)</span>
                  <span className="font-mono text-[11px] text-slate-600">{dest.coordinates.lat}°N, {dest.coordinates.lon}°E</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
              <button
                onClick={() => setSelectedDest(dest)}
                className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
              >
                View Full Guide
              </button>
              <button
                onClick={() => onSelectForPlanning(dest.name)}
                className="py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl flex items-center gap-1 transition-colors"
              >
                <span>Plan Trip</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Destination Detail Modal */}
      {selectedDest && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-200 mb-4">
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  Verified Destination Guide • {selectedDest.state}
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">{selectedDest.name}</h2>
                <p className="text-xs text-slate-500 mt-0.5">{selectedDest.tagline}</p>
              </div>
              <button
                onClick={() => setSelectedDest(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content Sections */}
            <div className="space-y-6 text-sm text-slate-700">
              {/* Climate & Seasons */}
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2 text-sm">
                  <Calendar className="w-4 h-4 text-indigo-600" />
                  Seasonality & Travel Weather
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-100">
                    <span className="font-bold text-indigo-900 block mb-0.5">Peak Season</span>
                    <span className="text-slate-600">{selectedDest.bestSeason.peakSeason}</span>
                  </div>
                  <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
                    <span className="font-bold text-emerald-900 block mb-0.5">Ideal Months</span>
                    <span className="text-slate-600">{selectedDest.bestSeason.months}</span>
                  </div>
                  <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100">
                    <span className="font-bold text-amber-900 block mb-0.5">Monsoon Season</span>
                    <span className="text-slate-600">{selectedDest.bestSeason.monsoonSeason}</span>
                  </div>
                </div>
              </div>

              {/* Major Attractions */}
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2 text-sm">
                  <Compass className="w-4 h-4 text-indigo-600" />
                  Verified Major Attractions
                </h4>
                <div className="space-y-2">
                  {selectedDest.majorAttractions.map((att, ai) => (
                    <div key={ai} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-slate-900">{att.name}</span>
                        <span className="bg-slate-200 text-slate-700 px-2 py-0.2 rounded font-medium text-[10px]">
                          {att.category}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-1.5">{att.description}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-500">
                        <span>🕒 Timings: {att.timings}</span>
                        <span>🎟️ Entry Fee: {att.entryFee}</span>
                        <span>💡 Tip: {att.tips}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily Budget Breakdown */}
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2 text-sm">
                  <Wallet className="w-4 h-4 text-indigo-600" />
                  Daily Budget Tiers (Per Person)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-800 block text-xs mb-1">Backpacker / Low</span>
                    <span className="text-base font-extrabold text-indigo-600 block mb-2">{selectedDest.dailyBudgets.low.totalPerDay}</span>
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      <li>• Stay: {selectedDest.dailyBudgets.low.stay}</li>
                      <li>• Food: {selectedDest.dailyBudgets.low.food}</li>
                      <li>• Transport: {selectedDest.dailyBudgets.low.localTransport}</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-200">
                    <span className="font-bold text-emerald-900 block text-xs mb-1">Comfort / Mid-Range</span>
                    <span className="text-base font-extrabold text-emerald-700 block mb-2">{selectedDest.dailyBudgets.medium.totalPerDay}</span>
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      <li>• Stay: {selectedDest.dailyBudgets.medium.stay}</li>
                      <li>• Food: {selectedDest.dailyBudgets.medium.food}</li>
                      <li>• Transport: {selectedDest.dailyBudgets.medium.localTransport}</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-800 block text-xs mb-1">Luxury / Premium</span>
                    <span className="text-base font-extrabold text-purple-700 block mb-2">{selectedDest.dailyBudgets.high.totalPerDay}</span>
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      <li>• Stay: {selectedDest.dailyBudgets.high.stay}</li>
                      <li>• Food: {selectedDest.dailyBudgets.high.food}</li>
                      <li>• Transport: {selectedDest.dailyBudgets.high.localTransport}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sample 3-Day Itinerary */}
              <div>
                <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2 text-sm">
                  <Clock className="w-4 h-4 text-indigo-600" />
                  Verified Sample 3-Day Itinerary
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-indigo-700 block mb-1">Day 1: {selectedDest.sample3DayItinerary.day1.title}</span>
                    <p className="text-slate-600 mb-1"><strong className="text-slate-700">Morning:</strong> {selectedDest.sample3DayItinerary.day1.morning}</p>
                    <p className="text-slate-600 mb-1"><strong className="text-slate-700">Afternoon:</strong> {selectedDest.sample3DayItinerary.day1.afternoon}</p>
                    <p className="text-slate-600"><strong className="text-slate-700">Evening:</strong> {selectedDest.sample3DayItinerary.day1.evening}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-indigo-700 block mb-1">Day 2: {selectedDest.sample3DayItinerary.day2.title}</span>
                    <p className="text-slate-600 mb-1"><strong className="text-slate-700">Morning:</strong> {selectedDest.sample3DayItinerary.day2.morning}</p>
                    <p className="text-slate-600 mb-1"><strong className="text-slate-700">Afternoon:</strong> {selectedDest.sample3DayItinerary.day2.afternoon}</p>
                    <p className="text-slate-600"><strong className="text-slate-700">Evening:</strong> {selectedDest.sample3DayItinerary.day2.evening}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-indigo-700 block mb-1">Day 3: {selectedDest.sample3DayItinerary.day3.title}</span>
                    <p className="text-slate-600 mb-1"><strong className="text-slate-700">Morning:</strong> {selectedDest.sample3DayItinerary.day3.morning}</p>
                    <p className="text-slate-600 mb-1"><strong className="text-slate-700">Afternoon:</strong> {selectedDest.sample3DayItinerary.day3.afternoon}</p>
                    <p className="text-slate-600"><strong className="text-slate-700">Evening:</strong> {selectedDest.sample3DayItinerary.day3.evening}</p>
                  </div>
                </div>
              </div>

              {/* Local Food & Safety Tips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <h5 className="font-bold text-slate-800 flex items-center gap-1.5 mb-2">
                    <Utensils className="w-3.5 h-3.5 text-indigo-600" />
                    Must-Try Regional Food
                  </h5>
                  <ul className="space-y-1.5 text-slate-600">
                    {selectedDest.localFood.map((food, fi) => (
                      <li key={fi}>
                        <strong className="text-slate-800">{food.dish}</strong> ({food.type}): {food.description}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <h5 className="font-bold text-slate-800 flex items-center gap-1.5 mb-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Safety & Travel Guidelines
                  </h5>
                  <ul className="space-y-1 text-slate-600">
                    {selectedDest.safetyAndTravelTips.map((tip, ti) => (
                      <li key={ti} className="flex items-start gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end gap-3">
              <button
                onClick={() => setSelectedDest(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
              >
                Close Guide
              </button>
              <button
                onClick={() => {
                  onSelectForPlanning(selectedDest.name);
                  setSelectedDest(null);
                }}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors"
              >
                <span>Plan Trip with TripMate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
