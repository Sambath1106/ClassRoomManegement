import Silde from "../Components/Silde";
import Header from "../Components/Header";
import TeamProgress from "../Page/TeamProgress";
import CardNavbar from "../Components/CardNavbar";
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
        <TeamProgress/>
        <CardNavbar
        icon={<FaUserGraduate />}
        title="Total Students"
        subtitle="124"
        week={
          <>
            +5
            <br />
            this
            <br />
            week
          </>
        }
      />
        </main>
      </div>
    </div>
  );
};

export default Navbar;