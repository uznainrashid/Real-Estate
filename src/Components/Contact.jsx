import React from "react";
import { toast } from "react-toastify";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "64ac39ee-7217-4639-80e4-6ddfab49292c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <div
      className="container mx-auto py-4 pt-20 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 font-light decoration-1 under">
          {" "}
          With Us
        </span>
        💕
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
        Ready to Make a Move? Let’s Build Your Future Togethe
      </p>
      <form
        onSubmit={onSubmit}
        className="max-w-2xl text-gray-500 mx-auto pt-8"
      >
        <div className="flex flex-wrap px-3">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Name"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="Email"
              placeholder="Enter Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left px-3">
          Message
          <textarea
            className="w-full border border-gray-400 py-3 px-4 mt-2 rounded h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
          <button className="bg-blue-500 text-white px-10 py-2 rounded mb-10">
            {result ? result : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
