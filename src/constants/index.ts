import { facebook, instagram, wwf, makeAWish, unicef, saveTheChildren, redCross, oxfam, cancerResearch } from "@/assets";

const causes = [
  {
    title: "Make a Wish",
    description:
      "Make-A-Wish is a non-profit organization that arranges experiences described as 'wishes' to children with critical illnesses.",
    image: makeAWish,
  },
  {
    title: "WWF",
    description:
      "The World Wide Fund for Nature is an international non-governmental organization founded in 1961, working in the field of wilderness preservation, and the reduction of human impact on the environment.",
    image: wwf,
  },
  {
    title: "UNICEF",
    description:
      "The United Nations International Children's Emergency Fund is a United Nations agency responsible for providing humanitarian and developmental aid to children worldwide.",
    image: unicef,
  },
  {
    title: "Save the Children",
    description:
      "The Save the Children Fund, commonly known as Save the Children, is an international non-governmental organization that promotes children's rights, provides relief and helps support children in developing countries.",
    image: saveTheChildren,
  },
  {
    title: "Red Cross",
    description:
      "The International Red Cross and Red Crescent Movement is an international humanitarian movement with approximately 97 million volunteers, members and staff worldwide.",
    image: redCross,
  },
  {
    title: "Oxfam",
    description:
      "Oxfam is a confederation of 20 independent charitable organizations focusing on the alleviation of global poverty, founded in 1942 and led by Oxfam International.",
    image: oxfam,
  },
  {
    title: "Cancer Research",
    description:
      "Cancer Research UK is a cancer research and awareness charity in the United Kingdom and is the world's largest independent cancer research charity.",
    image: cancerResearch,
  },
];

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/Klauwaerts/?locale=nl_BE",
    icon: facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/deklauwaerts/",
    icon: instagram,
  },
];

export { causes, socials };
