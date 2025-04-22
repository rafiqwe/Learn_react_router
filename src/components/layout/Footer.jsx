export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2023 My Website. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:text-gray-400">Terms of Service</a></li>
          <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
}