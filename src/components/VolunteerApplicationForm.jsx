'use client'

import { useState } from 'react'
import { Form, Formik } from 'formik'

import FormField from '@/components/FormField'
import LongTextInput from '@/components/LongTextInput'

import { volunteerValidationSchema } from '@/helpers/validation schemas/volunteer'
import { volunteerFormAction } from '@/form-actions/volunteer'

const VolunteerApplicationForm = () => {
  const [consent, setConsent] = useState(false)

  return (
    <div className='mx-auto mb-6 mt-3 w-[640px] min-w-96 max-w-[90vw]'>
      <div className='h-40 max-h-[22.5vw] rounded-lg bg-[url("/img/volunteer-banner.jpg")] bg-cover bg-center'></div>
      <main>
        <div className='mt-3 space-y-3 rounded-lg border-t-[10px] border-fuchsia-300 bg-white px-6 py-4 text-black'>
          <h1 className='text-3xl font-bold'>
            The Voice Volunteer Application
          </h1>
          <p className='text-[14px] text-[#202124]'>
            Thank you for your interest in volunteering for The Voice event on{' '}
            <time dateTime='2025-05-18'>May 18, 2025</time>. Volunteers play a
            vital role in making this event a success, and we appreciate your
            willingness to contribute. Please complete the application below.
            Selected volunteers will be contacted with further details.
          </p>

          <hr className='-mx-6' />

          <div className='text-sm text-[#d93025]'>All fields are required</div>
        </div>

        <Formik
          initialValues={{
            volunteerName: '',
            dob: '',
            phone: '',
            email: '',
            volunteerAddress: '',
            emergencyContactName: '',
            emergencyContactPhone: '',
            availability: '',
            availabilityDetails: '',
            preEventSetupAvailability: '',
            volunteerOrientationAvailability: '',
            volunteerShift: '',
            volunteerRoles: [],
            otherVolunteerRoles: '',
            priorExperience: '',
            priorExperienceDetails: '',
            relevantSkills: '',
            medicalCondition: '',
            medicalConditionDetails: '',
            shirtSize: '',
          }}
          validationSchema={volunteerValidationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            // Convert form values to FormData
            const formData = new FormData()

            // Append form fields
            Object.entries(values).forEach(([key, value]) => {
              formData.append(key, value)
            })

            try {
              const response = await volunteerFormAction(formData) // Send form data to server

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
                  name='volunteerName'
                  value={values.volunteerName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.volunteerName && touched.volunteerName
                      ? errors.volunteerName
                      : ''
                  }
                />

                <FormField
                  label='Date of Birth'
                  type='date'
                  name='dob'
                  value={values.dob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.dob && touched.dob ? errors.dob : ''}
                />

                <FormField
                  label='Phone Number'
                  type='tel'
                  name='phone'
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.phone && touched.phone ? errors.phone : ''}
                />

                <FormField
                  label='Email'
                  type='email'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email && touched.email ? errors.email : ''}
                />

                <FormField
                  label='Address'
                  type='text'
                  name='volunteerAddress'
                  value={values.volunteerAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.volunteerAddress && touched.volunteerAddress
                      ? errors.volunteerAddress
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
                  value={values.emergencyContactName}
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
                  value={values.emergencyContactPhone}
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
                <legend>Availability</legend>

                <div>
                  <label className='text-sm font-medium text-black/80'>
                    Are you available on May 18, 2025?
                  </label>
                  <div className='mt-1 flex gap-4 py-1'>
                    {['Yes', 'No'].map((type) => (
                      <label
                        key={type}
                        htmlFor={type}
                        className='flex cursor-pointer items-center gap-2'
                      >
                        <input
                          type='radio'
                          name='availability'
                          id={type}
                          value={type}
                          checked={values.availability === type}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.availability && touched.availability
                              ? errors.availability
                              : ''
                          }
                          className='custom-radio'
                        />
                        {type}
                      </label>
                    ))}
                  </div>

                  {errors.availability && touched.availability && (
                    <div className='text-sm text-red-500'>
                      {errors.availability}
                    </div>
                  )}
                </div>

                <LongTextInput
                  label='If no, please specify availability'
                  name='availabilityDetails'
                  value={values.availabilityDetails}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.availabilityDetails && touched.availabilityDetails
                      ? errors.availabilityDetails
                      : ''
                  }
                />

                <div>
                  <label className='text-sm font-medium text-black/80'>
                    Are you available for pre-event setup and preparation?
                  </label>
                  <div className='mt-1 flex flex-col gap-4 py-1'>
                    {[
                      'Yes, the day before (May 17, 2025)',
                      'Yes, on event day before the start time',
                      'No',
                    ].map((type) => (
                      <label
                        key={type}
                        htmlFor={type}
                        className='flex cursor-pointer items-center gap-2'
                      >
                        <input
                          type='radio'
                          name='preEventSetupAvailability'
                          id={type}
                          value={type}
                          checked={values.preEventSetupAvailability === type}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.preEventSetupAvailability &&
                            touched.preEventSetupAvailability
                              ? errors.preEventSetupAvailability
                              : ''
                          }
                          className='custom-radio'
                        />
                        {type}
                      </label>
                    ))}
                  </div>

                  {errors.preEventSetupAvailability &&
                    touched.preEventSetupAvailability && (
                      <div className='text-sm text-red-500'>
                        {errors.preEventSetupAvailability}
                      </div>
                    )}
                </div>

                <div>
                  <label className='text-sm font-medium text-black/80'>
                    Are you available for a volunteer orientation prior to the
                    event?
                  </label>
                  <div className='mt-1 flex gap-4 py-1'>
                    {['Yes', 'No'].map((type) => (
                      <label
                        key={type}
                        htmlFor={type}
                        className='flex cursor-pointer items-center gap-2'
                      >
                        <input
                          type='radio'
                          name='volunteerOrientationAvailability'
                          id={type}
                          value={type}
                          checked={
                            values.volunteerOrientationAvailability === type
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.volunteerOrientationAvailability &&
                            touched.volunteerOrientationAvailability
                              ? errors.volunteerOrientationAvailability
                              : ''
                          }
                          className='custom-radio'
                        />
                        {type}
                      </label>
                    ))}
                  </div>

                  {errors.volunteerOrientationAvailability &&
                    touched.volunteerOrientationAvailability && (
                      <div className='text-sm text-red-500'>
                        {errors.volunteerOrientationAvailability}
                      </div>
                    )}
                </div>

                <div>
                  <label className='text-sm font-medium text-black/80'>
                    Preferred Volunteer Shift(s)
                  </label>
                  <div className='mt-1 flex flex-col gap-4 py-1'>
                    {[
                      'Full event (12 PM - 6 PM)',
                      'Half-day (12 PM - 3 PM)',
                      'Half-day (3 PM - 6 PM)',
                    ].map((type) => (
                      <label
                        key={type}
                        htmlFor={type}
                        className='flex cursor-pointer items-center gap-2'
                      >
                        <input
                          type='radio'
                          name='volunteerShift'
                          id={type}
                          value={type}
                          checked={values.volunteerShift === type}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.volunteerShift && touched.volunteerShift
                              ? errors.volunteerShift
                              : ''
                          }
                          className='custom-radio'
                        />
                        {type}
                      </label>
                    ))}
                  </div>

                  {errors.volunteerShift && touched.volunteerShift && (
                    <div className='text-sm text-red-500'>
                      {errors.volunteerShift}
                    </div>
                  )}
                </div>
              </fieldset>

              <fieldset className='space-y-6 rounded-lg border-l-4 border-l-white bg-white px-6 pb-8 transition-all duration-300 focus-within:border-l-fuchsia-300/50'>
                <legend>Volunteer Roles</legend>

                <div>
                  <label className='text-sm font-medium text-black/80'>
                    Please select the areas where you would like to help
                  </label>
                  <div className='mt-1 flex flex-col gap-4 py-1'>
                    {[
                      'Guest Check-in & Registration',
                      'Ushering & Seating Assistance',
                      'Vendor & Speaker Assistance',
                      'Backstage & Model Coordination',
                      'Setup & Breakdown',
                      'Mental Health Awareness Booth Support',
                      'Media & Photography Assistance',
                      'Social Media & Event Promotion',
                      'Other',
                    ].map((type) => (
                      <label
                        key={type}
                        htmlFor={type}
                        className='flex cursor-pointer items-center gap-2'
                      >
                        <input
                          type='checkbox'
                          name='volunteerRoles'
                          id={type}
                          value={type}
                          onChange={(e) => {
                            const checked = e.target.checked
                            const currentRoles = values.volunteerRoles || [] // Ensure it's always an array

                            if (checked) {
                              setFieldValue('volunteerRoles', [
                                ...currentRoles,
                                type,
                              ]) // ✅ Add role
                            } else {
                              setFieldValue(
                                'volunteerRoles',
                                currentRoles.filter((role) => role !== type) // ✅ Remove role
                              )
                            }
                          }}
                          onBlur={handleBlur}
                          error={
                            errors.volunteerRoles && touched.volunteerRoles
                              ? errors.volunteerRoles
                              : ''
                          }
                        />
                        {type}
                      </label>
                    ))}

                    <div className='flex cursor-pointer items-center gap-3'>
                      <label htmlFor='otherVolunteerRoles'>
                        Please specify:
                      </label>

                      <input
                        className='flex-1 border-b-2 border-fuchsia-300/30 transition-colors focus:border-fuchsia-300 focus:outline-none'
                        type='text'
                        name='otherVolunteerRoles'
                        id='otherVolunteerRoles'
                        value={values.otherVolunteerRoles}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          errors.otherVolunteerRoles &&
                          touched.otherVolunteerRoles
                            ? errors.otherVolunteerRoles
                            : ''
                        }
                      />
                    </div>
                  </div>

                  {(errors.volunteerRoles || errors.otherVolunteerRoles) &&
                    (touched.volunteerRoles || touched.otherVolunteerRoles) && (
                      <div className='text-sm text-red-500'>
                        {errors.volunteerRoles || errors.otherVolunteerRoles}
                      </div>
                    )}
                </div>
              </fieldset>

              <fieldset className='space-y-6 rounded-lg border-l-4 border-l-white bg-white px-6 pb-8 transition-all duration-300 focus-within:border-l-fuchsia-300/50'>
                <legend>Skills & Experience</legend>

                <div>
                  <label className='text-sm font-medium text-black/80'>
                    Have you volunteered at an event before?
                  </label>
                  <div className='mt-1 flex gap-4 py-1'>
                    {['Yes', 'No'].map((type) => (
                      <label
                        key={type}
                        htmlFor={type}
                        className='flex cursor-pointer items-center gap-2'
                      >
                        <input
                          type='radio'
                          name='priorExperience'
                          id={type}
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
                  label='If yes, please describe your experience'
                  name='priorExperienceDetails'
                  value={values.priorExperienceDetails}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.priorExperienceDetails &&
                    touched.priorExperienceDetails
                      ? errors.priorExperienceDetails
                      : ''
                  }
                />

                <LongTextInput
                  label='Do you have any relevant skills (e.g., event coordination, customer service, photography, social media management, etc.)?'
                  name='relevantSkills'
                  value={values.relevantSkills}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.relevantSkills && touched.relevantSkills
                      ? errors.relevantSkills
                      : ''
                  }
                />

                <div>
                  <label className='text-sm font-medium text-black/80'>
                    Do you have any medical conditions or physical limitations
                    we should be aware of?
                  </label>
                  <div className='mt-1 flex gap-4 py-1'>
                    {['Yes', 'No'].map((type) => (
                      <label
                        key={type}
                        htmlFor={type}
                        className='flex cursor-pointer items-center gap-2'
                      >
                        <input
                          type='radio'
                          name='medicalCondition'
                          id={type}
                          value={type}
                          checked={values.medicalCondition === type}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.medicalCondition && touched.medicalCondition
                              ? errors.medicalCondition
                              : ''
                          }
                          className='custom-radio'
                        />
                        {type}
                      </label>
                    ))}
                  </div>

                  {errors.medicalCondition && touched.medicalCondition && (
                    <div className='text-sm text-red-500'>
                      {errors.medicalCondition}
                    </div>
                  )}
                </div>

                <LongTextInput
                  label='If yes, please specify'
                  name='medicalConditionDetails'
                  value={values.medicalConditionDetails}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.medicalConditionDetails &&
                    touched.medicalConditionDetails
                      ? errors.medicalConditionDetails
                      : ''
                  }
                />

                <div>
                  <label className='text-sm font-medium text-black/80'>
                    T-Shirt Size (for volunteer apparel, if applicable)
                  </label>
                  <div className='mt-1 flex flex-col gap-4 py-1'>
                    {['S', 'M', 'L', 'XL', 'XXL'].map((type) => (
                      <label
                        key={type}
                        htmlFor={type}
                        className='flex cursor-pointer items-center gap-2'
                      >
                        <input
                          type='radio'
                          name='shirtSize'
                          id={type}
                          value={type}
                          checked={values.shirtSize === type}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            errors.shirtSize && touched.shirtSize
                              ? errors.shirtSize
                              : ''
                          }
                          className='custom-radio'
                        />
                        {type}
                      </label>
                    ))}
                  </div>

                  {errors.shirtSize && touched.shirtSize && (
                    <div className='text-sm text-red-500'>
                      {errors.shirtSize}
                    </div>
                  )}
                </div>
              </fieldset>

              <div className='pb-2 text-center text-[12px] text-black/60'>
                <div className='flex items-start'>
                  <input
                    className='h-4'
                    type='checkbox'
                    name='consent'
                    id='consent'
                    value='acknowledged'
                    checked={consent}
                    onClick={(e) => setConsent(e.target.checked)}
                  />
                  <label htmlFor='consent'>
                    By submitting this application, I confirm that the
                    information provided is accurate. I understand that
                    volunteering requires commitment and that I will be expected
                    to fulfill my assigned duties professionally.
                  </label>
                </div>

                <div className='mt-3 flex justify-between'>
                  <button
                    type='submit'
                    disabled={!consent || isSubmitting}
                    className='rounded-md bg-fuchsia-600 px-6 py-2 text-sm text-white hover:bg-fuchsia-500 disabled:bg-gray-400/50'
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>

                  <button
                    type='reset'
                    disabled={isSubmitting}
                    className='rounded-md px-2 text-sm font-medium text-fuchsia-700 hover:bg-fuchsia-200/50 disabled:text-gray-400/50'
                  >
                    Clear form
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </main>

      <div className='py-4 text-center text-[12px] text-black/60'>
        Thank you for your support—we look forward to working with you! 🌟
      </div>

      <footer>
        <div className='text-center text-xl font-bold text-black/50'>
          The Voice
        </div>
      </footer>
    </div>
  )
}

export default VolunteerApplicationForm
