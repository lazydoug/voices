import supabase from '@/helpers/supabase-client'

export default async function insertIntoTable(tableName, values) {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .insert([values])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return {
        success: false,
        error: error.message || 'Unknown error occurred',
      }
    }

    return {
      success: true,
      data,
    }
  } catch (err) {
    console.error('Unexpected error:', err)
    return {
      success: false,
      error: err.message || 'Unexpected error occurred',
    }
  }
}
