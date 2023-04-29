import "./App.css";
import students from "./students";
import Navbar from "./components/navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-wrap">
        {students.map((student) => (
          <div
            key={student.id}
            className="max-w-xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-black shadow-xl rounded-lg text-gray-900"
          >
            <div className="rounded-t-lg h-32 overflow-hidden">
              <img
                className="w-full"
                src="https://casablancafinancecity.com/wp-content/uploads/2021/11/orange-digital-center-1.jpeg"
                alt="cover"
              />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img
                className="object-cover object-center"
                src={student.picture}
                alt={student.name}
              />
            </div>
            <div className="text-center mt-2">
              <h2 className="font-semibold text-white capitalize">
                {student.name}
              </h2>
              <p className="text-gray-100 capitalize">
                full-stack developer & UX/UI Designer
              </p>
            </div>

            <div className="p-4 border-t mx-8 mt-2">
              <a
                target="_blank"
                rel="noreferrer"
                href={student.portfolio}
                className="w-1/2 text-center block mx-auto rounded-full bg-[#fc7b04] hover:shadow-lg font-semibold text-white px-6 py-2"
              >
                Portfolio
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
