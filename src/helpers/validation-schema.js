import * as Yup from 'yup'

const FILE_SIZE_LIMIT = 50 * 1024 * 1024

const SUPPORTED_FORMATS = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
  'image/png',
  'image/gif',
  'video/mp4',
  'video/quicktime',
  'video/x-msvideo',
  'video/x-matroska',
  'video/webm',
]

export const validationSchema = Yup.object({
  nomineeName: Yup.string().min(5, 'Too Short!').required('Required'),
  nomineeType: Yup.string()
    .required('Required')
    .oneOf(['Individual', 'Organization']),
  nomineePhone: Yup.string()
    .matches(/^\+?\d{10,14}$/, 'Invalid phone number')
    .required('Required'),
  nomineeEmail: Yup.string().email('Invalid email').required('Required'),
  nomineeAddress: Yup.string().required('Required'),
  nominatorName: Yup.string().min(5, 'Too Short!').required('Required'),
  rel: Yup.string().required('Required'),
  nominatorPhone: Yup.string()
    .matches(/^\+?\d{10,14}$/, 'Invalid phone number')
    .required('Required'),
  nominatorEmail: Yup.string().email('Invalid email').required('Required'),
  nomineeStory: Yup.string()
    .min(50, 'Minimum 50 characters required')
    .required('Required'),
  nomineeResilience: Yup.string()
    .min(50, 'Minimum 50 characters required')
    .required('Required'),
  nomineeImpact: Yup.string()
    .min(50, 'Minimum 50 characters required')
    .required('Required'),
  documents: Yup.array()
    .transform((value) => (Array.isArray(value) ? value : Object.values(value)))
    .min(1, 'At least one document is required')
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
