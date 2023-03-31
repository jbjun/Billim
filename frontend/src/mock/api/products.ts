import { rest } from "msw";

import productsData from "./data/products.json";

const handlers = [
  rest.get("/products", (req, res, ctx) => {
    const { page = 1, size = 4 } = req.params;
    const start = (Number(page) - 1) * Number(size);
    const end = Number(page) * Number(size);
    const filteredProducts = productsData.slice(start, end);

    if (filteredProducts.length) {
      return res(
        ctx.json({
          data: {
            products: filteredProducts,
            totalCount: productsData.length,
          },
        })
      );
    }

    return res(
      ctx.status(404),
      ctx.json({
        error: {
          message: "Products not found",
        },
      })
    );
  }),
  rest.get("/products/:id", (req, res, ctx) => {
    const { id } = req.params;
    const index = Number(id) - 1;
    const product = productsData[index];

    if (product) {
      return res(
        ctx.json({
          data: {
            product,
          },
        })
      );
    }

    return res(
      ctx.status(404),
      ctx.json({
        error: {
          message: "Product not found",
        },
      })
    );
  }),
];

export default handlers;
