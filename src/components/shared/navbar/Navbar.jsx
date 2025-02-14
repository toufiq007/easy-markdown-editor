import { Link } from "react-router-dom";
import Button from "../button/Button";
import { Sun } from "lucide-react";
const Navbar = () => {
  return (
    <div>
      <div className="bg-[var(--navbarColor)]">
        <div className="flex justify-between items-center h-[68px] mx-auto container">
          <h2 className="font-bold text-white text-2xl">
            <Link to="/">easyMarkDown</Link>
          </h2>
          <div className="flex gap-4 items-center">
            <Button>Preview</Button>
            <Button>Download</Button>
            <Button>
              <Sun className="text-white rounded-full cursor-pointer" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
