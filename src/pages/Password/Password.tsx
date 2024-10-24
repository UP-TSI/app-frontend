import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Password: React.FC = () => {
    const [senha, setSenha] = useState<string>('');
    const [erro, setErro] = useState<string>('');
    const navigate = useNavigate();

    const handleEntrar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Simulação da validação da senha (pode substituir pela lógica real no futuro)
        const senhaCorreta = '123456'; // Exemplo de senha fixa para validação
        
        if (senha === senhaCorreta) {
            navigate('/'); // Navega para a próxima página
        } else {
            setErro('Senha incorreta. Tente novamente.'); // Mostra mensagem de erro
        }
    };

    // Aplicando estilos globais
    React.useEffect(() => {
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden'; // Para remover qualquer scrollbar indesejada
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            backgroundColor: '#0d3b4c',
            padding: '20px',
            boxSizing: 'border-box',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                paddingBottom: '20px',
            }}>
                <h2 style={{
                    marginBottom: '20px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: '#fff',
                    textAlign: 'center',
                }}>
                    Olá, <span style={{ color: 'blue' }}>IPE SISTEMAS</span> 👋
                </h2>
                <form onSubmit={handleEntrar} style={{
                    width: '100%',
                    maxWidth: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <input
                        type="password"
                        autoFocus
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Digite sua senha"
                        required
                        style={{
                            width: '100%',
                            padding: '15px',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            border: '1px solid #ddd',
                            borderRadius: '20px',
                            boxSizing: 'border-box',
                            marginBottom: '10px',
                        }}
                    />
                    <button type="submit" style={{
                        width: '100%',
                        padding: '15px',
                        fontSize: '1rem',
                        backgroundColor: '#007bff',
                        border: 'none',
                        color: '#fff',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                    }}>
                        Entrar
                    </button>
                </form>

                {erro && <p style={{ color: 'red', marginTop: '10px' }}>{erro}</p>}
            </div>
            <footer style={{
                textAlign: 'center',
                padding: '20px 0',
                width: '100%',
                color: '#fff',
                position: 'relative',
                bottom: 0,
            }}>
                <p>IPE SISTEMAS</p>
            </footer>
        </div>
    );
};

export default Password;
