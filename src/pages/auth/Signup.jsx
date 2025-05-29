function Signup() {
  return (
    <div className="flex justify-center h-[90vh] items-center">
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl text-slate-100 font-bold">
            Signup
          </h2>
          <input
            type="text"
            placeholder="Username..."
            className="input input-primary text-white"
          />
          <input
            type="email"
            placeholder="xyz@example.com"
            className="input input-primary text-white"
          />
          <select defaultValue="User Type" className="select text-white">
            <option disabled={true}>User Type</option>
            <option>Customer</option>
            <option>Engineer</option>
          </select>
          <input
            type="password"
            placeholder="password"
            className="input input-primary text-white"
          />
          <div className="card-actions justify-center">
            <button className="btn btn-warning">Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
