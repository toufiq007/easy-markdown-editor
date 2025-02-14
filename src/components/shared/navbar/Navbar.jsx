const Navbar = () => {
  return (
    <div>
      {/* generate navbar with logo and two buttons preview and download and also style with tailwind css make beautiful navbar  */}
      <div className="flex justify-between items-center ">
        <h2>logo</h2>
        <div className="flex gap-4">
          <button>Preview</button>
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
