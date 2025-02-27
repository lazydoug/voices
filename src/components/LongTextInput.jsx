'use client'

const LongTextInput = ({ label, name, value, onChange, onBlur, error }) => {
  return (
    <div>
      <label htmlFor={name} className='text-sm font-medium text-black/80'>
        {label}
      </label>

      <textarea
        name={name}
        id={name}
        rows={5}
        spellCheck='true'
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        onInput={(e) => {
          e.target.style.height = 'auto' // Reset height to calculate the new height
          e.target.style.height = `${e.target.scrollHeight}px` // Set height to match content
        }}
        className={`mt-8 block max-h-52 w-full resize-none border-b py-1 transition-all duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:pb-[2px] ${error && 'border-b-[#d93025]'} outline-none`}
      ></textarea>

      {error && <p className='mt-1 text-xs text-[#d93025]'>{error}</p>}
    </div>
  )
}

export default LongTextInput
