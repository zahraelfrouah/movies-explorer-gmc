import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export function MovieCard({ movie, index }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        whileHover={{ y: -5 }}
        className="group relative flex flex-col overflow-hidden rounded-xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
      >
        {/* Poster Image Container */}
        <div className="relative aspect-[2/3] overflow-hidden bg-gray-200">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80";
            }}
          />

          {/* Rating Badge Overlay */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 text-sm font-bold backdrop-blur-md border border-white/20">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-white">{movie.rating}/5</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5 relative z-10 -mt-12 bg-gradient-to-t from-white via-white/80 to-transparent pt-12">
          <h3 className="font-bold text-xl text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {movie.title}
          </h3>
          <p className="text-sm text-gray-700 line-clamp-3 leading-relaxed">
            {movie.description}
          </p>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </Link>
  );
}
