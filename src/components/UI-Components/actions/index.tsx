const MailDetailButton = () => {
  return (
    <div className="flex justify-center items-center">
      <p className=" text-gray-500 font-light mr-12">
        20:05:35, 22/6/2020
      </p>
      <div className="flex items-center justify-end ">
        <button className="flex items-center justify-center duration-100 shadow-md gap-2 px-6 py-5 mx-2  rounded-md bg-gray-500 text-white hover:bg-gray-400 false ">
          Reply
        </button>
        <button className="flex items-center justify-center duration-100 shadow-md gap-2 px-6 py-5 mx-2  rounded-md border border-green-500 text-green-500 hover:bg-green-200 false ">
          Forward
        </button>
        <button className="flex items-center justify-center duration-100 shadow-md gap-2 px-6 py-5 mx-2  rounded-md border border-red-500 text-red-500 hover:bg-red-200 false ">
          Delete
        </button>
      </div>
    </div>
  );
};

export default MailDetailButton;
