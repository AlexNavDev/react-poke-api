import React from "react";
import {
    FaAngleDoubleLeft,
    FaChevronLeft,
    FaChevronRight,
    FaAngleDoubleRight,
} from "react-icons/fa";
import { BtnsPagination, ContainerPagination } from "../styles/Styles";

const Pagination = ({
    pagination,
    setPagination,
    totalPokemons,
    count,
    setCount,
}) => {
    const total = Math.ceil(totalPokemons / count);
    const finalPage = pagination + total - pagination;

    return (
        <>
            <ContainerPagination>
                <h4>
                    Página {pagination + 1} de {total}
                </h4>
                <div className="container__btns">
                    {pagination !== 0 && (
                        <>
                            <BtnsPagination onClick={() => setPagination((pagination = 0))}>
                                {" "}
                                <FaAngleDoubleLeft />
                            </BtnsPagination>
                            <BtnsPagination onClick={() => setPagination(pagination - 1)}>
                                {" "}
                                <FaChevronLeft />
                            </BtnsPagination>
                        </>
                    )}

                    {pagination !== finalPage - 1 && (
                        <>
                            <BtnsPagination onClick={() => setPagination(pagination + 1)}>
                                {" "}
                                <FaChevronRight />
                            </BtnsPagination>
                            <BtnsPagination
                                onClick={() =>
                                    setPagination(pagination - pagination + finalPage - 1)
                                }
                            >
                                <FaAngleDoubleRight />
                            </BtnsPagination>
                        </>
                    )}
                </div>
                <div className="container__btns--show-more">
                    {count > 20 && (
                        <button onClick={() => setCount((count = 20))}>Restaurar</button>
                    )}

                    {count < 50 && pagination < 25 && (
                        <button onClick={() => setCount(count + 30)}>
                            Mostrar 50 pokemones
                        </button>
                    )}
                </div>
            </ContainerPagination>
        </>
    );
};

export default Pagination;
