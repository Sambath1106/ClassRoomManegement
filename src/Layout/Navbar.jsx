import Silde from "../Components/Silde";
import Header from "../Components/Header";

const Navbar = () => {
  return (
    <div className="flex">
      <Silde />

      <div className="flex-1">
        <Header />

        <main className="p-6">
          <h1 className="text-2xl font-bold">
            Dashboard Content Here
          </h1>
        </main>
      </div>
    </div>
  );
};

export default Navbar;