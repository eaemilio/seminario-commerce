import type { LocalConfig } from '../index'
import { Product } from '@commerce/types/product'
import { GetProductOperation } from '@commerce/types/product'
import type { OperationContext } from '@commerce/api/operations'
import { supabase } from '@framework/supabase'

export default function getProductOperation({
  commerce,
}: OperationContext<any>) {
  async function getProduct<T extends GetProductOperation>({
    query = '',
    variables,
    config,
  }: {
    query?: string
    variables?: T['variables']
    config?: Partial<LocalConfig>
    preview?: boolean
  } = {}): Promise<Product | {} | any> {
    const { data } = await supabase.from('Producto').select('*').eq('slug', variables!.slug).limit(1).single();
    console.log(data);
    return {
      product: data,
    }
  }

  return getProduct
}
