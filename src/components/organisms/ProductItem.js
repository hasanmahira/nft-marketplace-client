import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

function ProductItem({ product }) {
  const cid = `https://ipfs.io/ipfs/${product.cid}`;

  return (
    <div className="p-3 bg-white">
      <picture className="relative block">
        <button className="w-8 h-8 flex absolute top-0 right-2 border shadow-md rounded-lg border-gray-200 text-purple-700 transition-colors bg-white hover:bg-purple-50 items-center justify-center">
          <AiOutlinePlus />
        </button>
        <img src={cid} className="object-scale-down md:object-scale-down h-48 w-96" />
      </picture>
      <div className="flex flex-col items-center text-center gap-y-1">
        <div className="text-sm font-semibold text-purple-700">{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'ETH' }).format(product.price)}</div>
        <div className="text-sm font-semibold">{product.name}</div>
        <div className="text-sm font-semibold text-gray-500">{product.onSale ? "On Sale": "Off to Sale"}</div>
        <div className="text-sm font-semibold text-gray-500">{product.is_auction ? "On Auction": "Off to Auction"}</div>
      </div>
    </div>
  );
}

export default ProductItem;
