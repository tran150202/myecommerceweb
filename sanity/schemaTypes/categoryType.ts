import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Danh mục",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Tên danh mục",
      type: "string",
      description: "Tên của danh mục.",
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .max(50)
          .warning("Tên danh mục nên có từ 3–50 ký tự."),
    }),
    defineField({
      name: "slug",
      title: "Đường dẫn",
      type: "slug",
      description: "Đường dẫn thân thiện cho danh mục này.",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Đường dẫn là bắt buộc."),
    }),
    defineField({
      name: "description",
      title: "Mô tả",
      type: "text",
      description: "Mô tả ngắn gọn về danh mục này.",
      validation: (Rule) =>
        Rule.max(200).warning("Mô tả không nên vượt quá 200 ký tự."),
    }),
    defineField({
      name: "image",
      title: "Hình ảnh",
      type: "image",
      description: "Hình ảnh tùy chọn để đại diện cho danh mục.",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "isFeatured",
      title: "Nổi bật",
      type: "boolean",
      description: "Đánh dấu nếu danh mục này là nổi bật.",
      initialValue: false,
    }),
    defineField({
      name: "createdAt",
      title: "Ngày tạo",
      type: "datetime",
      description: "Ngày và giờ danh mục này được tạo.",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle || "Không có mô tả",
        media,
      };
    },
  },
});
