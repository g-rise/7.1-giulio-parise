import { useState } from "react";
import { Link } from "react-router-dom";
import useRegister from "../../hooks/useRegister";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, signup } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(firstname, lastname, username, email, password);
    await signup({ firstname, lastname, username, email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-8 rounded-none shadow-md bg-zinc-300">
        <h1 className="text-3xl font-semibold text-center text-black">
          REGISTRE
          <span className="text-3xl text-red-800"> XAT APP</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Nom</span>
            </label>
            <input
              type="text"
              placeholder="Nom"
              className="w-full input input-bordered h-10"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Cognoms</span>
            </label>
            <input
              type="text"
              placeholder="Cognoms"
              className="w-full input input-bordered h-10"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="..."
              className="w-full input input-bordered h-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="..."
              className="w-full input input-bordered h-10 mb-5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div>
            <label className="label p-2">
              <span className="text-base label-text">Imatge de perfil</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-sm w-full max-w-xs"
            />
          </div> */}
          <div>
            <Link
              to="/login"
              className="text-sm link link-hover hover:text-blue-500"
            >
              Ja tens un compte {"d'usuari?"}
            </Link>
          </div>
          <div>
            <button
              className="btn btn-outline btn-m btn-block mt-3"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Registre"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
