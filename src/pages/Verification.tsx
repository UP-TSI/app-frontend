// src/pages/Verification.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Verification: React.FC = () => {
  const [codigo, setCodigo] = useState<string>('');
  const [erro, setErro] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();

  const { nome } = location.state || {}; // Extrai o nome do estado passado

  const handleEnviar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Lógica para verificar o código enviado
    if (codigo === '1234') {
      navigate('/Register', { state: { nome } }); // Passa o nome para a página de registro
    } else {
      setErro('Código inválido. Tente novamente.');
    }
  };

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.height = '100%';
    document.body.style.overflowX = 'hidden'; // Impede rolagem horizontal
  }, []);

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
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '20px', // Espaço adicional para o footer
  };

  const textStyle: React.CSSProperties = {
    marginBottom: '20px', // Aumentei o espaçamento entre as frases
    fontSize: '1.5rem',
    color: '#fff',
    textAlign: 'left',
    maxWidth: '600px',
    width: '100%',
  };

  const brStyle: React.CSSProperties = {
    marginBottom: '15px', // Aumenta o espaçamento entre os <br />
  };

  const formStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: 'transparent',
    padding: 0,
    border: 'none',
    boxShadow: 'none',
  };

  const inputGroupStyle: React.CSSProperties = {
    marginBottom: '15px',
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
  };

  const errorStyle: React.CSSProperties = {
    color: 'red',
    marginTop: '10px',
    fontSize: '1rem',
  };

  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '20px 0',
    backgroundColor: 'transparent',
    color: '#fff',
    position: 'relative',
    bottom: 0,
    width: '100%',
  };

  return (
    <div style={styles}>
      <div style={contentStyle}>
        <h2 style={{ ...textStyle, color: 'blue', fontSize: '2rem', marginBottom: '10px' }}>
          Instruções para Criação de Senha
        </h2>
        <p style={textStyle}>
          Foi verificado que esse é o seu primeiro acesso à plataforma 👏👏. 
          <br style={brStyle} />
          Desta maneira, é necessário a criação de uma senha para os seus próximos acessos.
          <br style={brStyle} />
          Para isso, solicite ao Hanthony um código gerado automaticamente para a sua segurança!
        </p>
        <form onSubmit={handleEnviar} style={formStyle}>
          <div style={inputGroupStyle}>
            <input
              type="text"
              id="codigo"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              placeholder="Digite o código enviado"
              required
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Enviar
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

export default Verification;
