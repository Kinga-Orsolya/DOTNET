
const Button = ({ children, onClick, className }) => {
  import("./index.css"); // Ebből a fájlból fogjuk a stílusokat importálni
  
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;