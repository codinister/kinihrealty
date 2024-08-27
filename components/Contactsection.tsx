const Contactsection = () => {
  return (
    <section className="contactsection">
      <div className="container">
        <div>
          <div>
            <h1>Need Support?​</h1>
            <h4>Contact us for more information</h4>
          </div>
        </div>
        <div>
          <form action="">
            <h4>Contact Us</h4>
            <div className="contbx">
              <div className="form-control">
                <input type="text" placeholder="" />
                <label htmlFor=""></label>
              </div>
              <div className="form-control">
                <input type="text" placeholder="" />
                <label htmlFor=""></label>
              </div>
            </div>
            <div className="contbx">
              <div className="form-control">
                <input type="text" placeholder="" />
                <label htmlFor=""></label>
              </div>
              <div className="form-control">
                <input type="text" placeholder="" />
                <label htmlFor=""></label>
              </div>
            </div>

            <div>
              <textarea></textarea>
            </div>
            <div className="button-bx">
              <button>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactsection;
