import React from "react";

const Contactform = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="contact__form grid app-form"
      id="popupResult"
    >

      <div className="contact__inputs grid">
        <div className="contact__content">
          <input
            className="form-control"
            type="text"
            id="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="contact__content">
          <input
            className="form-control"
            type="text"
            id="name"
            placeholder="Your Email"
            required
          />
        </div>
      </div>
      <div className="contact__content">
        <input
          className="contact__input"
          type="text"
          id="name"
          placeholder="Subject"
          required
        />
      </div>
      <div className="contact__content">
        <textarea
          name="text"
          rows="7"
          className="contact__input"
          placeholder="Write Message"
          required
        ></textarea>
      </div>

      <button className="button button--flex contact__button" data-submit>
        {formStatus}
        <i className="fas fa-arrow-right  button__icon"></i>
      </button>
    </form>
  );
};

export default Contactform;
