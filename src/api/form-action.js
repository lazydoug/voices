'use server'

import insertIntoTable from '@/handlers/handle-insert'
import uploadFile from '@/handlers/upload-file'

export async function formAction(formData) {
  const fd = {}

  for (const [key, value] of formData.entries()) {
    fd[key] = value
  }

  const {
    nomineeName,
    nomineeType,
    nomineePhone,
    nomineeEmail,
    nomineeAddress,
    nominatorName,
    rel,
    nominatorPhone,
    nominatorEmail,
    nomineeStory,
    nomineeResilience,
    nomineeImpact,
  } = fd

  const documentFiles = formData.getAll('documents') // Get all uploaded files

  // Ensure file upload is handled properly
  let uploadedUrls = []

  if (documentFiles.length > 0) {
    try {
      uploadedUrls = await Promise.all(
        documentFiles.map((file) => uploadFile(file, nomineeName))
      )

      uploadedUrls = await Promise.all(documentFiles.map(uploadFile)) // Await all uploads
    } catch (error) {
      return {
        success: false,
        error: 'Error uploading files. Please try again.',
      }
    }
  }

  const result = await insertIntoTable('Nominations', {
    nominee_name: nomineeName,
    nominee_type: nomineeType,
    nominee_phone: nomineePhone,
    nominee_email: nomineeEmail,
    nominee_address: nomineeAddress,
    nominator_name: nominatorName,
    nominator_relationship: rel,
    nominator_phone: nominatorPhone,
    nominator_email: nominatorEmail,
    nominee_perseverance: nomineeStory,
    nominee_resilience: nomineeResilience,
    nominee_impact: nomineeImpact,
    supporting_docs: uploadedUrls,
  })

  if (!result.success) {
    return {
      success: false,
      error: result.error,
    }
  }
  return {
    success: true,
    message: 'Your nomination has been received successfully!',
  }
}

// const schema = Joi.object({
//   nomineeName: Joi.string().required(),
//   nomineeType: Joi.string().required().valid('Individual', 'Organization'),
//   nomineePhone: Joi.string()
//     .required()
//     .pattern(new RegExp('^[+][0-9]+([ -]?[0-9]+)*')),
//   nomineeEmail: Joi.string().email().required(),
//   nomineeAddress: Joi.string().required(),
//   nominatorName: Joi.string().required(),
//   relationship: Joi.string().required(),
//   nominatorPhone: Joi.string()
//     .required()
//     .pattern(new RegExp('^[+][0-9]+([ -]?[0-9]+)*')),
//   nominatorEmail: Joi.string().email().required(),
//   nomineeStroy: Joi.string().required().min(50),
//   nomineeResilience: Joi.string().required().min(50),
//   nomineeImpact: Joi.string().required().min(50),
// })

// const { error, value } = schema.validate(data)

// if (error) {
//   const formattedErrors = error.details.map((err) => {
//     switch (err.type) {
//       case 'string.empty':
//         return `${err.context.label} cannot be empty.`
//       case 'any.required':
//         return `${err.context.label} is required.`
//       case 'string.email':
//         return `${err.context.label} must be a valid email address.`
//       case 'string.pattern.base':
//         return `${err.context.label} must be in international format (e.g., +234...).`
//       default:
//         return `Invalid value for ${err.context.label}.`
//     }
//   })

//   console.log('error===>    ', formattedErrors)

//   return { success: false, errors: formattedErrors }
// }
