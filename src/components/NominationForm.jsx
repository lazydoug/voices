'use client'

import { useState } from 'react'
import { Formik, Form } from 'formik'

import { formAction } from '@/form-actions/nomination'
import { validationSchema } from '@/helpers/validation schemas/nomination'

import FormField from '@/components/FormField'
import LongTextInput from '@/components/LongTextInput'

const NominationForm = () => {
  const [consent, setConsent] = useState(false)

  return (
    <Formik
      initialValues={{
        nomineeName: '',
        nomineeType: '',
        nomineePhone: '',
        nomineeEmail: '',
        nomineeAddress: '',
        nominatorName: '',
        rel: '',
        nominatorPhone: '',
        nominatorEmail: '',
        nomineeStory: '',
        nomineeResilience: '',
        nomineeImpact: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        // Convert form values to FormData
        const formData = new FormData()

        // Append other form fields
        Object.entries(values).forEach(([key, value]) => {
          if (key !== 'documents') {
            formData.append(key, value)
          }
        })

        // Append uploaded files (if any)
        if (values.documents) {
          Array.from(values.documents).forEach((file, index) => {
            formData.append('documents', file)
          })
        }

        try {
          const response = await formAction(formData) // Send form data to server

          if (!response.success) {
            // TODO: Handle Error
          } else {
            resetForm()

            // TODO: Handle Success
          }
        } catch (error) {
          // TODO: Handle Error
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
          <fieldset className='space-y-6 rounded-lg border-l-4 border-l-white bg-white px-6 pb-8 transition-all duration-300 focus-within:border-l-[#ff85dc]/70'>
            <legend>Nominee Information</legend>
            <FormField
              label='Full Name (Individual/Organization)'
              type='text'
              name='nomineeName'
              value={values.nomineeName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.nomineeName && touched.nomineeName
                  ? errors.nomineeName
                  : ''
              }
            />

            <div>
              <label className='text-sm font-medium'>Type of Nominee</label>
              <div className='mt-1 flex gap-4 py-1'>
                {['Individual', 'Organization'].map((type) => (
                  <label
                    key={type}
                    htmlFor={type}
                    className='flex cursor-pointer items-center gap-2'
                  >
                    <input
                      type='radio'
                      name='nomineeType'
                      id={type}
                      value={type}
                      checked={values.nomineeType === type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors.nomineeType && touched.nomineeType
                          ? errors.nomineeType
                          : ''
                      }
                      className='custom-radio'
                    />
                    {type}
                  </label>
                ))}
              </div>
              {errors.nomineeType && touched.nomineeType && (
                <div className='text-sm text-red-500'>{errors.nomineeType}</div>
              )}
            </div>

            <FormField
              label='Phone'
              type='tel'
              name='nomineePhone'
              value={values.nomineePhone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.nomineePhone && touched.nomineePhone
                  ? errors.nomineePhone
                  : ''
              }
            />

            <FormField
              label='Email'
              type='email'
              name='nomineeEmail'
              value={values.nomineeEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.nomineeEmail && touched.nomineeEmail
                  ? errors.nomineeEmail
                  : ''
              }
            />

            <FormField
              label='Address'
              type='text'
              name='nomineeAddress'
              value={values.nomineeAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.nomineeAddress && touched.nomineeAddress
                  ? errors.nomineeAddress
                  : ''
              }
            />
          </fieldset>

          {/* Nominator Information */}
          <fieldset className='space-y-6 rounded-lg border-l-4 border-l-white bg-white px-6 pb-8 transition-all duration-300 focus-within:border-l-[#ff85dc]/70'>
            <legend>Nominator Information</legend>

            <FormField
              label='Full Name'
              type='text'
              name='nominatorName'
              value={values.nominatorName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.nominatorName && touched.nominatorName
                  ? errors.nominatorName
                  : ''
              }
            />
            <FormField
              label='Relationship with Nominee'
              type='text'
              name='rel'
              value={values.rel}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.rel && touched.rel ? errors.rel : ''}
            />
            <FormField
              label='Phone'
              type='tel'
              name='nominatorPhone'
              value={values.nominatorPhone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.nominatorPhone && touched.nominatorPhone
                  ? errors.nominatorPhone
                  : ''
              }
            />
            <FormField
              label='Email'
              type='email'
              name='nominatorEmail'
              value={values.nominatorEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.nominatorEmail && touched.nominatorEmail
                  ? errors.nominatorEmail
                  : ''
              }
            />
          </fieldset>

          {/* Nomination Details */}
          <fieldset className='space-y-6 rounded-lg border-l-4 border-l-white bg-white px-6 pb-8 transition-all duration-300 focus-within:border-l-[#ff85dc]/70'>
            <legend>Nomination Details</legend>

            <LongTextInput
              label="Please describe the nominee's story of perseverance and
          strength: (Provide details on the adversity they faced, how they
          overcame challenges, and any notable achievements or impact.)"
              name='nomineeStory'
              value={values.nomineeStory}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.nomineeStory && touched.nomineeStory
                  ? errors.nomineeStory
                  : ''
              }
            />

            <LongTextInput
              label='How has the nominee demonstrated resilience and determination in
          the face of adversity? (Share examples or specific moments that
          highlight their courage.)'
              name='nomineeResilience'
              value={values.nomineeResilience}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.nomineeResilience && touched.nomineeResilience
                  ? errors.nomineeResilience
                  : ''
              }
            />

            <LongTextInput
              label=" What positive change or impact has the nominee made in their
          community, industry, or personal life? (Include any awards,
          recognition, or influence they've had in inspiring others.)"
              name='nomineeImpact'
              value={values.nomineeImpact}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.nomineeImpact && touched.nomineeImpact
                  ? errors.nomineeImpact
                  : ''
              }
            />

            <div>
              <label htmlFor='documents' className='text-sm font-medium'>
                Supporting Documents: (Attach any relevant articles, photos,
                videos, or references that support the nominee&apos;s story.)
              </label>

              <input
                className='mx-auto mt-7 block'
                type='file'
                id='documents'
                name='documents'
                multiple
                accept='.pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.mp4,.mov,.avi,.mkv,.webm'
                onChange={(e) => {
                  setFieldValue('documents', e.currentTarget.files) // Store files in Formik state
                }}
                onBlur={handleBlur}
              />

              {errors.documents && touched.documents && (
                <p className='mt-1 text-xs text-[#d93025]'>
                  {errors.documents}
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
                By submitting this form, I confirm that the information provided
                is accurate and complete to the best of my knowledge.
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
  )
}

export default NominationForm
