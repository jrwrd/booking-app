import { NavLink } from "react-router";

function Navbar({ user = { isLoggedIn: "false", hasSubscription: "false" } }) {
  const isLoggedIn = user.isLoggedIn === "true";
  const hasSubscription = user.hasSubscription === "true";

  return (
    <>
      <div className="flex flex-row flex-wrap gap-x-6 gap-y-1 items-center bg-primary py-8 px-48 text-white">
        <NavLink to="/" className="flex-none text-3xl font-bold">Tempest</NavLink>
        {hasSubscription ? (
            <>
              <NavLink to="/calendar" className="text-xl">Calendar</NavLink>
              <NavLink to="/customers" className="text-xl">Customers</NavLink>
              <NavLink to="/staff" className="text-xl">Staff</NavLink>
              <NavLink to="/bookings" className="text-xl">Bookings</NavLink>
              <NavLink to="/services" className="text-xl">Services</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/pricing" className="text-xl">Pricing</NavLink>
              <NavLink to="/features" className="text-xl">Features</NavLink>
            </>
          )}
        
        <div className="text-right grow text-2xl">{isLoggedIn ? user.name : "Login"}</div>
      </div>
    </>
  );
}

export default Navbar;
