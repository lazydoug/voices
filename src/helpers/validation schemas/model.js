import * as Yup from 'yup'
import { subYears } from 'date-fns'

const EVENT_DATE = new Date(2025, 4, 18)

const FILE_SIZE_LIMIT = 50 * 1024 * 1024

const SUPPORTED_FORMATS = ['image/png', 'image/jpg', 'image/jpeg']

export const modelValidationSchema = Yup.object({
  modelName: Yup.string().min(5, 'Name is too short').required('Required'),

  dob: Yup.date()
    .typeError('Invalid date format')
    .max(
      subYears(EVENT_DATE, 18),
      'You must be at least 18 years old to volunteer'
    )
    .required('Date of birth is required'),

  phone: Yup.string()
    .matches(/^\+?\d{10,14}$/, 'Invalid phone number')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),

  modelAddress: Yup.string().required('Required'),

  emergencyContactName: Yup.string()
    .min(5, 'Name is too short')
    .required('Required'),

  emergencyContactPhone: Yup.string()
    .matches(/^\+?\d{10,14}$/, 'Invalid phone number')
    .required('Required'),

  priorExperience: Yup.string().required('Required').oneOf(['Yes', 'No']),

  experienceDetails: Yup.string().when('priorExperience', {
    is: 'Yes',
    then: (schema) => schema.required('Please provide your experience details'),
    otherwise: (schema) => schema.notRequired(),
  }),

  runwayExperience: Yup.string().required('Required').oneOf(['Yes', 'No']),

  outfitComfortability: Yup.string().required('Required').oneOf(['Yes', 'No']),

  fittingsAvailability: Yup.string()
    .required('Required')
    .oneOf(['Yes, on February 22nd', 'Yes, on February 23rd', 'No']),

  fittingsAvailabilityDetails: Yup.string().when('fittingsAvailability', {
    is: 'No',
    then: (schema) =>
      schema.required('Please specify your availability for fittings'),
    otherwise: (schema) => schema.notRequired(),
  }),

  height: Yup.number().required('Required').typeError('Invalid height'),

  dressSize: Yup.string()
    .required('Required')
    .oneOf(['S', 'M', 'L', 'XL', 'XXL']),

  shoeSize: Yup.number()
    .required('Required')
    .typeError('Invalid shoe size')
    .min(5, 'Shoe size is too small')
    .max(14.5, 'Max shoe size exceeded'),

  whyTheVoice: Yup.string().required('Required'),

  medicalConcerns: Yup.string().required('Required'),

  openToStyling: Yup.string().required('Required').oneOf(['Yes', 'No']),

  socials: Yup.string().notRequired(),

  modelPhotos: Yup.array()
    .transform((value) => (Array.isArray(value) ? value : Object.values(value)))
    .min(2, 'At least two photos are required')
    .of(
      Yup.mixed()
        .test('required', 'File is required', (file) => !!file)
        .test(
          'fileType',
          'Unsupported file type',
          (file) => file && SUPPORTED_FORMATS.includes(file.type)
        )
        .test(
          'fileSize',
          `File size exceeds ${FILE_SIZE_LIMIT / 1024 / 1024}MB`,
          (file) => file && file.size <= FILE_SIZE_LIMIT
        )
    ),
})
