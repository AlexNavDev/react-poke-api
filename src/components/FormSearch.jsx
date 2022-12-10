import React from 'react';
import { BtnFormSearch, BtnFormReset, ContainerForm } from '../styles/Styles';
import Message from './Message';
import banner from "../assets/BannerComplete.png";

const FormSearch = ({ pokemon, setPokemon, initialFormName, formInputName, setFormInputName, handleSearchPokemon, error, setError, message, setMessage }) => {

    const $input = document.querySelector(".input_name");

    const handleChangeName = (e) => {
        const { name, value } = e.target;
        setFormInputName({
            [name]: value.toLowerCase().trim(),
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formInputName.name === "") {
            setError(true);
            setMessage("Campo necesario");
            handleSearchPokemon(formInputName);
            $input.focus();
            return;
        }

        handleSearchPokemon(formInputName);
        setFormInputName(initialFormName);
        $input.focus();
    }

    const handleReset = () => {
        setError(false);
        setPokemon("");
        $input.focus();
        return
    }

    return (
        <header>
            <ContainerForm>
                <picture className="logo">
                    <img src={banner} alt="Logo Pokemon" />
                </picture>
                <form onSubmit={handleSubmit}>
                    <input className="input_name" type="text" name="name" value={formInputName.name} placeholder="Busca tu pokemon" onChange={handleChangeName} autoFocus />
                    <BtnFormSearch type="submit">Buscar</BtnFormSearch>
                    {pokemon.name && <BtnFormReset type="button" onClick={handleReset}>Limpiar Búsqueda</BtnFormReset>}

                    <Message message={message} error={error} setError={setError} />
                </form>
            </ContainerForm>
        </header>
    )
}

export default FormSearch;