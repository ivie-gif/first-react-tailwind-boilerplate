const Footer = () => {
    //To always update the year to each current year
  const currentYear = new Date().getFullYear();  
  return (
    <footer className="bg-gray-100 text-center p-4 mt-8">
      <p className="text-sm text-gray-600">
        © {currentYear} Boilerplate Blueprint
      </p>
    </footer>
  );
};

export default Footer;
