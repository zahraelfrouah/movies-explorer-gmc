import { Search, Star } from "lucide-react";
import { Input } from "../components/ui/input";
import { Slider } from "../components/ui/slider";
import { Label } from "../components/ui/label";
export function Filter({ title, setTitle, rating, setRating }) {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-card/50 backdrop-blur-md p-6 shadow-xl mb-8">
      <div className="flex flex-col md:flex-row gap-8 items-end">
        
        {/* Title Search */}
        <div className="w-full md:flex-1 space-y-3">
          <Label
            htmlFor="search"
            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Search Movies
          </Label>

          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input
              id="search"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Avengers, Inception..."
              className="pl-10 h-12 bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 rounded-xl"
            />
          </div>
        </div>

        {/* Rating Filter */}
        <div className="w-full md:w-72 space-y-4">
          <div className="flex justify-between items-center">
            <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Minimum Rating
            </Label>

            <span className="flex items-center gap-1 text-sm font-bold text-accent">
              {rating > 0 ? (
                <>
                  {rating}+ <Star className="h-3 w-3 fill-accent" />
                </>
              ) : (
                <span className="text-muted-foreground text-xs font-medium">
                  All
                </span>
              )}
            </span>
          </div>

          <Slider
            value={[rating]}
            min={0}
            max={5}
            step={1}
            onValueChange={(vals) => setRating(vals[0])}
            className="py-2"
          />
        </div>
      </div>
    </div>
  );
}
