import React from 'react';

const Form = () => {
  return (
<>

    <div className="form">

    <h4>Request a tour</h4>
      <form>
        <div className="form-control">
          <input type="text" placeholder="" />
          <label htmlFor="">Fullname</label>
        </div>

        <div className="form-control">
          <input type="text" placeholder=""  />
          <label htmlFor="">Phone</label>
        </div>

        <div className="form-control">
          <input type="text" placeholder=""  />
          <label htmlFor="">Email</label>
        </div>

        <div className="form-control">
          <textarea placeholder="Enter message"></textarea>
        </div>

        <button> Request a tour </button>
      </form>
    </div>
    </>
  );
};

export default Form;
