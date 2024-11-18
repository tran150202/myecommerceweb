import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
// import { postType } from "./postType"; // Remove or comment out
// import { authorType } from "./authorType"; // Remove or comment out
import { productType } from "./productType";
import { orderType } from "./orderType";
import { salesType } from "./salesType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    // postType, // Remove or comment out
    // authorType, // Remove or comment out
    productType,
    orderType,
    salesType,
  ],
};
