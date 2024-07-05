const Toast = ({ type, message, onClose }) => {
  return (
    <div className="w-32">
      <p>{message}</p>
    </div>
  );
};

export default Toast;
