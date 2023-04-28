import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProductCard from "./ProductCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/ProductCard",
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  address: "광진구 자양동",
  title: "가정용 해머드릴 키트",
  price: "10,000원",
  per: "day",
};
