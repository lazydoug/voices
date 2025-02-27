import supabase from '@/helpers/supabase-client'

const DOC_MIME_TYPES = [
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

export async function uploadVoiceSupportingDocs(file, name) {
  if (!file) return null

  // Validate MIME Type
  if (!DOC_MIME_TYPES.includes(file.type)) {
    throw new Error(`Unsupported file type: ${file.type}`)
  }

  const filePath = `nominations/${Date.now()}_${name}_${file.name}` // Unique filename

  const { data, error } = await supabase.storage
    .from('thevoice') // Bucket name
    .upload(filePath, file)

  if (error) {
    return null
  }

  // Generate Public URL
  const { data: publicUrlData } = supabase.storage
    .from('thevoice')
    .getPublicUrl(filePath)

  return publicUrlData.publicUrl
}

export async function uploadModelPhoto(file, name) {
  const MODEL_MIME_TYPES = ['image/png', 'image/jpg', 'image/jpeg']

  if (!file) return null

  // Validate MIME Type
  if (!MODEL_MIME_TYPES.includes(file.type)) {
    throw new Error(`Unsupported file type: ${file.type}`)
  }

  const filePath = `models/${Date.now()}_${name}_${file.name}` // Unique filename

  const { data, error } = await supabase.storage
    .from('thevoice') // Bucket name
    .upload(filePath, file)

  if (error) {
    return null
  }

  // Generate Public URL
  const { data: publicUrlData } = supabase.storage
    .from('thevoice')
    .getPublicUrl(filePath)

  return publicUrlData.publicUrl
}
