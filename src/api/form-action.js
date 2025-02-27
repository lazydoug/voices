'use server'

import insertIntoTable from '@/handlers/handle-insert'
import { uploadVoiceSupportingDocs } from '@/handlers/upload-file'

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
        documentFiles.map((file) =>
          uploadVoiceSupportingDocs(file, nomineeName)
        )
      )
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
