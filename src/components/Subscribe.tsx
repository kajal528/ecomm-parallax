
const Subscribe = () => {
  return (
    <section className=" bg-[#E5E4E2] py-10 px-5 grid grid-cols-2 max-w-[1920px] mx-auto gap-x-5">
      <div className=" mx-auto">
        <h1 className=" text-3xl font-semibold my-5">Sign up for our newsletter</h1>
        <p>
          Sign up for our newsletter and get a free shipping on your first
          order!
        </p>
      </div>
      <div className=" my-5 mr-auto ">
      <div className=" space-x-2 ">
        <input type="email" placeholder={'Email'} className=" py-[1px] px-2" />
        <button className=" px-5 py-[1px] border-2 border-black">Subscribe</button>
      </div>
      <div className=" flex items-start mt-10 space-x-2">
        <input type="checkbox" className=" my-[6px]" />
        <p className=" max-w-72">By subscribing, you consent to our use of your email address as described above. You can withdraw your consent at any time by unsubscribing.</p>
      </div>
      </div>
    </section>
  );
};

export default Subscribe;
