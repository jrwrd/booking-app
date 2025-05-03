import { useState } from "react"
import CustomerList from "../components/Customers/CustomerList";

function Customers() {
    const [customerSearch, setCustomerSearch] = useState('');

    function handleSearch(event) {
        setCustomerSearch(event.target.value);
    }

    return (
        <div className="w-3/5 mx-auto text-xl">

            <div className="mt-20 mb-10">
                <h1 className="text-4xl">Customer List</h1>
                <h2 className="text-gray-600">Make changes to your customer's details</h2>
            </div>

            <div className="flex flex-nowrap flex-row gap-6 w-full justify-between">
                <input className="text-lg" value={customerSearch} size="26" placeholder="Search by name, email, phone" onChange={handleSearch}/>
                <button className="btn btn-active bg-primary w-38 h-8 ">Add Customer</button>
            </div>

            <CustomerList searchQuery={customerSearch}/>

        </div>
      )
}
export default Customers