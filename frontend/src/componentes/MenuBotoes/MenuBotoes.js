import './MenuBotoes.css';

export default function MenuBotoes() {
  return (
    <div className = "menuBotoes">

      <button type="button" id="btnAutores" className="btn btn-secondary">Operadoras</button>
      <button type="button" id="btnEditoras" className="btn btn-success">Telefones</button>
      <button type="button" id="btnLivros" className="btn btn-danger">Chamadas</button>
      <button type="button" id="btnUsuarios" className="btn btn-warning">Arquivos</button>
      <button type="button" id="btnConfig" className="btn btn-info">Configurações</button>
      
    </div>
  );
}

