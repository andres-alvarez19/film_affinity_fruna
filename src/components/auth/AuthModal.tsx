import React, { useState } from "react";
import axios from "axios";

interface AuthModalProps {
    onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleBackgroundClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setRegisterData(prevState => ({ ...prevState, [id]: value }));
    };

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setLoginData(prevState => ({ ...prevState, [id]: value }));
    };

    const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/user/register", registerData);
            console.log("Registro exitoso:", response.data);
            alert("Cuenta creada con éxito. ¡Ahora puedes iniciar sesión!");
            setIsLogin(true);
        } catch (error) {
            console.error("Error en el registro:", error);
            alert("Error en el registro. Por favor intenta nuevamente.");
        }
    };

    // Inicio de sesión
    const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/user/login", loginData);
            const { token } = response.data;

            // Guardar el token JWT en localStorage
            localStorage.setItem("token", token);
            console.log("Login exitoso. Token JWT:", token);

            alert("Inicio de sesión exitoso");
            onClose(); // Cerrar modal después de login exitoso
        } catch (error) {
            console.error("Error en el inicio de sesión:", error);
            alert("Error en inicio de sesión. Verifica tus credenciales.");
        }
    };

    return (
        <button
            type="button"
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleBackgroundClick}
        >
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative overflow-hidden">
                <div className="flex justify-around mb-6">
                    <button
                        onClick={() => setIsLogin(true)}
                        className={`w-1/2 pb-2 font-medium transition ${
                            isLogin ? "text-gray-800 border-b-2 border-yellow-400" : "text-gray-500"
                        }`}
                    >
                        Iniciar Sesión
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={`w-1/2 pb-2 font-medium transition ${
                            !isLogin ? "text-gray-800 border-b-2 border-yellow-400" : "text-gray-500"
                        }`}
                    >
                        Registrarse
                    </button>
                </div>

                <div
                    className="relative transition-transform duration-500"
                    style={{
                        transform: isLogin ? "translateX(0%)" : "translateX(-115%)",
                        display: "flex",
                        flexDirection: "row"
                    }}
                >
                    {/* Formulario de Inicio de Sesión */}
                    <div className="w-full flex-shrink-0 p-2 mr-12">
                        <form onSubmit={handleLoginSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={loginData.email}
                                    onChange={handleLoginChange}
                                    placeholder="nombre@correo.com"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-gray-100 focus:outline-none"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={loginData.password}
                                    onChange={handleLoginChange}
                                    placeholder="••••••••"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-gray-100 focus:outline-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-yellow-400 text-white font-medium py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
                            >
                                Iniciar Sesión
                            </button>
                        </form>
                    </div>

                    {/* Formulario de Registro */}
                    <div className="w-full flex-shrink-0 p-2">
                        <form onSubmit={handleRegisterSubmit}>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                    Nombre Completo
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    value={registerData.username}
                                    onChange={handleRegisterChange}
                                    placeholder="Tu nombre"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-gray-100 focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={registerData.email}
                                    onChange={handleRegisterChange}
                                    placeholder="nombre@correo.com"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-gray-100 focus:outline-none"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={registerData.password}
                                    onChange={handleRegisterChange}
                                    placeholder="••••••••"
                                    className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-gray-100 focus:outline-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-yellow-400 text-white font-medium py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
                            >
                                Crear Cuenta
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </button>
    );
};

export default AuthModal;
