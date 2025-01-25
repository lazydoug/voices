'use client'
const LongTextInput = ({ label, name, id }) => {
  return (
    <div>
      <label htmlFor={id} className='text-sm font-medium text-black/80'>
        {label}
      </label>

      <textarea
        name={name}
        id={id}
        rows={5}
        spellCheck='true'
        minLength={50}
        required
        onInput={(e) => {
          e.target.style.height = 'auto' // Reset height to calculate the new height
          e.target.style.height = `${e.target.scrollHeight}px` // Set height to match content
        }}
        className='mt-8 block max-h-52 w-full resize-none border-b py-1 transition-colors duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:pb-[2px] focus:outline-none'
      ></textarea>
    </div>
  )
}

export default LongTextInput
