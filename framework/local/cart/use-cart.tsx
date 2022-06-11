import { useMemo } from 'react'
import { SWRHook } from '@commerce/utils/types'
import useCart, { UseCart } from '@commerce/cart/use-cart'

export default useCart as UseCart<typeof handler>

export const handler: SWRHook<any> = {
  fetchOptions: {
    query: '',
  },
  async fetcher() {
    return {
      id: '',
      createdAt: '',
      currency: { code: 'GTQ' },
      taxesIncluded: '',
      lineItems: [],
      lineItemsSubtotalPrice: '',
      subtotalPrice: 50,
      totalPrice: 50,
    }
  },
  useHook:
    ({ useData }) =>
    (input) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const response = useData({
         swrOptions: { revalidateOnFocus: false, ...input?.swrOption }
      });
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useMemo(
        () =>
          Object.create(
            response,
            {
              isEmpty: {
                get() {
                  return (response.data?.lineItems.length ?? 0) <= 0
                },
                enumerable: true,
              },
            }
          ),
        []
      )
    },
}
