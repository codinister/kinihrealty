import React from 'react';

const SalesForm = () => {
  return (
    <>
      <div className="form">
        <h4>Submit property details</h4>
        <form className="saleform">
          <div className="form-control">
            <input type="text" placeholder="" />
            <label htmlFor="">Fullname</label>
          </div>

          <div className="form-control">
            <input type="text" placeholder="" />
            <label htmlFor="">Email</label>
          </div>

          <div className="form-control">
            <input type="text" placeholder="" />
            <label htmlFor="">Phone</label>
          </div>

          <div className="form-control">
            <input type="text" placeholder="" />
            <label htmlFor="">Property location</label>
          </div>

          <div className="form-control">
            <input type="number" placeholder="" />
            <label htmlFor="">Numbeer of bedroom(s)</label>
          </div>

          <div className="form-control">
            <input type="number" placeholder="" />
            <label htmlFor="">Numbeer of bathroom(s)</label>
          </div>

          <div className="form-control">
            <input type="number" placeholder="" />
            <label htmlFor="">Numbeer of kitchen</label>
          </div>

          <div className="form-control">
            <select name="" id="">
              <option value="" hidden>
                Choose property type
              </option>
              <option value="Apartment"> Apartment</option>
              <option value="House"> House </option>
              <option value="Duplex"> Duplex</option>
              <option value="Townhouse / Terrace"> Townhouse / Terrace</option>
              <option value="Room & Parlour"> Room & Parlour</option>
              <option value="Mini Flat"> Mini Flat</option>
              <option value="Mansion"> Mansion</option>
              <option value="Pent House"> Pent House</option>
            </select>
          </div>

          <button> Request a tour </button>
        </form>
      </div>
    </>
  );
};

export default SalesForm;
