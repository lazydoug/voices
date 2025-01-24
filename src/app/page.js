export default function Home() {
  return (
    <div className='mt-3 mb-6 w-[640px] max-w-[90vw] mx-auto'>
      <div className='bg-[url("/img/hero-img.jpg")] bg-center bg-contain rounded-lg h-40 max-h-[22.5vw]'></div>
      <main>
        <div className='bg-white border-t-[10px] border-orange-300 text-black mt-3 rounded-lg px-6 py-4 space-y-3'>
          <h1 className='text-3xl font-bold'>
            Nomination for Perseverance & Strength Award
          </h1>
          <p className='text-[#202124] text-[14px]'>
            The{' '}
            <span className='font-semibold italic'>
              Perseverance & Strength Award
            </span>{' '}
            is designed to honour individuals or organisations who have
            demonstrated exceptional resilience, courage, and determination in
            the face of adversity. This form allows nominators to share the
            inspiring stories of nominees, highlighting their journey,
            achievements, and the positive impact they&apos;ve made on their
            community, industry, or personal life. By completing this form, you
            play a vital role in recognising and celebrating the strength and
            perseverance of unsung heroes who inspire others through their
            actions and spirit.
          </p>

          <hr className='-mx-6' />

          <div className='text-[#d93025]'>* Indicates required question</div>
        </div>

        <form action='' className='mt-3'>
          <fieldset className='rounded-lg bg-white px-6 py-4'>
            <legend>Nominee Information</legend>
            <div>
              <label htmlFor='nomineeName'>
                Full Name of Nominee (Individual/Organization)
              </label>
              <input
                className='block focus:outline-none'
                type='text'
                name='nomineeName'
                id='nomineeName'
              />
            </div>

            <div>
              <label>Type of Nominee</label>
              <div className='space-x-2'>
                <input type='radio' name='nomType' id='indie' />
                <label htmlFor='indie'>Individual</label>
              </div>

              <div className='space-x-2'>
                <input type='radio' name='nomType' id='org' />
                <label htmlFor='org'>Organization</label>
              </div>
            </div>

            <div>
              <label htmlFor='nomPhone'>Nominee Phone</label>
              <input
                className='block focus:outline-none'
                type='tel'
                name='nomineePhone'
                id='nomPhone'
              />
            </div>

            <div>
              <label htmlFor='nomEmail'>Nominee Email</label>
              <input
                className='block focus:outline-none focus:pb-[2px] box-border border-b focus:border-b-[3px] focus:border-b-orange-300 transition-colors duration-300'
                type='email'
                name='nomineeEmail'
                id='nomEmail'
              />
            </div>

            <div>
              <label htmlFor='nomAddress'>Nominee Address</label>
              <input
                className='block focus:outline-none focus:pb-[2px] box-border border-b focus:border-b-[3px] focus:border-b-orange-300 transition-colors duration-300'
                type='text'
                name='nomineeAddress'
                id='nomAddress'
              />
            </div>
          </fieldset>
        </form>
      </main>
    </div>
  )
}
