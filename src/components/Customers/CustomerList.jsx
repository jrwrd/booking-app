import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import UserListSkeleton from "../Skeletons/UserListSkeleton";

function CustomerList({ searchQuery }) {
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [fetchingCustomers, setFetchingCustomers] = useState(false);

  useEffect(() => {
    setFetchingCustomers(true);
    fetch("/api/customers")
      .then((response) => response.json())
      .then((data) => {
        if (searchQuery) {
          const filtered = data.filter(
            (customer) =>
              customer.FirstName.toLowerCase().includes(
                searchQuery.toLowerCase()
              ) ||
              customer.LastName.toLowerCase().includes(
                searchQuery.toLowerCase()
              ) ||
              `${customer.FirstName.toLowerCase()} ${customer.LastName.toLowerCase()}`.includes(
                searchQuery.toLowerCase()
              ) ||
              customer.Email.toLowerCase().includes(
                searchQuery.toLowerCase()
              ) ||
              customer.Phone.includes(searchQuery)
          );
          setFilteredCustomers(filtered);
        } else {
          setFilteredCustomers(data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setFetchingCustomers(false);
      });
  }, [searchQuery]);

  const renderCustomers = () => {
    if (searchQuery && filteredCustomers.length === 0) {
      return <div>No matching customers found.</div>;
    }
    return filteredCustomers.map((customer) => (
      <tr key={customer.CustomerID}>
        <td>
          <div className="flex items-center gap-3">
            {/* If Avatar Exists Otherwise generate placeholder */}
            {/* <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div> */}
            <div className="avatar avatar-placeholder">
              <div className="bg-neutral text-neutral-content w-12 rounded-full">
                <span className="text-xl">{customer.FirstName.charAt(0)}{customer.LastName.charAt(0)}</span>
              </div>
            </div>
            <div className="font-bold">{`${customer.FirstName} ${customer.LastName}`}</div>
          </div>
        </td>
        <td>{customer.Email}</td>
        <td className="hidden lg:table-cell">{customer.Phone}</td>
        <td className="hidden lg:table-cell">{customer.Bookings}</td>
        <td className="hidden lg:table-cell">
          {new Date(customer.CreatedAt).toLocaleDateString()}
        </td>
        <th>
          <Link to={`/customers/${customer.CustomerID}`}>
            <button className="btn btn-ghost btn-md">Edit</button>
          </Link>
        </th>
      </tr>
    ));
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th className="hidden lg:table-cell">Phone</th>
              <th className="hidden lg:table-cell">Bookings</th>
              <th className="hidden lg:table-cell">Created Date</th>
            </tr>
          </thead>
          <tbody>{renderCustomers()}</tbody>
        </table>
      </div>
      {fetchingCustomers && <UserListSkeleton />}
    </>
  );
}

export default CustomerList;
