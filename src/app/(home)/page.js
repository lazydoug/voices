import Image from 'next/image'

export const metadata = {
  title: 'Inspired Voices | Home',
}

const Home = () => {
  return (
    <main>
      <section className='px-6 pb-3 pt-12 min-[576px]:mx-auto min-[576px]:w-[540px] min-[576px]:px-0 md:w-full md:px-12 lg:px-40 lg:pt-[50px]'>
        <div className='flex flex-col gap-8 lg:flex-row lg:items-center'>
          <div className='lg:flex-1'>
            <p className='text-xl-140 text-secondary/50 lg:text-h4 mb-6 font-bold'>
              ABOUT OUR ORGANISATION
            </p>
            <h1 className='text-h2 text-secondary min-[1440px]:text-h1 mb-5 lg:mb-8'>
              Your Story Matters. Your Voice is Powerful.
              <span className='text-h2 text-secondary/10 min-[1440px]:text-h1 mt-2 block'>
                INSPIRED VOICES
              </span>
            </h1>

            <p className='text-md-160 lg:text-xl-160 font-medium text-black'>
              Together, we break the stigma, celebrate resilience, and build a
              world where every voice is heard.
            </p>
          </div>

          {/**Hero Image */}
          <div className='relative h-[327px] w-full overflow-clip rounded-lg lg:-mr-28 lg:h-[40vw] lg:w-[40vw]'>
            <Image
              className='object-cover'
              src='/img/about-hero.jpg'
              alt=''
              fill
            />
          </div>
        </div>

        <div className='relative ml-auto mr-14 mt-3 h-[97px] w-32 lg:mx-auto lg:mt-8'>
          <Image src='/assets/arrow.png' alt='' fill />
        </div>
      </section>

      <section className='px-6 pb-12 min-[576px]:mx-auto min-[576px]:w-[540px] min-[576px]:px-0 md:w-full md:px-12 lg:px-40 lg:pb-[100px]'>
        <p className='text-xl-140 text-secondary/50 lg:text-h4 mb-2 font-bold uppercase lg:mb-4'>
          Amplifying Stories, Breaking Stigma, Building Community
        </p>
        <h2 className='text-h2 text-secondary lg:text-h1 mb-6 lg:mb-20'>
          Our Mission
        </h2>

        <div className='relative mb-8 lg:mb-16'>
          <p className='text-md-160 lg:text-xl-160 flex flex-col gap-8 text-black lg:flex-row lg:gap-14 lg:font-medium'>
            <span className='flex-1'>
              <strong>Who We Are: </strong>At The Voice, we believe in the power
              of storytelling to heal, connect, and inspire. Our mission is to
              create a space where people can share their journeys without fear,
              find encouragement in the voices of others, and access the
              resources they need to navigate mental health challenges. Through
              shared experiences and open conversations, we foster a culture of
              understanding, support, and empowerment.
            </span>

            <span className='flex-1'>
              <strong>What We Strive For: </strong>We envision a future where
              resilience is celebrated, mental health is openly embraced, and
              every individual feels empowered to share their story without fear
              or shame.
            </span>
          </p>

          <Image
            className='absolute right-0 top-1/2 -translate-y-1/2 opacity-50'
            src='/assets/corporate-bag.png'
            alt=''
            width={187}
            height={165}
          />
        </div>

        <div className='relative h-[18vw] max-h-[260px] min-h-24 w-full overflow-clip rounded-lg'>
          <Image
            className='object-cover object-center'
            src='/img/about-banner.jpg'
            alt=''
            fill
          />
        </div>
      </section>

      <section className='px-6 py-12 min-[576px]:mx-auto min-[576px]:w-[540px] min-[576px]:px-0 md:w-full md:px-12 lg:px-40 lg:py-[100px]'>
        <div className='mb-6 flex flex-col gap-6 min-[1120px]:mb-20 min-[1120px]:flex-row min-[1120px]:items-center'>
          <div className='min-[1120px]:w-[52vw]'>
            <p className='text-xl-140 text-secondary/50 lg:text-h4 mb-2 font-bold uppercase lg:mb-4'>
              How We Make an Impact
            </p>
            <h2 className='text-h2 text-secondary lg:text-h1 mb-6 lg:mb-8'>
              Our Values
            </h2>
            <p className='text-md-160 text-secondary lg:text-xl-160 lg:font-medium'>
              At the heart of Inspired Voices are values that guide everything
              we do. We are committed to:
            </p>
          </div>

          <div className='relative ml-auto h-[97px] w-[150px]'>
            <Image src='/assets/darts.png' alt='Darts' fill />
          </div>
        </div>

        <div className='flex flex-col gap-8 min-[1120px]:flex-row'>
          <div className='flex flex-1 gap-6'>
            <div className='relative h-[74px] w-[45px] shrink-0'>
              <Image src='/assets/rocket.png' alt='' fill />
            </div>
            <div>
              <p className='text-md-150 text-secondary mb-3 font-bold'>
                Resilience
              </p>
              <p className='text-md-160 text-black/50'>
                We celebrate and uplift individuals who have courageously
                overcome adversity, honouring their strength and resilience.
              </p>
            </div>
          </div>
          <div className='flex flex-1 gap-6'>
            <div className='relative h-[42px] w-[45px] shrink-0'>
              <Image src='/assets/bulb.png' alt='' fill />
            </div>
            <div>
              <p className='text-md-150 text-secondary mb-3 font-bold'>
                Authenticity
              </p>
              <p className='text-md-160 text-black/50'>
                We create a safe and supportive space where individuals can
                openly share their truth, be heard without judgment, and find
                strength in their stories.
              </p>
            </div>
          </div>
          <div className='flex flex-1 gap-6'>
            <div className='relative h-[49px] w-[45px] shrink-0'>
              <Image src='/assets/brain.png' alt='' fill />
            </div>
            <div>
              <p className='text-md-150 text-secondary mb-3 font-bold'>
                Community & Inclusivity
              </p>
              <p className='text-md-160 text-black/50'>
                We foster genuine connections that embrace every voice, creating
                a supportive space for healing, growth, and shared experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-8 px-6 py-12 min-[576px]:mx-auto min-[576px]:w-[540px] min-[576px]:px-0 md:w-full md:px-12 md:flex-row-reverse lg:items-center lg:gap-20 lg:px-40 lg:py-[100px]'>
        <div className='mb-8 lg:mb-20 min-[1120px]:w-[52vw]'>
          <p className='text-xl-140 text-secondary/50 lg:text-h4 mb-2 font-bold uppercase lg:mb-4'>
            Why We Started
          </p>
          <h2 className='text-h2 text-secondary lg:text-h1 mb-6 lg:mb-8'>
            The Heart Behind Inspired Voices
          </h2>
          <div className='space-y-2'>
            <p className='text-md-160 lg:text-xl-160 text-black lg:font-medium'>
              Too often, mental health struggles are faced in silence. Fear,
              stigma, and shame prevent many from reaching out for support.
              Inspired Voices was born from a simple yet powerful mission: to
              change that narrative.
            </p>

            <p className='text-md-160 lg:text-xl-160 text-black lg:font-medium'>
              It all began with one belief: <strong>every story matters</strong>
              . We witnessed firsthand the healing power of shared experiences,
              the strength found in vulnerability, and the comfort in knowing
              you are not alone. We knew we had to create a space where people
              felt safe to speak their truth.
            </p>

            <p className='text-md-160 lg:text-xl-160 text-black lg:font-medium'>
              Today, Inspired Voices is more than just a platform—it’s a
              movement. A movement that boldly declares,{' '}
              <i>“You are seen. You are heard. You are not alone.”</i>
            </p>

            <p className='text-md-160 lg:text-xl-160 text-black lg:font-medium'>
              Whether you’re here to listen, share, or support, we welcome you
              with open arms. Together, we can break the silence, uplift one
              another, and create a world where mental health is embraced, not
              feared.
            </p>
          </div>
        </div>

        <div className="h-96 min-w-80 overflow-clip rounded-lg bg-[url('/img/journey-cc.jpg')] bg-cover bg-no-repeat md:flex-1"></div>
      </section>

      <section className='flex flex-col gap-8 px-6 py-12 min-[576px]:mx-auto min-[576px]:w-[540px] min-[576px]:px-0 md:w-full md:px-12 md:flex-row lg:items-center lg:gap-20 lg:px-40 lg:py-[100px]'>
        <div className='mb-8 lg:mb-20 md:flex-1 min-[1120px]:w-[52vw]'>
          <p className='text-xl-140 text-secondary/50 lg:text-h4 mb-2 font-bold uppercase lg:mb-4'>
            Get Involved
          </p>
          <h2 className='text-h2 text-secondary lg:text-h1 mb-6 lg:mb-8'>
            Be Part of the Movement
          </h2>
          <div className='space-y-2'>
            <p className='text-md-160 lg:text-xl-160 text-black lg:font-medium'>
              Your voice has the power to inspire, heal, and create change.
              Here’s how you can get involved:
            </p>

            <ol className='text-md-160 lg:text-xl-160 ml-4 list-decimal text-black lg:font-medium'>
              <li>
                Share Your Story – Your journey can encourage and uplift others
                who need to hear it.
              </li>
              <li>
                Join the Community – Connect with like-minded individuals who
                offer support and encouragement.
              </li>
              <li>
                Support the Cause – Help us amplify more voices and break the
                stigma surrounding mental health.
              </li>
            </ol>
          </div>
        </div>

        <div className='relative aspect-square overflow-clip rounded-lg md:flex-1'>
          <Image
            src='/img/get-involved.jpg'
            alt='Young children painting cardboards for the Inspired Voices initiative'
            fill
          />
        </div>
      </section>
    </main>
  )
}

export default Home
