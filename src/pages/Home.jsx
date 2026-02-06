import { useState } from "react";
import { MovieCard } from "../components/MovieCard";
import { Filter } from "../components/Filter";
import { AddMovie } from "../components/AddMovie";
import { Film, Clapperboard } from "lucide-react";



const initialMovies = [
  {
    id: 1,
    title: "Inception",
    description: "A mind-bending thriller by Christopher Nolan.",
    posterUrl:
      "https://img3.hulu.com/user/v3/artwork/5519f425-9b21-48fb-8e67-aef24c76604a?base_image_bucket_name=image_manager&base_image=27c60b99-1b1d-47bd-bea0-b4e562bedccc&size=458x687&format=webp",
    rating: 5,
  },
  {
    id: 2,
    title: "The Dark Knight",
    description: "Batman faces the Joker in Gotham City.",
    posterUrl: "https://storage.googleapis.com/pod_public/1300/257216.jpg",
    rating: 4,
  },
   {
    id: 3,
    title: "Interstellar",
    description: "Exploring space and time to save humanity.",
    rating: 4.7,
    posterUrl: "https://www.theatre-vanves.fr/wp-content/uploads/2025/04/interstellar-internet-1440x810.jpg",
  
  },
];

export default function Home() {
  const [movies, setMovies] = useState(initialMovies);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  function handleAddMovie(newMovie) {
    setMovies((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...newMovie,
      },
    ]);
  }

  const filteredMovies = movies.filter(
    (m) =>
      m.title.toLowerCase().includes(title.toLowerCase()) && m.rating >= rating,
  );

  return (

      

    <div className="min-h-screen bg-slate-950 text-slate-50 pb-20">
      {/* Header */}
      <header className="relative w-full border-b border-white/5 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg shadow-indigo-500/20">
              <Film className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Cinema
            </h1>
          </div>

          <div className="hidden md:block">
            <AddMovie onAddMovie={handleAddMovie} />

          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <div className="mb-10 text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Curate Your <span className="text-indigo-500">Masterpieces</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Discover and manage your personal library of films.
            </p>
          </div>

          {/* Filters */}
          <Filter
            title={title}
            setTitle={setTitle}
            rating={rating}
            setRating={setRating}
          />

          {/* Movies */}
          {filteredMovies.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-6 rounded-2xl border border-dashed border-white/10 bg-slate-800/30">
              <div className="h-20 w-20 rounded-full bg-slate-800 flex items-center justify-center">
                <Clapperboard className="h-10 w-10 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold">No movies found</h3>
              <p className="text-slate-400">
                Add a movie or adjust your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {filteredMovies.map((movie, index) => (
                <MovieCard key={movie.id} movie={movie} index={index} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
