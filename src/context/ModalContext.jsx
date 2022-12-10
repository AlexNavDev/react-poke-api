import { createContext, useState } from "react";
import { useModal } from "../hooks/useModal";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [pokemonModal, setPokemonModal] = useState(null);

    const [isOpen, openModal, closeModal] = useModal();

    const handleModal = (pokemon) => {
        setPokemonModal(pokemon)
        openModal();
    };

    const data = { pokemonModal, handleModal, isOpen, closeModal };

    return (
        <ModalContext.Provider value={data}>{children}</ModalContext.Provider>
    )
}

export { ModalProvider };
export default ModalContext;