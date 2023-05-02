import BillimAccordion, {
  IAccordionProps,
} from "@components/common/BillimAccordion";
import Header from "@components/layout/Header";
import React from "react";

const accordions: IAccordionProps[] = [
  {
    title: "자주 묻는 질문 첫 번째",
    time: "2023.03.20",
    content:
      "자주 묻는 질문 첫 번째 자주 묻는 질문 첫 번째 자주 묻는 질문 첫 번째 자주 묻는 질문 첫 번째 자주 묻는 질문 첫 번째 자주 묻는 질문 첫 번째 자주 묻는 질문 첫 번째 ",
  },
  {
    title: "자주 묻는 질문 두 번째",
    time: "2023.03.26",
    content:
      "자주 묻는 질문 두 번째 자주 묻는 질문 두 번째 자주 묻는 질문 두 번째 자주 묻는 질문 두 번째 자주 묻는 질문 두 번째 자주 묻는 질문 두 번째 ",
  },
];
function FAQPage() {
  return (
    <>
      <Header title="FAQ" needBackHistory />
      <BillimAccordion accordions={accordions} />
    </>
  );
}

export default FAQPage;
