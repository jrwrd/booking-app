import { useState } from "react"

function Staff() {
    const [customerSearch, setCustomerSearch] = useState('');

    function handleSearch(event) {
        setCustomerSearch(event.target.value);
    }

    return (
        <main className="w-3/5 mx-auto text-xl">

            <div className="mt-20 mb-10">
                <h1 className="text-4xl">Customer List</h1>
                <h2 className="text-gray-600">Make changes to your customer's details</h2>
            </div>

            <div className="flex flex-nowrap flex-row gap-6 ">
                <div className=""><input value={customerSearch} size="26" placeholder="Search by name, email, phone" onChange={handleSearch}/></div>
                <div className="">Filter</div>
                <div className="">Sort</div>
            </div>

            <CustomerList searchQuery={customerSearch}/>

        </main>
      )
}
export default Staff