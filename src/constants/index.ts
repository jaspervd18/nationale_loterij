import {
  facebook,
  instagram,
  wwf,
  makeAWish,
  unicef,
  saveTheChildren,
  oxfam,
  cancerResearch,
  brailleLiga,
  deWarmsteWeek,
  kinderarmoedefonds,
  acid,
  averageRob,
  floWindey,
  gloriaMonserez,
  arnoTheKid,
} from "@/assets";

const causes = [
  {
    title: "Make a Wish",
    description:
      "Make-A-Wish is a non-profit organization that arranges experiences described as 'wishes' to children with critical illnesses.",
    image: makeAWish,
    likes: 79,
  },
  {
    title: "WWF",
    description:
      "The World Wide Fund for Nature is an international non-governmental organization founded in 1961, working in the field of wilderness preservation, and the reduction of human impact on the environment.",
    image: wwf,
    likes: 63,
  },
  {
    title: "UNICEF",
    description:
      "The United Nations International Children's Emergency Fund is a United Nations agency responsible for providing humanitarian and developmental aid to children worldwide.",
    image: unicef,
    likes: 114,
  },
  {
    title: "Save the Children",
    description:
      "The Save the Children Fund, commonly known as Save the Children, is an international non-governmental organization that promotes children's rights, provides relief and helps support children in developing countries.",
    image: saveTheChildren,
    likes: 98,
  },
  {
    title: "Oxfam",
    description:
      "Oxfam is a confederation of 20 independent charitable organizations focusing on the alleviation of global poverty, founded in 1942 and led by Oxfam International.",
    image: oxfam,
    likes: 476,
  },
  {
    title: "Cancer Research",
    description:
      "Cancer Research UK is a cancer research and awareness charity in the United Kingdom and is the world's largest independent cancer research charity.",
    image: cancerResearch,
    likes: 123,
  },
  {
    title: "Braille Liga",
    description:
      "The Brailleliga is a Belgian association that helps blind and visually impaired people.",
    image: brailleLiga,
    likes: 56,
  },
  {
    title: "De Warmste Week",
    description:
      "De Warmste Week is a charity event in Flanders, Belgium, organized by the public broadcaster VRT. It is held annually in the week before Christmas.",
    image: deWarmsteWeek,
    likes: 789,
  },
  {
    title: "Kinderarmoedefonds",
    description:
      "The Kinderarmoedefonds is a Belgian charity that fights child poverty.",
    image: kinderarmoedefonds,
    likes: 23,
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

const faq = [
  {
    question: "How does buying a lottery ticket support community causes?",
    answer:
      "A portion of the proceeds from every ticket sold goes towards supporting community causes that are chosen by players. Additionally, we will feature crazy video ideas linked to one or more causes, and players can vote for their favorite idea. At the end of the month, we will make the video using a famous influencer, and donate the profits from the game to the chosen cause(s). By playing the lottery, you can make a positive impact on your community and support causes that matter to you.",
  },
  {
    question:
      "Is participating in the lottery a safe and responsible activity?",
    answer:
      "Participating in the lottery can be a fun and entertaining activity, but it's important to approach it in a responsible way. We encourage all players to set limits on their spending, to know when to stop, and to seek help if they feel that gambling is becoming a problem. We also encourage players to support causes that align with their values and beliefs.",
  },
  {
    question: "How do you ensure the integrity and fairness of the lottery?",
    answer:
      "We use state-of-the-art technology and rigorous security measures to ensure that all lottery games are fair and unbiased. Our games are regularly audited by independent third-party organizations to ensure that the results are truly random and that players have an equal chance of winning. We are committed to maintaining the highest standards of integrity and fairness in all aspects of our operations.",
  },
  {
    question:
      "Can anyone participate in supporting community causes, or do you have to be a winner?",
    answer:
      "Anyone who buys a lottery ticket can participate in supporting community causes. You don't have to be a winner to make a difference in your community - every ticket sold helps to support important causes. Additionally, players can vote for their favorite crazy video idea linked to one or more causes, and the profits from the game will be donated to the chosen cause(s).",
  },
  {
    question: "How can I find out which community causes are being supported?",
    answer:
      "We regularly update our website and social media channels with information about the community causes that are being supported. You can also check your local news sources to find out about the impact that lottery proceeds are having in your community. Additionally, we will feature crazy video ideas linked to one or more causes, and players can vote for their favorite idea. At the end of the month, we will make the video using a famous influencer, and donate the profits from the game to the chosen cause(s).",
  },
];

const videoIdeas = [
  {
    title: "Plant 10.000 trees with the help of disabled people",
    cause: "WWF, Oxfam",
    votes: 1200,
    collaborators: "Average Rob",
  },
  {
    title: "A thousand blind guiding dogs cuddling with orphans",
    cause: "De warmste week",
    votes: 1167,
    collaborators: "Acid",
  },
  {
    title: "10.000 children have their own theme park for a day",
    cause: "Kinderarmoedefonds",
    votes: 987,
    collaborators: "Flo Windey",
  },
];

const goals = [
  {
    title: "Donation Goal",
    description: "Track your progress towards a donation goal for your chosen cause.",
    progress: 0.65
  },
  {
    title: "Video Idea Requests",
    description: "Track the number of video idea requests you've made.",
    progress: 0.25
  },
  {
    title: "Votes Cast",
    description: "Track the number of votes you've cast for your favorite cause's video idea.",
    progress: 0.9
  },
  {
    title: "Social Sharing",
    description: "Track the number of times you've shared the campaign on social media.",
    progress: 0.5
  },
  {
    title: "Referrals",
    description: "Track the number of people you've referred to the campaign.",
    progress: 0.1
  }
]

const collaborators = [
  {
    name: "Average Rob",
    image: averageRob,
  },
  {
    name: "Acid",
    image: acid,
  },
  {
    name: "Flo Windey",
    image: floWindey,
  },
  {
    name: "Gloria Monserez",
    image: gloriaMonserez,
  },
  {
    name: "Arno The Kid",
    image: arnoTheKid,
  },
];

export { causes, socials, faq, goals, videoIdeas, collaborators };
