import React from "react";

function CustomerProfile() {
  return (
    <div className="w-3/5 mx-auto text-xl">
      <div className="mt-20 mb-10">
        <h1 className="text-4xl">Profile</h1>
        <h2 className="text-gray-600">Manage your customer's personal profile</h2>
      </div>

      <div className="flex flex-col">
        
        <div className="avatar avatar-placeholder">
          <div className="bg-neutral text-neutral-content w-24 rounded-full">
            <span className="text-3xl">JW</span>
          </div>
        </div>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Name*</legend>
          <input
            type="text"
            className="input"
            placeholder="First Name"
            minlength="3"
            maxLength="40"
          />
          <input
            type="text"
            className="input"
            placeholder="Last Name"
            minlength="3"
            maxLength="40"
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Date of birth*</legend>
          <input type="date" className="input" required />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email*</legend>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Phone Number</legend>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <g fill="none">
                <path
                  d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
            <input
              type="tel"
              className="tabular-nums"
              placeholder="Phone"
              pattern="[+]?[0-9]*"
              minlength="6"
              maxlength="20"
              title="Invalid number"
            />
          </label>
          <p className="validator-hint">Invalid number</p>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Address</legend>
          <textarea className="textarea h-24" placeholder=""></textarea>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Client Files</legend>
          <input type="file" className="file-input" />
          <label className="label">Max size 2MB</label>
          <div className="badge badge-neutral badge-md">
            consultationform.pdf
          </div>
          <div className="badge badge-neutral badge-md">riskform.pdf</div>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Notes</legend>
          <textarea
            className="textarea h-24"
            placeholder="Client Notes"
          ></textarea>
        </fieldset>

        <button className="btn btn-active bg-primary w-38">Update Client</button>
        <button className="btn btn-active btn-secondary w-38">Delete Client</button>


      </div>
    </div>
  );
}

export default CustomerProfile;
