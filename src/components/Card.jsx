import React from "react";
import { useContext } from "react";
import FavoriteContext from "../context/FavoriteContext";
import ModalContext from "../context/ModalContext";
import { PokeCard } from "../styles/Styles";
import PokemonUnknown from "../assets/unknown.png";
import HeartRed from "../assets/icon-heart-red.png";
import HeartBlack from "../assets/icon-heart-black.png";
import { useState } from "react";

const Card = ({ pokemon }) => {
  const { favorites, handleAddFavorite, handleDeleteFavorite } =
    useContext(FavoriteContext);

  const { handleModal } = useContext(ModalContext);
  if (!pokemon.stats) return;

  const [isShown, setIsShown] = useState(false);

  const heart = favorites.find((poke) => poke.name === pokemon.name);

  return (
    <PokeCard colors={pokemon.types[0].type.name} isShown={isShown}>
      <div className="card__header">
        <h3>
          No. {pokemon.id} <span>{pokemon.name}</span>
        </h3>
      </div>
      <div className="card__body">
        {isShown && (
          <img
            className="card__background"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
            alt=""
          />
        )}
        <picture
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}>
          {pokemon.sprites.other["official-artwork"].front_default ? (
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
            />
          ) : (
            <img
              className="pokemon__unknown"
              src={PokemonUnknown}
              alt={pokemon.name}
            />
          )}
        </picture>
        <div className="card__type">
          <p>Tipo: </p>
          <div className="card__type--types">
            {pokemon.types.map((type) => (
              <p key={type.type.name} className={`type__${type.type.name}`}>
                {type.type.name}
              </p>
            ))}
          </div>
        </div>
        <p>Experiencia Base: {pokemon.base_experience}</p>
        <p>Poder: {pokemon.stats[1].base_stat}</p>
      </div>

      <div className="card__footer">
        <button
          className={`btn__favorite ${heart ? "hide" : "show"}`}
          onClick={() => {
            handleAddFavorite(pokemon);
          }}>
          {!heart && (
            <img src={HeartBlack} className="heart__black" alt="heart-black" />
          )}
        </button>

        <button
          className={`btn__delete ${!heart ? "hide" : "show"}`}
          onClick={() => {
            handleDeleteFavorite(pokemon);
          }}>
          {heart && (
            <img src={HeartRed} className="heart__red" alt="heart-red" />
          )}
        </button>

        <button className="btn__modal" onClick={() => handleModal(pokemon)}>
          Ver más
        </button>
      </div>
    </PokeCard>
  );
};

export default Card;
