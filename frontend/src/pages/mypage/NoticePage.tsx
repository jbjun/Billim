import BillimAccordion, {
  IAccordionProps,
} from "@components/common/BillimAccordion";
import Header from "@components/layout/Header";
import React from "react";

const accordions: IAccordionProps[] = [
  {
    title: "첫 번째 공지입니다.",
    time: "2023.03.20",
    content:
      "첫 번째 공지입니다. 첫 번째 공지입니다. 첫 번째 공지입니다. 첫 번째 공지입니다. 첫 번째 공지입니다. ",
  },
  {
    title: "두 번째 공지입니다.",
    time: "2023.03.26",
    content:
      "두 번째 공지입니다. 두 번째 공지입니다. 두 번째 공지입니다. 두 번째 공지입니다. 두 번째 공지입니다. 두 번째 공지입니다. ",
  },
];
function NoticePage() {
  return (
    <>
      <Header title="공지사항" needBackHistory />
      <BillimAccordion accordions={accordions} />
    </>
  );
}

export default NoticePage;
