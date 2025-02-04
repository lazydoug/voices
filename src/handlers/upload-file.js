import supabase from '@/helpers/supabase-client'

const ALLOWED_MIME_TYPES = [
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

export default async function uploadFile(file, nomineeName) {
  if (!file) return null

  // Validate MIME Type
  if (!ALLOWED_MIME_TYPES.includes(file.type)) {
    throw new Error(`Unsupported file type: ${file.type}`)
  }

  const filePath = `nominations/${Date.now()}_${nomineeName}_${file.name}` // Unique filename

  const { data, error } = await supabase.storage
    .from('supporting_documents') // Bucket name
    .upload(filePath, file)

  if (error) {
    return null
  }

  // Generate Public URL
  const { data: publicUrlData } = supabase.storage
    .from('supporting_documents')
    .getPublicUrl(filePath)

  return publicUrlData.publicUrl
}
