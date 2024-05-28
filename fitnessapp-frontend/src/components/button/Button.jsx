import './index.css'; // Ebből a fájlból fogjuk a stílusokat importálni

const Button = ({ children, onClick, className }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;