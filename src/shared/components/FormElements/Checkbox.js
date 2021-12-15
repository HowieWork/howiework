import './Checkbox.css';

const Checkbox = ({ label, value, onChange, className }) => {
  return (
    <label className={className}>
      <input type='checkbox' checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

export default Checkbox;
