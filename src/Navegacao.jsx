import PropTypes from "prop-types";

export function Navegacao({ setPaginaSelecionada }) {
  return (
    <div className="navegacao">
      <input
        type="radio"
        name="opcao-pagina"
        id="pagina-0"
        defaultChecked
        onClick={() => setPaginaSelecionada(0)}
        aria-labelledby="label-pagina-0"
      />
      <label htmlFor="pagina-0" id="label-pagina-0">
        Pratos Principais
      </label>
      <input
        type="radio"
        name="opcao-pagina"
        id="pagina-1"
        onClick={() => setPaginaSelecionada(1)}
        aria-labelledby="label-pagina-1"
      />
      <label htmlFor="pagina-1" id="label-pagina-1">
        Sobremesas
      </label>
      <input
        type="radio"
        name="opcao-pagina"
        id="pagina-2"
        onClick={() => setPaginaSelecionada(2)}
        aria-labelledby="label-pagina-2"
      />
      <label htmlFor="pagina-2" id="label-pagina-2">
        Bebidas
      </label>
    </div>
  );
}

Navegacao.propTypes = {
  setPaginaSelecionada: PropTypes.func.isRequired,
};
