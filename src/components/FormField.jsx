const FormField = ({
  label,
  type,
  name,
  required,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div>
      <label htmlFor={name} className='text-sm font-medium text-black/80'>
        {label}
        {type === 'tel' && (
          <span className='text-[13px] italic'>
            {' '}
            (Must be in international format)
          </span>
        )}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        className={`mt-1 block w-full border-b py-1 transition-all duration-300 focus:border-b-[3px] focus:border-b-orange-300 ${error && 'border-b-[#d93025]'} outline-none`}
      />

      {error && <p className='mt-1 text-xs text-[#d93025]'>{error}</p>}
    </div>
  )
}

export default FormField
