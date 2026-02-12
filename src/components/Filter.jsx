import { Search, Star } from "lucide-react";
import { Input } from "../components/ui/input";
import { Slider } from "../components/ui/slider";
import { Label } from "../components/ui/label";

export function Filter({ title, setTitle, rating, setRating }) {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-md p-6 shadow-xl mb-8">
      <div className="flex flex-col md:flex-row gap-8 items-end">
        
        {/* Title Search */}
        <div className="w-full md:flex-1 space-y-3">
          <Label
            htmlFor="search"
            className="text-xs font-semibold uppercase tracking-wider text-gray-600"
          >
            Search Movies
          </Label>

          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <Input
              id="search"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Avengers, Inception..."
              className="pl-10 h-12 bg-white/50 border border-gray-200 focus:border-blue-400 focus:ring-blue-200 rounded-xl"
            />
          </div>
        </div>

        {/* Rating Filter */}
        <div className="w-full md:w-72 space-y-4">
          <div className="flex justify-between items-center">
            <Label className="text-xs font-semibold uppercase tracking-wider text-gray-600">
              Minimum Rating
            </Label>

            <span className="flex items-center gap-1 text-sm font-bold text-yellow-500">
              {rating > 0 ? (
                <>
                  {rating}+ <Star className="h-3 w-3 text-yellow-500" />
                </>
              ) : (
                <span className="text-gray-500 text-xs font-medium">
                  All
                </span>
              )}
            </span>
          </div>

          <Slider
            value={[rating]}
            min={0}
            max={10}
            step={1}
            onValueChange={(vals) => setRating(vals[0])}
            className="py-2"
          />
        </div>
      </div>
    </div>
  );
}
