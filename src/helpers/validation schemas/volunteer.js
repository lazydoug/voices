import * as Yup from 'yup'
import { subYears } from 'date-fns'

const EVENT_DATE = new Date(2025, 4, 18)

export const volunteerValidationSchema = Yup.object({
  volunteerName: Yup.string().min(5, 'Name is too short').required('Required'),

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

  volunteerAddress: Yup.string().required('Required'),

  emergencyContactName: Yup.string()
    .min(5, 'Name is too short')
    .required('Required'),

  emergencyContactPhone: Yup.string()
    .matches(/^\+?\d{10,14}$/, 'Invalid phone number')
    .required('Required'),

  availability: Yup.string().required('Required').oneOf(['Yes', 'No']),

  availabilityDetails: Yup.string().when('availability', {
    is: 'No',
    then: (schema) => schema.required('Please provide availability details'),
    otherwise: (schema) => schema.notRequired(),
  }),

  preEventSetupAvailability: Yup.string()
    .required('Required')
    .oneOf([
      'Yes, the day before (May 17, 2025)',
      'Yes, on event day before the start time',
      'No',
    ]),

  volunteerOrientationAvailability: Yup.string()
    .required('Required')
    .oneOf(['Yes', 'No']),

  volunteerShift: Yup.string()
    .required('Required')
    .oneOf([
      'Full event (12 PM - 6 PM)',
      'Half-day (12 PM - 3 PM)',
      'Half-day (3 PM - 6 PM)',
    ]),

  volunteerRoles: Yup.array()
    .min(1, 'Please select at least one role')
    .of(Yup.string().required()),

  otherVolunteerRoles: Yup.string().when('volunteerRoles', {
    is: (roles) => Array.isArray(roles) && roles.includes('Other'),
    then: (schema) => schema.required('Please specify your role'),
    otherwise: (schema) => schema.notRequired(),
  }),

  priorExperience: Yup.string().required('Required').oneOf(['Yes', 'No']),

  priorExperienceDetails: Yup.string().when('priorExperience', {
    is: 'Yes',
    then: (schema) => schema.required('Please provide experience details'),
    otherwise: (schema) => schema.notRequired(),
  }),

  relevantSkills: Yup.string().required('Required'),

  medicalCondition: Yup.string().required('Required').oneOf(['Yes', 'No']),

  medicalConditionDetails: Yup.string().when('medicalCondition', {
    is: 'Yes',
    then: (schema) =>
      schema.required('Please provide details about your medical condition'),
    otherwise: (schema) => schema.notRequired(),
  }),

  shirtSize: Yup.string()
    .required('Required')
    .oneOf(['S', 'M', 'L', 'XL', 'XXL']),
})
