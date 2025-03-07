'use client'

import { useState } from 'react'
import { Form, Formik } from 'formik'

import FormField from '@/components/FormField'
import LongTextInput from '@/components/LongTextInput'

import { modelValidationSchema } from '@/helpers/validation schemas/model'
import { modelFormAction } from '@/form-actions/model'

const ModelApplicationForm = () => {
  const [consent, setConsent] = useState(false)

  return (
    <div className='mx-auto mb-6 mt-3 w-[640px] min-w-96 max-w-[90vw] text-black'>
      <div className='h-40 max-h-[22.5vw] rounded-lg bg-[url("/img/model-banner.jpg")] bg-cover bg-center'></div>
      <main>
        <div className='mt-3 space-y-3 rounded-lg border-t-[10px] border-fuchsia-300 bg-white px-6 pb-7 pt-4'>
          <h1 className='text-3xl font-bold'>Inspired Voices Model Application</h1>
          <p className='text-[14px] text-[#202124]'>
            Thank you for your interest in modeling for the Inspired Voices event on{' '}
            <time dateTime='2025-05-18'>May 18, 2025</time>. Please complete the
            application below. Selected models will be contacted with further
            details.
          </p>
        </div>

        <Formik
          initialValues={{
            modelName: '',
            dob: '',
            phone: '',
            email: '',
            modelAddress: '',
            emergencyContactName: '',
            emergencyContactPhone: '',
            priorExperience: '',
            experienceDetails: '',
            runwayExperience: '',
            outfitComfortability: '',
            fittingsAvailability: '',
            fittingsAvailabilityDetails: '',
            height: '',
            dressSize: '',
            shoeSize: '',
            whyTheVoice: '',
            medicalConcerns: '',
            openToStyling: '',
            socials: '',
          }}
          validationSchema={modelValidationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            // Convert form values to FormData
            const formData = new FormData()

            // Append other form fields
            Object.entries(values).forEach(([key, value]) => {
              if (key !== 'modelPhotos') {
                formData.append(key, value)
              }
            })

            // Append uploaded files (if any)
            if (values.modelPhotos) {
              Array.from(values.modelPhotos).forEach((file, index) => {
                formData.append('modelPhotos', file)
              })
            }

            try {
              const response = await modelFormAction(formData) // Send form data to server

              if (!response.success) {
                // TODO: Handle Error
                console.log('Response ===>', response)
              } else {
                resetForm()
                // TODO: Handle Success
              }
            } catch (error) {
              // TODO: Handle Error
              console.log('Error ===>', error)
            }

            setSubmitting(false)
          }}
        >
          {({
            handleChange,
            handleBlur,
            setFieldValue,
            values,
            errors,
            touched,
            isSubmitting,
          }) => (
            <Form className='mt-3 space-y-6'>
              <fieldset className='space-y-6 rounded-lg border-l-4 border-l-white bg-white px-6 pb-8 transition-all duration-300 focus-within:border-l-fuchsia-300/50'>
                <legend>Personal Information</legend>
                <FormField
                  label='Full Name'
                  type='text'
                  name='modelName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.modelName && touched.modelName
                      ? errors.modelName
                      : ''
                  }
                />

                <FormField
                  label='Date of Birth'
                  type='date'
                  name='dob'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.dob && touched.dob ? errors.dob : ''}
                />

                <FormField
                  label='Phone Number'
                  type='tel'
                  name='phone'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.phone && touched.phone ? errors.phone : ''}
                />

                <FormField
                  label='Email'
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email && touched.email ? errors.email : ''}
                />

                <FormField
                  label='Address'
                  type='text'
                  name='modelAddress'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.modelAddress && touched.modelAddress
                      ? errors.modelAddress
                      : ''
                  }
                />
              </fieldset>

              <fieldset className='space-y-6 rounded-lg border-l-4 border-l-white bg-white px-6 pb-8 transition-all duration-300 focus-within:border-l-fuchsia-300/50'>
                <legend>Emergency Contact</legend>
                <FormField
                  label='Full Name'
                  type='text'
                  name='emergencyContactName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.emergencyContactName && touched.emergencyContactName
                      ? errors.emergencyContactName
                      : ''
                  }
                />

                <FormField
                  label='Phone Number'
                  type='tel'
                  name='emergencyContactPhone'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.emergencyContactPhone &&
                    touched.emergencyContactPhone
                      ? errors.emergencyContactPhone
                      : ''
                  }
                />
              </fieldset>

              <fieldset className='space-y-6 rounded-lg border-l-4 border-l-white bg-white px-6 pb-8 transition-all duration-300 focus-within:border-l-fuchsia-300/50'>
                <legend>Modelling Experience</legend>

                <div>
                  <label className='text-sm font-medium'>
                    Have you modeled before?
                  </label>
                  <div className='mt-1 flex gap-4 py-1'>
                    {['Yes', 'No'].map((type) => (
                      <label
                        key={type}
                        htmlFor='priorExperience'
                        className='flex cursor-pointer items-center gap-2'
                      >
                        <input
                          type='radio'
                          name='priorExperience'
                          value={type}
                          checked={values.priorExperience === type}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.priorExperience && touched.priorExperience
                              ? errors.priorExperience
                              : ''
                          }
                          className='custom-radio'
                        />
                        {type}
                      </label>
                    ))}
                  </div>

                  {errors.priorExperience && touched.priorExperience && (
                    <div className='text-sm text-red-500'>
                      {errors.priorExperience}
                    </div>
                  )}
                </div>

                <LongTextInput
                  label='If yes, please provide details (events, agencies, or experience)'
                  name='experienceDetails'
                  value={values.experienceDetails}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.experienceDetails && touched.experienceDetails
                      ? errors.experienceDetails
                      : ''
                  }
                />

                <div>
                  <label className='text-sm font-medium'>
                    Do you have runway experience?
                  </label>
                  <div className='mt-1 flex gap-4 py-1'>
                    {['Yes', 'No'].map((type) => (
                      <label
                        key={type}
                        htmlFor='runwayExperience'
                        className='flex cursor-pointer items-center gap-2'
                      >
                        <input
                          type='radio'
                          name='runwayExperience'
                          value={type}
                          checked={values.runwayExperience === type}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.runwayExperience && touched.runwayExperience
                              ? errors.runwayExperience
                              : ''
                          }
                          className='custom-radio'
                        />
                        {type}
                      </label>
                    ))}
                  </div>

                  {errors.runwayExperience && touched.runwayExperience && (
                    <div className='text-sm text-red-500'>
                      {errors.runwayExperience}
                    </div>
                  )}
                </div>

                <div>
                  <label className='text-sm font-medium'>
                    Are you comfortable wearing various styles, including
                    cultural or themed outfits?
                  </label>
                  <div className='mt-1 flex gap-4 py-1'>
                    {['Yes', 'No'].map((type) => (
                      <label
                        key={type}
                        htmlFor='outfitComfortability'
                        className='flex cursor-pointer items-center gap-2'
                      >
                        <input
                          type='radio'
                          name='outfitComfortability'
                          value={type}
                          checked={values.outfitComfortability === type}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.outfitComfortability &&
                            touched.outfitComfortability
                              ? errors.outfitComfortability
                              : ''
                          }
                          className='custom-radio'
                        />
                        {type}
                      </label>
                    ))}
                  </div>

                  {errors.outfitComfortability &&
                    touched.outfitComfortability && (
                      <div className='text-sm text-red-500'>
                        {errors.outfitComfortability}
                      </div>
                    )}
                </div>

                <div>
                  <label className='text-sm font-medium'>
                    Are you available for fittings on February 22nd or 23rd?
                  </label>
                  <div className='mt-1 flex gap-4 py-1'>
                    {[
                      'Yes, on February 22nd',
                      'Yes, on February 23rd',
                      'No',
                    ].map((type) => (
                      <label
                        key={type}
                        htmlFor='fittingsAvailability'
                        className='flex cursor-pointer items-center gap-2'
                      >
                        <input
                          type='radio'
                          name='fittingsAvailability'
                          value={type}
                          checked={values.fittingsAvailability === type}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.fittingsAvailability &&
                            touched.fittingsAvailability
                              ? errors.fittingsAvailability
                              : ''
                          }
                          className='custom-radio'
                        />
                        {type}
                      </label>
                    ))}
                  </div>

                  {errors.fittingsAvailability &&
                    touched.fittingsAvailability && (
                      <div className='text-sm text-red-500'>
                        {errors.fittingsAvailability}
                      </div>
                    )}
                </div>

                <LongTextInput
                  label='If no, please specify availability'
                  name='fittingsAvailabilityDetails'
                  value={values.fittingsAvailabilityDetails}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.fittingsAvailabilityDetails &&
                    touched.fittingsAvailabilityDetails
                      ? errors.fittingsAvailabilityDetails
                      : ''
                  }
                />
              </fieldset>

              <fieldset className='space-y-6 rounded-lg border-l-4 border-l-white bg-white px-6 pb-8 transition-all duration-300 focus-within:border-l-fuchsia-300/50'>
                <legend>Measurements</legend>
                <FormField
                  label='Height (m)'
                  type='number'
                  name='height'
                  step='0.01'
                  min={1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.height && touched.height ? errors.height : ''}
                />

                <div>
                  <label className='text-sm font-medium'>Dress Size</label>

                  <div className='mt-1 flex flex-col gap-4 py-1'>
                    {['S', 'M', 'L', 'XL', 'XXL'].map((type) => (
                      <label
                        key={type}
                        htmlFor={type}
                        className='flex cursor-pointer items-center gap-2'
                      >
                        <input
                          type='radio'
                          name='dressSize'
                          id={type}
                          value={type}
                          checked={values.dressSize === type}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.dressSize && touched.dressSize
                              ? errors.dressSize
                              : ''
                          }
                          className='custom-radio'
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>

                {errors.dressSize && touched.dressSize && (
                  <div className='text-sm text-red-500'>{errors.dressSize}</div>
                )}

                <FormField
                  label='Shoe Size'
                  type='number'
                  name='shoeSize'
                  step='0.5'
                  min='5'
                  max='14.5'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.shoeSize && touched.shoeSize ? errors.shoeSize : ''
                  }
                />
              </fieldset>

              <fieldset className='space-y-6 rounded-lg border-l-4 border-l-white bg-white px-6 pb-8 transition-all duration-300 focus-within:border-l-fuchsia-300/50'>
                <legend>Additional Information</legend>
                <LongTextInput
                  label='Why do you want to model for Inspired Voices?'
                  name='whyTheVoice'
                  value={values.whyTheVoice}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.whyTheVoice && touched.whyTheVoice
                      ? errors.whyTheVoice
                      : ''
                  }
                />

                <LongTextInput
                  label='Do you have any allergies, medical conditions, or concerns we should be aware of?'
                  name='medicalConcerns'
                  value={values.medicalConcerns}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.medicalConcerns && touched.medicalConcerns
                      ? errors.medicalConcerns
                      : ''
                  }
                />

                <div>
                  <label className='text-sm font-medium'>
                    Would you be open to professional hair and makeup styling?
                  </label>
                  <div className='mt-1 flex gap-4 py-1'>
                    {['Yes', 'No'].map((type) => (
                      <label
                        key={type}
                        htmlFor='openToStyling'
                        className='flex cursor-pointer items-center gap-2'
                      >
                        <input
                          type='radio'
                          name='openToStyling'
                          value={type}
                          checked={values.openToStyling === type}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.openToStyling && touched.openToStyling
                              ? errors.openToStyling
                              : ''
                          }
                          className='custom-radio'
                        />
                        {type}
                      </label>
                    ))}
                  </div>

                  {errors.openToStyling && touched.openToStyling && (
                    <div className='text-sm text-red-500'>
                      {errors.openToStyling}
                    </div>
                  )}
                </div>

                <FormField
                  label='Social Media Handles (Optional)'
                  type='text'
                  name='socials'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.socials && touched.socials ? errors.socials : ''
                  }
                />
              </fieldset>

              <fieldset className='space-y-6 rounded-lg border-l-4 border-l-white bg-white px-6 pb-8 transition-all duration-300 focus-within:border-l-fuchsia-300/50'>
                <legend>Photo Submission</legend>

                <div>
                  <label htmlFor='modelPhotos' className='text-sm font-medium'>
                    Please upload a recent full-body and headshot photo.
                    (Professional photos are not required, but clear images are
                    preferred.)
                  </label>

                  <input
                    className='mx-auto mt-7 block'
                    type='file'
                    id='modelPhotos'
                    name='modelPhotos'
                    multiple
                    accept='.png,.jpg,.jpeg'
                    onChange={(event) => {
                      setFieldValue('modelPhotos', event.currentTarget.files) // Store files in Formik state
                    }}
                    onBlur={handleBlur}
                  />

                  {errors.modelPhotos && touched.modelPhotos && (
                    <p className='mt-1 text-xs text-[#d93025]'>
                      {errors.modelPhotos}
                    </p>
                  )}
                </div>
              </fieldset>

              <div className='pb-2 text-center text-[12px]'>
                <div className='flex items-start gap-1'>
                  <input
                    className='h-4'
                    type='checkbox'
                    name='consent'
                    id='consent'
                    value='acknowledged'
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                  />
                  <label htmlFor='consent' className='text-sm text-white'>
                    By submitting this application, I confirm that the
                    information provided is accurate. I understand that
                    participation requires availability for rehearsals,
                    fittings, and the event on May 18, 2025.
                  </label>
                </div>

                <div className='mt-5 flex justify-between'>
                  <button
                    type='submit'
                    disabled={!consent || isSubmitting}
                    className='rounded-md bg-[#6f1455] px-6 py-2 text-sm text-white hover:bg-[#6f1455]/50 disabled:bg-gray-700/40 disabled:text-gray-500'
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>

                  <button
                    type='reset'
                    disabled={isSubmitting}
                    className='rounded-md px-2 text-sm font-medium text-[#e763c2] hover:bg-[#43152c] disabled:text-gray-500'
                  >
                    Clear form
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </main>

      <div className='py-4 text-center text-[12px] text-white/70'>
        Thank you for your interest — we look forward to seeing you on the
        runway! 🌟
      </div>

      <footer>
        <div className='text-center text-xl font-bold text-white/70'>
          Inspired Voices
        </div>
      </footer>
    </div>
  )
}

export default ModelApplicationForm
