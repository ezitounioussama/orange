import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div>
      <header aria-label="Page Header" className="bg-black">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-6 lg:px-8">
          <div className="sm:flex  sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <img src={logo} alt="OrangeLogo" />
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <a
                href="https://www.orange.ma/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium"> View Website </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
