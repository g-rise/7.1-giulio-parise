import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-8 rounded-none shadow-md bg-zinc-300">
        <h1 className="text-3xl font-semibold text-center text-black">
          LOGIN
          <span className="text-3xl text-red-800"> XAT APP</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="w-full input input-bordered h-10 mb-5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Link
              to="/register"
              className="text-sm link link-hover hover:text-blue-500"
            >
              Encara no tens un compte {"d'usuari?"}
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
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// CODI INICIAL
/**
 *
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-8 rounded-none shadow-md bg-zinc-300">
        <h1 className="text-3xl font-semibold text-center text-black">
          LOGIN
          <span className="text-3xl text-red-800"> XAT APP</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="..."
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="..."
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <a href="#" className="text-sm link link-hover">
              No tens un compte?
            </a>
          </div>
          <div>
            <button className="btn btn-outline btn-m btn-block mt-3">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
 */
