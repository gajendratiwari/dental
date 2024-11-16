const Button = ({
  children,
  type = "primary",
  size = "mediun",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`btn btn--${type} btn--${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
