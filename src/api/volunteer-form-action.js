'use server'

import insertIntoTable from '@/handlers/handle-insert'

export async function volunteerFormAction(formData) {
  //fd => formData
  const fd = {}

  for (const [key, value] of formData.entries()) {
    if (key === 'volunteerRoles') {
      // Ensure multiple selections are stored as an array
      fd[key] = fd[key] ? [...fd[key], value] : [value]
    } else {
      fd[key] = value
    }
  }

  const {
    volunteerName,
    dob,
    phone,
    email,
    volunteerAddress,
    emergencyContactName,
    emergencyContactPhone,
    availability,
    availabilityDetails,
    preEventSetupAvailability,
    volunteerOrientationAvailability,
    volunteerShift,
    volunteerRoles,
    otherVolunteerRoles,
    priorExperience,
    priorExperienceDetails,
    relevantSkills,
    medicalCondition,
    medicalConditionDetails,
    shirtSize,
  } = fd

  const result = await insertIntoTable('Volunteers', {
    volunteer_name: volunteerName,
    dob: dob,
    phone: phone,
    email: email,
    volunteer_address: volunteerAddress,
    emergency_contact_name: emergencyContactName,
    emergency_contact_phone: emergencyContactPhone,
    event_availability: availability,
    event_availability_details: availabilityDetails,
    pre_event_setup_availability: preEventSetupAvailability,
    volunteer_orientation_availability: volunteerOrientationAvailability,
    volunteer_shift: volunteerShift,
    volunteer_roles: volunteerRoles,
    other_volunteer_roles: otherVolunteerRoles || null,
    prior_experience: priorExperience,
    prior_experience_details: priorExperienceDetails,
    relevant_skills: relevantSkills,
    medical_condition: medicalCondition,
    medical_condition_details: medicalConditionDetails,
    shirt_size: shirtSize,
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
