import { useContext } from "react";
import FavoriteContext from "../context/FavoriteContext";
import { BtnModalClose, BtnModalFavorite, CardModal, ContainerModal } from "../styles/Styles";
import { ListAbilities, ListMoves, ListStats } from "./ModalLists";
import ModalContext from "../context/ModalContext";
import PokeBall from "../assets/pokeball.png";
import PokemonUnknown from "../assets/unknown.png";
import HeartRed from "../assets/icon-heart-red.png";
import HeartBlack from "../assets/icon-heart-black.png";

const ModalCard = () => {
  const { favorites, handleAddFavorite, handleDeleteFavorite } = useContext(FavoriteContext);
  const { pokemonModal, isOpen, closeModal } = useContext(ModalContext)

  if (!pokemonModal) return;

  const heart = favorites.find((poke) => poke.name === pokemonModal.name);

  return (
    <ContainerModal className={isOpen && "is__open"}>
      <CardModal colors={pokemonModal.types[0].type.name}>
        <div className="card__header">
          <div className="card__header--name">
            <img src={PokeBall} alt="pokeball" />
            <h2>{pokemonModal.name}</h2>
          </div>
        </div>

        <div className="card__body">
          <picture>
            {pokemonModal.sprites.other.dream_world.front_default
              ? <img
                src={pokemonModal.sprites.other.dream_world.front_default}
                alt={pokemonModal.name}
              />
              :
              <img className="pokemon__unknown" src={PokemonUnknown} alt={pokemonModal.name} />
            }
          </picture>

          <div className="info">
            <h3 className="info__title">Estadísticas</h3>
            <div className="stats">
              <ul>
                {pokemonModal.stats.map((pokemon) => (
                  <ListStats key={pokemon.stat.name} pokemon={pokemon} />
                ))}
              </ul>
            </div>

            <div className="ability">
              <h4>Habilidades </h4>
              <div className="skills">
                <ul>
                  {pokemonModal.abilities.map((pokemon) => (
                    <ListAbilities key={pokemon.ability.name} pokemon={pokemon} />
                  ))}
                </ul>
              </div>
            </div>

            <div className="moves">
              <h4>Movimientos </h4>
              <div className="all__moves">
                <ul>
                  {pokemonModal.moves.map((pokemon) => (
                    <ListMoves key={pokemon.move.name} pokemon={pokemon} />
                  ))}
                </ul>

              </div>
            </div>
          </div>
        </div>

        <div className="card__footer">
          <BtnModalFavorite
            className={`btn__favorite ${heart ? "hide" : "show"}`}
            onClick={() => {
              handleAddFavorite(pokemonModal);
            }}
          >
            {!heart && <img src={HeartBlack} className="heart__black" alt="heart-black" />}
          </BtnModalFavorite>

          <BtnModalFavorite
            className={`btn__delete ${!heart ? "hide" : "show"}`}
            onClick={() => {
              handleDeleteFavorite(pokemonModal);
            }}
          >
            {heart && <img src={HeartRed} className="heart__red" alt="heart-red" />}
          </BtnModalFavorite>
          <BtnModalClose onClick={() => closeModal()}>
            Cerrar
          </BtnModalClose>
        </div>
      </CardModal>
    </ContainerModal >
  );
};

export default ModalCard;
