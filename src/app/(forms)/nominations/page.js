import NominationForm from '@/components/NominationForm'

export const metadata = {
  title: 'Nominations | Inspired Voices',
  description: 'Nominate your Voices',
}

export default function Home() {

  return (
    <div className='mx-auto mb-6 mt-3 w-[640px] min-w-96 max-w-[90vw] text-black'>
      <div className='h-40 max-h-[22.5vw] rounded-lg bg-[url("/img/the-voice-banner.jpg")] bg-cover bg-center'></div>
      <main>
        <div className='mt-3 space-y-3 rounded-lg border-t-[10px] border-[#ff85dc] bg-white px-6 py-4'>
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

        <NominationForm />
      </main>

      <div className='mb-2 mt-5 text-center text-[12px] text-white/70'>
        Thank you for nominating a hero to be recognized for their perseverance,
        strength, and resilience! 🌟
      </div>

      <footer>
        <div className='text-center text-xl font-bold text-white/70'>
          Inspired Voices
        </div>
      </footer>
    </div>
  )
}
