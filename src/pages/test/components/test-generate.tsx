import { useEffect, useState } from "react";
import { useTestStore } from "../hooks/TestStore";
import { useRecommendStore } from "../../../hooks/RecomendStore";
import { Navigate, useNavigate } from "react-router";
import type { Movie } from "../../../models/Movie";


export const TestGenerate = () => {
  const { genres, movies } = useTestStore();
  const [sending, setSending] = useState<boolean>(true); // Empezamos cargando
  const { setRecommends } = useRecommendStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setSending(true);

        const response = await fetch("https://movie-recommender-no03.onrender.com/api/recomendar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            generos: genres,
            favoritas: movies,
          }),
        });

        if (!response.ok) {
          throw new Error("Error al obtener las recomendaciones");
        }

        const data = await response.json();

        // Formateamos la data para que cumpla estrictamente con tu tipo Movie
        const formattedMovies: Movie[] = data.map((item: any) => {
          // Si el string viene separado por | lo divide, si no, crea un array de un solo elemento
          const formatToArray = (field: string | string[]) => {
            if (Array.isArray(field)) return field;
            return field ? field.split("|").map(s => s.trim()) : [];
          };

          return {
            nombre: item.nombre,
            generos: formatToArray(item.generos),
            director: formatToArray(item.director),
            puntuacion: item.puntuacion,
            link_portada: item.link_portada,
          };
        });

        // Guardamos en el estado global
        setRecommends(formattedMovies);
        
        // Redirigimos al inicio
        navigate("/");
        
      } catch (error) {
        console.error("Hubo un fallo en la petición:", error);
        // Aquí podrías setear un estado de error si lo deseas
      } finally {
        setSending(false);
      }
    };

    if(genres === null ) return
    if( movies === null) return
    // Solo disparamos la petición si hay datos para enviar (buena práctica)
    if (genres.length > 0 || movies.length > 0) {
      fetchRecommendations();
    } else {
      setSending(false);
    }
  }, [genres, movies, setRecommends, navigate]);

  // Renderizado condicional según el estado de carga
  if(!genres || !movies) {
    return <Navigate to="/test"/>
  }

  if (sending) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-violet-400 text-2xl font-semibold animate-pulse">
          Generando la recomendación personalizada...
        </p>
      </div>
    );
  }

  return null; // O lo que desees renderizar si no está cargando antes de la redirección
};