import LongTextInput from '@/components/LongTextInput'

export default function Home() {
  return (
    <div className='mx-auto mb-6 mt-3 w-[640px] max-w-[90vw]'>
      <div className='h-40 max-h-[22.5vw] rounded-lg bg-[url("/img/hero-img.jpg")] bg-contain bg-center'></div>
      <main>
        <div className='mt-3 space-y-3 rounded-lg border-t-[10px] border-orange-300 bg-white px-6 py-4 text-black'>
          <h1 className='text-3xl font-bold'>
            Nomination for Perseverance & Strength Award
          </h1>
          <p className='text-[14px] text-[#202124]'>
            The{' '}
            <span className='font-semibold italic'>
              Perseverance & Strength Award
            </span>{' '}
            is designed to honor individuals or organizations who have
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

          <div className='text-sm text-[#d93025]'>All fields are required</div>
        </div>

        <form action='' className='mt-3 space-y-6'>
          {/* Nominee Information */}
          <fieldset className='space-y-6 rounded-lg border-l-4 border-l-white bg-white px-6 pb-8 transition-all duration-300 focus-within:border-l-orange-300/50'>
            <legend>Nominee Information</legend>
            <div>
              <label
                htmlFor='nomineeName'
                className='text-sm font-medium text-black/80'
              >
                Full Name of Nominee (Individual/Organization)
              </label>
              <input
                type='text'
                name='nomineeName'
                id='nomineeName'
                required
                className='mt-1 block w-full border-b py-1 transition-colors duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:outline-none'
              />
            </div>

            <div>
              <label className='text-sm font-medium text-black/80'>
                Type of Nominee
              </label>

              <div className='mt-1 flex gap-4 py-1'>
                <div className='flex items-center gap-2'>
                  <input
                    type='radio'
                    name='nomineeType'
                    id='indie'
                    value='individual'
                    required
                    className='custom-radio'
                  />
                  <label htmlFor='indie' className='cursor-pointer'>
                    Individual
                  </label>
                </div>

                <div className='flex items-center gap-2'>
                  <input
                    type='radio'
                    name='nomineeType'
                    id='org'
                    value='organization'
                    required
                    className='custom-radio'
                  />
                  <label htmlFor='org' className='cursor-pointer'>
                    Organization
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor='nomPhone'
                className='text-sm font-medium text-black/80'
              >
                Nominee Phone
              </label>
              <input
                type='tel'
                name='nomineePhone'
                id='nomPhone'
                required
                className='mt-1 block w-full border-b py-1 transition-colors duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:outline-none'
              />
            </div>

            <div>
              <label
                htmlFor='nomEmail'
                className='text-sm font-medium text-black/80'
              >
                Nominee Email
              </label>
              <input
                type='email'
                name='nomineeEmail'
                id='nomEmail'
                required
                className='mt-1 block w-full border-b py-1 transition-colors duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:outline-none'
              />
            </div>

            <div>
              <label
                htmlFor='nomAddress'
                className='text-sm font-medium text-black/80'
              >
                Nominee Address
              </label>
              <input
                type='text'
                name='nomineeAddress'
                id='nomAddress'
                required
                className='mt-1 block w-full border-b py-1 transition-colors duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:outline-none'
              />
            </div>
          </fieldset>

          {/* Nominator Information */}
          <fieldset className='space-y-6 rounded-lg border-l-4 border-l-white bg-white px-6 pb-8 transition-all duration-300 focus-within:border-l-orange-300/50'>
            <legend>Nominator Information</legend>

            <div>
              <label
                htmlFor='nominatorName'
                className='text-sm font-medium text-black/80'
              >
                Full Name
              </label>
              <input
                type='text'
                name='nominatorName'
                id='nominatorName'
                required
                className='mt-1 block w-full border-b py-1 transition-colors duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:outline-none'
              />
            </div>

            <div>
              <label
                htmlFor='rel'
                className='text-sm font-medium text-black/80'
              >
                Relationship with Nominee
              </label>
              <input
                type='text'
                name='relationship'
                id='rel'
                required
                className='mt-1 block w-full border-b py-1 transition-colors duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:outline-none'
              />
            </div>

            <div>
              <label
                htmlFor='nominatorPhone'
                className='text-sm font-medium text-black/80'
              >
                Nominator Phone
              </label>
              <input
                type='tel'
                name='nominatorPhone'
                id='nominatorPhone'
                required
                className='mt-1 block w-full border-b py-1 transition-colors duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:outline-none'
              />
            </div>

            <div>
              <label
                htmlFor='nominatorEmail'
                className='text-sm font-medium text-black/80'
              >
                Nominator Email
              </label>
              <input
                type='email'
                name='nominatorEmail'
                id='nominatorEmail'
                required
                className='mt-1 block w-full border-b py-1 transition-colors duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:outline-none'
              />
            </div>
          </fieldset>

          {/* Nomination Details */}
          <fieldset className='space-y-6 rounded-lg border-l-4 border-l-white bg-white px-6 pb-8 transition-all duration-300 focus-within:border-l-orange-300/50'>
            <legend>Nomination Details</legend>

            <LongTextInput
              label="Please describe the nominee's story of perseverance and
                strength: (Provide details on the adversity they faced, how they
                overcame challenges, and any notable achievements or impact.)"
              name='nomineeStroy'
              id='nomineeStroy'
            />

            <LongTextInput
              label='How has the nominee demonstrated resilience and determination in
                the face of adversity? (Share examples or specific moments that
                highlight their courage.)'
              name='nomineeResilience'
              id='nomineeResilience'
            />

            <LongTextInput
              label=" What positive change or impact has the nominee made in their
                community, industry, or personal life? (Include any awards,
                recognition, or influence they've had in inspiring others.)"
              name='nomineeImpact'
              id='nomineeImpact'
            />

            <div>
              <label
                htmlFor='documents'
                className='text-sm font-medium text-black/80'
              >
                Supporting Documents: (Attach any relevant articles, photos,
                videos, or references that support the nominee&apos;s story.)
              </label>

              <input
                className='mx-auto mt-7 block'
                type='file'
                name='documents'
                id='documents'
              />
            </div>
          </fieldset>

          <div className='pb-2 text-center text-[12px] text-black/60'>
            <div>
              By submitting this form, I confirm that the information provided
              is accurate and complete to the best of my knowledge.
            </div>

            <div className='mt-3 flex justify-between'>
              <button
                className='rounded-md bg-orange-600 px-6 py-2 text-sm font-medium text-white hover:bg-orange-500'
                type='submit'
              >
                Submit
              </button>
              <button
                className='rounded-md px-2 text-sm font-medium text-orange-700 hover:bg-orange-200/50'
                type='reset'
              >
                Clear form
              </button>
            </div>
          </div>
        </form>
      </main>

      <div className='py-4 text-center text-[12px] text-black/60'>
        Thank you for nominating a hero to be recognized for their perseverance,
        strength, and resilience! 🌟
      </div>

      <footer>
        <div className='text-center text-xl font-bold text-black/50'>
          Voices
        </div>
      </footer>
    </div>
  )
}
