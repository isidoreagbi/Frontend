
const Input = ({ type = '{{text}}', placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border p-2 mb-2 rounded ${className}`}
    />
  );
};

export default Input;
