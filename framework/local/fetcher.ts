import { Fetcher } from '@commerce/utils/types'
import { supabase } from './supabase'

export const fetcher: Fetcher = async () => {
  const { data, error } = await supabase.from('Producto').select('*');
  if (!error) {
    return data
  }
  throw error
}
