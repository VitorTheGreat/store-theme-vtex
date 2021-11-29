import React from 'react'

import { useProduct } from 'vtex.product-context'

const ProductContextCustom = () => {

    const productContextValue = useProduct()

    console.log('productContextValue => ', productContextValue)

    return (
        <div>
            Hello World
        </div>
    )
}

export default ProductContextCustom
