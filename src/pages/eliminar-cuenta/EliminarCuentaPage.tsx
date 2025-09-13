import "@/App.css"
import { useState, FormEvent } from "react";

const DeleteAccountForm = () => {
  const [oauthProvider, setOauthProvider] = useState("");
  const [email, setEmail] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isConfirmed) {
      alert("Debes confirmar que esta acción es irreversible.");
      return;
    }

    // Handle account deletion logic here
    await new Promise(r => setTimeout(r, 2000));

    alert(`Cuenta eliminada. Proveedor: ${oauthProvider}, Email: ${email}`);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Eliminar Cuenta</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="oauth-provider" className="block text-sm font-medium text-gray-700">
            ¿Qué proveedor de OAuth utilizaste?
          </label>
          <select
            id="oauth-provider"
            value={oauthProvider}
            onChange={(e) => setOauthProvider(e.target.value)}
            className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Selecciona un proveedor</option>
            <option value="google">Google</option>
            <option value="discord">Discord</option>
          </select>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo electrónico asociado a la cuenta:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="confirm-deletion"
            checked={isConfirmed}
            onChange={() => setIsConfirmed(!isConfirmed)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="confirm-deletion" className="ml-2 text-sm text-gray-700">
            Entiendo que esta acción no es reversible.
          </label>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="w-full py-2 px-4 font-semibold rounded-lg focus:outline-none"
          >
            Eliminar cuenta
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteAccountForm;
