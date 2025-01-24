'use client'

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

          <div className='text-[#d93025]'>* Indicates required question</div>
        </div>

        <form action='' className='mt-3 space-y-3'>
          {/* Nominee Information */}
          <fieldset className='space-y-7 rounded-lg bg-white px-6 py-4'>
            <legend>Nominee Information</legend>
            <div>
              <label className='mb-3 block text-black/80' htmlFor='nomineeName'>
                Full Name of Nominee (Individual/Organization)
              </label>
              <input  
                className='box-border w-full border-b text-[14px] transition-colors duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:pb-[2px] focus:outline-none'
                type='text'
                name='nomineeName'
                id='nomineeName'
              />
            </div>

            <div>
              <label className='mb-3 block text-black/80'>
                Type of Nominee
              </label>
              <div className='flex gap-6'>
                <div className='space-x-2'>
                  <input type='radio' name='nomType' id='indie' />
                  <label htmlFor='indie'>Individual</label>
                </div>

                <div className='space-x-2'>
                  <input type='radio' name='nomType' id='org' />
                  <label htmlFor='org'>Organization</label>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor='nomPhone'>Nominee Phone</label>
              <input
                className='box-border block w-full border-b transition-colors duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:pb-[2px] focus:outline-none'
                type='tel'
                name='nomineePhone'
                id='nomPhone'
              />
            </div>

            <div>
              <label htmlFor='nomEmail'>Nominee Email</label>
              <input
                className='box-border block w-full border-b transition-colors duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:pb-[2px] focus:outline-none'
                type='email'
                name='nomineeEmail'
                id='nomEmail'
              />
            </div>

            <div>
              <label htmlFor='nomAddress'>Nominee Address</label>
              <input
                className='box-border block w-full border-b transition-colors duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:pb-[2px] focus:outline-none'
                type='text'
                name='nomineeAddress'
                id='nomAddress'
              />
            </div>
          </fieldset>

          {/* Nominator Information */}
          <fieldset className='space-y-6 rounded-lg bg-white px-6 py-4'>
            <legend>Nominator Information</legend>

            <div>
              <label htmlFor='nominatorName'>Full Name</label>
              <input
                className='textmt-2 box-border block w-full border-b transition-colors duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:pb-[2px] focus:outline-none'
                type='text'
                name='nominatorName'
                id='nominatorName'
              />
            </div>

            <div>
              <label htmlFor='rel'>Relationship with Nominee</label>
              <input
                className='box-border block w-full border-b transition-colors duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:pb-[2px] focus:outline-none'
                type='text'
                name='relationship'
                id='rel'
              />
            </div>

            <div>
              <label htmlFor='nominatorPhone'>Nominator Phone</label>
              <input
                className='box-border block w-full border-b transition-colors duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:pb-[2px] focus:outline-none'
                type='tel'
                name='nominatorPhone'
                id='nominatorPhone'
              />
            </div>

            <div>
              <label htmlFor='nominatorEmail'>Nominator Email</label>
              <input
                className='box-border block w-full border-b transition-colors duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:pb-[2px] focus:outline-none'
                type='email'
                name='nominatorEmail'
                id='nominatorEmail'
              />
            </div>
          </fieldset>

          {/* Nomination Details */}
          <fieldset className='space-y-6 rounded-lg bg-white px-6 py-4'>
            <legend>Nomination Details</legend>

            <div>
              <label htmlFor='nomsStory'>
                Please describe the nominee&apos;s story of perseverance and
                strength: (Provide details on the adversity they faced, how they
                overcame challenges, and any notable achievements or impact.)
              </label>
              <textarea
                className='mt-7 box-border block max-h-52 w-full resize-none border-b transition-colors duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:pb-[2px] focus:outline-none'
                name='nomsStory'
                id='nomStory'
                rows={5}
                spellCheck='true'
                onInput={(e) => {
                  e.target.style.height = 'auto' // Reset height to calculate the new height
                  e.target.style.height = `${e.target.scrollHeight}px` // Set height to match content
                }}
              ></textarea>
            </div>

            <div>
              <label htmlFor='nomsResilience'>
                How has the nominee demonstrated resilience and determination in
                the face of adversity? (Share examples or specific moments that
                highlight their courage.)
              </label>
              <textarea
                className='mt-7 box-border block max-h-52 w-full resize-none border-b transition-colors duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:pb-[2px] focus:outline-none'
                name='nomsResilience'
                id='nomsResilience'
                rows={5}
                spellCheck='true'
                onInput={(e) => {
                  e.target.style.height = 'auto' // Reset height to calculate the new height
                  e.target.style.height = `${e.target.scrollHeight}px` // Set height to match content
                }}
              ></textarea>
            </div>

            <div>
              <label htmlFor='nomsImpact'>
                What positive change or impact has the nominee made in their
                community, industry, or personal life? (Include any awards,
                recognition, or influence they&apos;ve had in inspiring others.)
              </label>
              <textarea
                className='mt-7 box-border block max-h-52 w-full resize-none border-b transition-colors duration-300 focus:border-b-[3px] focus:border-b-orange-300 focus:pb-[2px] focus:outline-none'
                name='nomsImpact'
                id='nomsImpact'
                rows={5}
                spellCheck='true'
                onInput={(e) => {
                  e.target.style.height = 'auto' // Reset height to calculate the new height
                  e.target.style.height = `${e.target.scrollHeight}px` // Set height to match content
                }}
              ></textarea>
            </div>

            <div>
              <label htmlFor='documents'>
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
                className='rounded-md bg-orange-500 px-6 py-2 text-sm font-medium text-white'
                type='submit'
              >
                Submit
              </button>
              <button
                className='rounded-md text-sm font-medium text-orange-700 hover:bg-orange-200/50'
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
