import { IProduct, ActionTypes } from "./types";

export function addProductToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    }
  };
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    }
  };
}

export function addProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId,
    }
  };
}