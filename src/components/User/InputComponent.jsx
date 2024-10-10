const InputComponet = ({
  classproperty,
  inputLabel,
  type,
  name,
  value,
  method,
}) => {
  return (
    <div className={classproperty}>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {inputLabel}
      </label>
      <input
        type={type}
        name={name}
        className="form-input block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4"
        defaultValue={value}
        onChange={method}
      />
    </div>
  );
};

export default InputComponet;
