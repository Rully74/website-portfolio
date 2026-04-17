import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Julian Ruiz. All rights reserved.</p>
    </footer>
  );
}

export { Footer };
