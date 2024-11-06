import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Usuario {
  email: string;
}

// Simulando uma "base de dados" com usuários cadastrados
const usuariosCadastrados: Usuario[] = [
  { email: 'joao@example.com' },
  { email: 'maria@example.com' },
];

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [erro, setErro] = useState<string>(''); // Mantém o estado de erro
  const navigate = useNavigate();

  const handleAcessar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const usuarioExiste = usuariosCadastrados.some(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (usuarioExiste) {
      setErro(''); // Reseta o erro se o usuário for encontrado
      navigate('/password'); // Navega para a página de senha
    } else {
      setErro('E-mail não encontrado. Por favor, verifique e tente novamente.'); // Define a mensagem de erro
    }
  };

  useEffect(() => {
    // Define os estilos para o body e html
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';

    return () => {
      // Restaura os estilos ao desmontar o componente
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.height = '';
      document.body.style.overflow = '';
    };
  }, []);

  // Definindo estilos como um objeto de tipo CSSProperties
  const styles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#0d3b4c',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const headingStyle: React.CSSProperties = {
    marginBottom: '20px',
    fontSize: '1.5rem',
    color: '#fff',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    width: '100%',
    textAlign: 'left',
    maxWidth: '400px',
  };

  const formStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '400px',
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
    padding: '15px', // Aumenta o tamanho do input
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '20px',
    boxSizing: 'border-box',
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '15px', // Aumenta o tamanho do botão
    fontSize: '1rem',
    backgroundColor: '#007bff',
    border: 'none',
    color: '#fff',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const errorStyle: React.CSSProperties = {
    color: 'red',
    marginTop: '10px',
    fontSize: '0.875rem',
  };

  const footerStyle: React.CSSProperties = {
    marginTop: 'auto',
    textAlign: 'center',
    padding: '20px 0',
    width: '100%',
    backgroundColor: 'transparent',
    color: '#fff',
    position: 'absolute',
    bottom: 0,
  };

  return (
    <div style={styles}>
      <h2 style={headingStyle}>Email do Usuário</h2>
      <form onSubmit={handleAcessar} style={formStyle}>
        <div style={inputGroupStyle}>
          <input
            autoFocus
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErro(''); // Reseta o erro ao alterar o valor do input
            }}
            placeholder="Email"
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Acessar
        </button>
      </form>

      {erro && <p style={errorStyle}>{erro}</p>} {/* Exibe mensagem de erro, se houver */}
      
      <footer style={footerStyle}>
        <p>IPE SISTEMAS</p>
      </footer>
    </div>
  );
};

export default Login;
