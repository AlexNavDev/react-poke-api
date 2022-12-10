import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';

const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("FavoritesPokemon")) ?? []);

    const handleAddFavorite = (pokemon) => {
        setFavorites([...favorites, pokemon]);
    }

    const handleDeleteFavorite = (pokemon) => {
        Swal.fire({
            title: '¿Eliminar de Favoritos? 😔',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, ¡Eliminar!',

        }).then((result) => {
            if (result.isConfirmed) {
                setFavorites(favorites.filter(({ name }) => name !== pokemon.name));
                Swal.fire({
                    title: '¡Pokemon eliminado!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                }

                )
            }
        })
    };

    const saveLocal = () => {
        localStorage.setItem("FavoritesPokemon", JSON.stringify(favorites));
    };

    useEffect(() => {
        saveLocal();
    }, [favorites]);

    const data = { favorites, handleAddFavorite, handleDeleteFavorite }

    return (
        <FavoriteContext.Provider value={data}>{children}</FavoriteContext.Provider>
    )

}

export { FavoriteProvider }
export default FavoriteContext;