// src/pages/Register.tsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Register: React.FC = () => {
  const [senha, setSenha] = useState<string>('');
  const [confirmarSenha, setConfirmarSenha] = useState<string>('');
  const [erro, setErro] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();

  const { nome } = location.state || {}; // Extrai o nome do estado passado

  const handleCadastrar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      setErro('As senhas não correspondem. Tente novamente.');
    } else {
      // Aqui você pode implementar a lógica para cadastrar a conta
      console.log(`Usuário: ${nome}, Senha: ${senha}`); // Exemplo: Log do nome e senha
      navigate('/someNextPage'); // Redireciona para a próxima página após o cadastro
    }
  };

  const styles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#0d3b4c',
    padding: '10px',
    boxSizing: 'border-box',
  };

  const contentStyle: React.CSSProperties = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Alinha os itens ao centro
    justifyContent: 'center', // Centraliza verticalmente
    paddingBottom: '20px', // Espaço adicional para o footer
  };

  const inputGroupStyle: React.CSSProperties = {
    marginBottom: '15px',
    width: '100%',
    maxWidth: '400px', // Limita a largura máxima
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '15px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '20px',
    boxSizing: 'border-box',
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '15px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    border: 'none',
    color: '#fff',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '10px',
    maxWidth: '400px', // Limita a largura máxima do botão
  };

  const errorStyle: React.CSSProperties = {
    color: 'red',
    marginTop: '10px',
    fontSize: '1rem',
  };

  const footerStyle: React.CSSProperties = {
    marginTop: 'auto',
    textAlign: 'center',
    padding: '20px 0',
    width: '100%',
    backgroundColor: 'transparent',
    color: '#fff',
    position: 'relative',
    bottom: 0,
  };

  const phraseStyle: React.CSSProperties = {
    marginBottom: '5px',
    fontSize: '1.25rem', // Aumentando o tamanho da fonte
    color: '#fff',
    textAlign: 'left',
  };

  return (
    <div style={styles}>
      <div style={contentStyle}>
        <form onSubmit={handleCadastrar} style={{ width: '100%', maxWidth: '400px' }}>
          <div style={inputGroupStyle}>
            <label style={phraseStyle}>Crie sua senha</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
              required
              style={inputStyle}
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={phraseStyle}>Confirme sua senha</label>
            <input
              type="password"
              id="confirmarSenha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              placeholder="Digite sua senha"
              required
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Criar
          </button>
        </form>

        {erro && <p style={errorStyle}>{erro}</p>}
      </div>

      <footer style={footerStyle}>
        <p>IPE SISTEMAS</p>
      </footer>
    </div>
  );
};

export default Register;
