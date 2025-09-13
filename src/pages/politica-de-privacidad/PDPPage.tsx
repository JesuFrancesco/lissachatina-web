import { Link } from "react-router-dom";

const PDPPage = () => {
    return (
        <main className="flex flex-col text-justify gap-4 p-8">
            <header className="text-center">
                <h1>Política de Privacidad</h1>
                <p><strong>Última actualización:</strong> 12 de septiembre del 2025</p>
            </header>

            <hr />

            <section>
                <h2 className="font-bold">1. Datos Compartidos</h2>
                <p>Esta aplicación no comparte datos con terceros. El desarrollador indica que no se comparten datos de usuario con otras empresas u organizaciones.</p>

            </section>

            <section>
                <h2 className="font-bold">2. Datos Recogidos</h2>
                <p>A continuación, se detallan los datos que esta aplicación puede recoger durante su uso:</p> <br />

                <h3 className="font-bold">Información personal:</h3>
                <ul className="list-disc pl-6">
                    <li>Nombre</li>
                    <li>Dirección de correo electrónico</li>
                </ul>


                <h3 className="font-bold">Ubicación:</h3>
                <ul className="list-disc pl-6">
                    <li>Ubicación aproximada</li>
                    <li>Ubicación precisa</li>
                </ul>


                <h3 className="font-bold">Fotos y Vídeos:</h3>
                <ul className="list-disc pl-6">
                    <li>Fotos</li>
                </ul>

            </section>

            <section>
                <h2 className="font-bold">3. Eliminación de Datos</h2>
                <p>Si deseas eliminar tu cuenta y los datos asociados a ella, puedes enviar una solicitud para eliminar tu cuenta a través del siguiente enlace:</p>
                <p><Link className="text-red-800" to="/eliminar-cuenta" replace target="_blank" rel="noopener noreferrer">Eliminar cuenta</Link></p>

            </section>

            <section>
                <h2 className="font-bold">4. Prácticas de Seguridad</h2>
                <ul className="list-disc pl-6">
                    <li><strong>Cifrado de Datos:</strong> Todos los datos se encuentran cifrados durante el tránsito para proteger tu privacidad.</li>
                    <li><strong>Conexión segura:</strong> Tus datos se transfieren a través de una conexión segura, lo que garantiza la seguridad en la transmisión de información.</li>
                </ul>

            </section>

            <section>
                <h2 className="font-bold">5. Cambios en la Política de Privacidad</h2>
                <p>Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. En caso de que se realicen cambios sustanciales, te informaremos a través de la aplicación o mediante otros medios apropiados. Te recomendamos revisar periódicamente esta política para estar informado sobre cómo protegemos tu información.</p>

            </section>

            <section>
                <h2 className="font-bold">6. Contacto</h2>
                <p>Si tienes alguna pregunta o inquietud sobre esta Política de Privacidad, puedes contactarnos a través de nuestro sitio web:</p>
                <p><a href="https://jesufrancesco.github.io/lissachatina-web/" target="_blank" rel="noopener noreferrer">https://jesufrancesco.github.io/lissachatina-web/</a></p>

            </section>

            <footer>
                <p>&copy; 2025 LissachatinaDev. Todos los derechos reservados.</p>
            </footer>
        </main>
    );
};

export default PDPPage;
