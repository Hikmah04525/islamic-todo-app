function Footer() {
  return (
    <footer className="bg-green-800 text-white text-center py-4 mt-8">
      <p className="text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Islamic To-Do App. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
