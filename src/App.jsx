import { useState } from "react";
import { MovieCard } from "./components/MovieCard";
import { Filter } from "./components/Filter";
import { AddMovie} from "./components/AddMovie";
import { Film, Clapperboard } from "lucide-react";

const sampleMovies = [
  {
    id: 1,
    title: "Inception",
    description: "A mind-bending thriller by Christopher Nolan.",
    posterUrl:
      "https://play-lh.googleusercontent.com/-qtECEmfe9yjg9w57QlILDP8Bgk5mT-cOUduloX_48y_NGYaP4dgZnrY0tUP7WX5x-vXEKhOzWL-QgFXyp4",
    rating: 5,
  },
  {
    id: 2,
    title: "The Dark Knight",
    description: "Batman faces the Joker in Gotham City.",
    posterUrl:
      "https://storage.googleapis.com/pod_public/1300/257216.jpg",
    rating: 4,
  },
];

export default function Home() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  const movies = sampleMovies.filter(
    (m) =>
      m.title.toLowerCase().includes(title.toLowerCase()) && m.rating >= rating
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 pb-20">
      {/* Hero / Header Section */}
      <header className="relative w-full border-b border-white/5 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg shadow-indigo-500/20">
              <Film className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold font-sans bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Cinema
            </h1>
          </div>

          <div className="hidden md:block">
            <AddMovie />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Mobile FAB */}
        <div className="md:hidden fixed bottom-6 right-6 z-50">
          <AddMovie/>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-sans">
              Curate Your <span className="text-indigo-500">Masterpieces</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Discover and manage your personal library of films. Filter by
              rating or search for your favorites.
            </p>
          </div>

          {/* Filter Component */}
          <Filter
            title={title}
            setTitle={setTitle}
            rating={rating}
            setRating={setRating}
          />

          {movies.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-6 rounded-2xl border border-dashed border-white/10 bg-slate-800/30">
              <div className="h-20 w-20 rounded-full bg-slate-800 flex items-center justify-center">
                <Clapperboard className="h-10 w-10 text-slate-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-50">No movies found</h3>
                <p className="text-slate-400 max-w-sm mx-auto">
                  {title || rating > 0
                    ? "Try adjusting your filters to see more results."
                    : "Get started by adding your first movie to the collection."}
                </p>
              </div>
              {(title || rating > 0) && (
                <button
                  onClick={() => {
                    setTitle("");
                    setRating(0);
                  }}
                  className="text-indigo-500 hover:underline font-medium"
                >
                  Clear all filters
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {movies.map((movie, index) => (
                <MovieCard key={movie.id} movie={movie} index={index} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
