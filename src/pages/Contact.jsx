import { Form } from "react-router-dom";

export const getFormData = async({request}) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error);
    
  }
}

export const Contact = () => {
  return (
    <>
    <section className="formcarry-container">
      <Form action="/contact" method="POST" encType="multipart/form-data">
        <div className="formcarry-block">
          <label htmlFor="fc-generated-1-name">Full Name</label>
          <input
            type="text"
            name="name"
            id="fc-generated-1-name"
            placeholder="Your first and last name"
          />
        </div>

        <div className="formcarry-block">
          <label htmlFor="fc-generated-1-email">Your Email Address</label>
          <input
            type="email"
            name="email"
            id="fc-generated-1-email"
            placeholder="john@doe.com"
          />
        </div>

        <div className="formcarry-block">
          <label htmlFor="fc-generated-1-message">Your message</label>
          <textarea
            name="message"
            id="fc-generated-1-message"
            placeholder="Enter your message..."
          ></textarea>
        </div>

        <div className="formcarry-block">
          <button type="submit">Send</button>
        </div>
      </Form>
    </section>
    </>
  );
};
