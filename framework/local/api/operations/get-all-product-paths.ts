import { supabase } from "@framework/supabase";

export type GetAllProductPathsResult = {
  products: Array<{ path: string }>
}

export default function getAllProductPathsOperation() {
  async function getAllProductPaths(): Promise<GetAllProductPathsResult> {
    const { data, error } = await supabase.from('Producto').select('*');
    console.log(data);
      return Promise.resolve({
        products: data ? data.map(({ path }) => ({ path })) : [],
      });
  }

  return getAllProductPaths
}
