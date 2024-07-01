function Navbar() {
  return (
    <>
      <main className="shadow-md">
        <nav className="flex items-center justify-between max-w-7xl mx-auto py-2">
          <div className="w-20 h-20 flex items-center justify-center bg-purple-50 rounded-full text-lg font-semibold">
            Todo List
          </div>
          <div>
            <ul className="flex items-center space-x-5">
              <li className="bg-blue-500 px-4 py-1.5 rounded-lg hover:bg-blue-600">
                <a
                  href="#"
                  className="text-lg font-sans font-semibold text-white"
                >
                  Login
                </a>
              </li>
              <li className="bg-red-500 px-4 py-1.5 rounded-lg hover:bg-red-600">
                <a
                  href="#"
                  className="text-lg font-sans font-semibold text-white"
                >
                  Logout
                </a>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="size-8"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
                  clip-rule="evenodd"
                />
              </svg>
            </ul>
          </div>
        </nav>
      </main>
    </>
  );
}
export default Navbar;
