import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Products",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "name",
      title: "Tên sản phẩm",
      type: "string",
      description: "Tên của sản phẩm.",
      validation: (Rule) => Rule.required().error("Tên sản phẩm là bắt buộc."),
    }),
    defineField({
      name: "slug",
      title: "Đường dẫn",
      type: "slug",
      description: "Đường dẫn URL cho sản phẩm.",
      options: {
        source: "name", // Tự động tạo slug từ tên sản phẩm
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Slug là bắt buộc."),
    }),
    defineField({
      name: "image",
      title: "Hình ảnh sản phẩm",
      type: "image",
      description: "Hình ảnh đại diện cho sản phẩm.",
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.required().error("Hình ảnh sản phẩm là bắt buộc."),
    }),
    defineField({
      name: "description",
      title: "Mô tả",
      type: "blockContent",
      description: "Mô tả chi tiết về sản phẩm.",
    }),
    defineField({
      name: "price",
      title: "Giá",
      type: "number",
      description: "Giá của sản phẩm (VNĐ).",
      validation: (Rule) =>
        Rule.required().min(0).error("Giá sản phẩm phải lớn hơn hoặc bằng 0."),
    }),
    defineField({
      name: "categories",
      title: "Danh mục",
      type: "array",
      description: "Danh mục mà sản phẩm này thuộc về.",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "stock",
      title: "Số lượng tồn kho",
      type: "number",
      description: "Số lượng sản phẩm còn trong kho.",
      validation: (Rule) =>
        Rule.min(0).error("Số lượng tồn kho không được nhỏ hơn 0."),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "price",
    },
    prepare(select) {
      return {
        title: select.title,
        subtitle: select.subtitle ? `${select.subtitle} VNĐ` : "Chưa có giá",
        media: select.media,
      };
    },
  },
});
