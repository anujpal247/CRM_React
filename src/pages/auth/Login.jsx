function Login() {
  return (
    <div className="flex justify-center h-[90vh] items-center">
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl text-slate-100 font-bold">
            Login
          </h2>
          <input
            type="text"
            placeholder="Username..."
            className="input input-primary text-white"
          />
          <input
            type="password"
            placeholder="password"
            className="input input-primary text-white"
          />
          <div className="card-actions justify-center">
            <button className="btn btn-warning">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
