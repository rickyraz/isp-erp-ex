function Header() {
  return (
    <header className="text-sm py-8 bg-[#161D27]">
      <div className="flex justify-between max-w-5xl mx-auto items-center">
        <a href="/">
          <img
            src="/logo/logo-light.png"
            alt="logo"
            className="max-w-[185px]"
          />
        </a>

        <ul className="flex space-x-8 text-white">
          <li>Feature</li>
          <a href="/pricing">
            <li>Pricing</li>
          </a>
          <a href="/order">
            <li>Order</li>
          </a>
          <li>How to order</li>
          <li>Guide</li>
        </ul>
        <div className="flex space-x-6">
          {/* <button className="text-[#EDC997]">Register</button> */}
          <button className="text-center px-6 py-2 border transition-all duration-300  border-[#EDC997] hover:bg-white hover:text-[#1F2732] rounded-md text-white font-medium">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
