import React, { useContext, useState } from "react";
import FavoriteContext from "../context/FavoriteContext";
import ModalContext from "../context/ModalContext";
import { BtnFavorites, BtnShowFavorites, ContainerFavorite, ImageFav } from "../styles/Styles";

const PokemonFavorite = () => {
  const { favorites, handleDeleteFavorite } = useContext(FavoriteContext);
  const { handleModal } = useContext(ModalContext);

  const [showFavorites, setShowFavorites] = useState(false);
  const orderPokemon = favorites.sort((a, b) => a.id - b.id);

  return (
    <ContainerFavorite>
      {favorites.length > 0 && <><h2>Pokemon Favoritos {favorites.length}</h2>

        <BtnShowFavorites className="favorite__btn--toggle" onClick={() => setShowFavorites(!showFavorites)}>
          {!showFavorites ? "Mostrar Favoritos" : "Ocultar Favoritos"}
        </BtnShowFavorites></>}

      <div className="container__favorite--cards">
        {showFavorites &&
          orderPokemon.map((pokemon) => (
            <div key={pokemon.name}>
              <div className="favorite__card">
                <div className={`favorite__title type__${pokemon.types[0].type.name}`}>
                  <p>
                    {pokemon.id} {pokemon.name}
                  </p>
                </div>
                <ImageFav>
                  <picture>
                    <img src={new URL(`../assets/type/${pokemon.types[0].type.name}.png`, import.meta.url)} />
                  </picture>
                  <p>{pokemon.types[0].type.name}</p>
                </ImageFav>

                <div className={`favorite__image`}>
                  {pokemon.sprites.other.dream_world.front_default
                    ? <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                    : <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`} alt={pokemon.name} />
                  }
                </div>

                <div className="favorite__buttons">
                  <BtnFavorites onClick={() => handleDeleteFavorite(pokemon)}>Eliminar</BtnFavorites>
                  <BtnFavorites onClick={() => handleModal(pokemon)}>
                    Ver más
                  </BtnFavorites>
                </div>
              </div>
            </div>
          ))}
      </div>
    </ContainerFavorite>
  );
};

export default PokemonFavorite;
