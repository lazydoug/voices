'use server'

import insertIntoTable from '@/handlers/handle-insert'
import { uploadModelPhoto } from '@/handlers/upload-file'

export async function modelFormAction(formData) {
  const fd = {}

  for (const [key, value] of formData.entries()) {
    fd[key] = value
  }

  const {
    modelName,
    dob,
    phone,
    email,
    modelAddress,
    emergencyContactName,
    emergencyContactPhone,
    priorExperience,
    experienceDetails,
    runwayExperience,
    outfitComfortability,
    fittingsAvailability,
    fittingsAvailabilityDetails,
    height,
    dressSize,
    shoeSize,
    whyTheVoice,
    medicalConcerns,
    openToStyling,
    socials,
  } = fd

  const modelPhotos = formData.getAll('modelPhotos') // Get all uploaded files

  // Ensure file upload is handled properly
  let uploadedUrls = []

  if (modelPhotos.length > 0) {
    try {
      uploadedUrls = await Promise.all(
        modelPhotos.map((file) => uploadModelPhoto(file, modelName))
      )
    } catch (error) {
      return {
        success: false,
        error: 'Error uploading files. Please try again.',
      }
    }
  }

  const result = await insertIntoTable('Models', {
    model_name: modelName,
    dob: dob,
    phone: phone,
    email: email,
    model_address: modelAddress,
    emergency_contact_name: emergencyContactName,
    emergency_contact_phone: emergencyContactPhone,
    prior_experience: priorExperience,
    experience_details: experienceDetails,
    runway_experience: runwayExperience,
    outfit_comfortability: outfitComfortability,
    fittings_availability: fittingsAvailability,
    fittings_availability_details: fittingsAvailabilityDetails,
    height: height,
    dress_size: dressSize,
    shoe_size: shoeSize,
    why_the_voice: whyTheVoice,
    medical_concerns: medicalConcerns,
    open_to_styling: openToStyling,
    socials: socials,
    photos: uploadedUrls,
  })

  if (!result.success) {
    return {
      success: false,
      error: result.error,
    }
  }
  return {
    success: true,
    message: 'Your application has been received successfully!',
  }
}
