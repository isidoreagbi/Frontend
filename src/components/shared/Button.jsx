
const Button = ({ children, onClick, type = 'button', className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 text-white p-2 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
