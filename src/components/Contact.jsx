const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-[#0a192f] flex w-full justify-center items-center p-4 h-screen"
    >
      <form
        action="https://getform.io/f/3f245018-99aa-4871-a69f-ed16396d687a"
        method="POST"
        className="flex max-w-[600px] flex-col flex"
      >
        <div className="pb-8">
          <p className="text-4xl text-gray-300 font-bold inline border-pink-600 border-b-4">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Feel free to submit the form below or drop me an email -
            ikechukwujudendubuisi@gmail.com
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="bg-[#ccd6f6] p-2"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <textarea
          name="message"
          rows="10"
          className="bg-[#ccd6f6] p-2"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600  px-4 py-3 my-8 mx-auto flex items-center">
          Lets Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
