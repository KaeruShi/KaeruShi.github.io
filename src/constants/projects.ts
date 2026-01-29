import { MyIcons } from "@/components/icons/MyIcons";

export const projects = [
  {
    name: "Weeabooify",
    description: "A beautiful and aesthetic theme engine for AOSP",
    icon: MyIcons.weeabooify,
    link: "https://github.com/KaeruShi/Weeabooify",
    technologies: [
      { name: "Kotlin", icon: MyIcons.kotlin, class: "w-9" },
      { name: "Java", icon: MyIcons.java, class: "w-8" },
      { name: "XML", icon: MyIcons.xml, class: "w-12" },
      { name: "Terminal", icon: MyIcons.terminal },
      { name: "Android", icon: MyIcons.android, class: "w-11" },
    ],
  },
  {
    name: "Uwuify",
    description: "A theme engine for Android Q which can customize your boring stock UI",
    icon: MyIcons.uwuify,
    link: "https://github.com/KaeruShi/Uwuify",
    technologies: [
      { name: "Kotlin", icon: MyIcons.kotlin, class: "w-9" },
      { name: "Java", icon: MyIcons.java, class: "w-8" },
      { name: "XML", icon: MyIcons.xml, class: "w-12" },
      { name: "Terminal", icon: MyIcons.terminal },
      { name: "Android", icon: MyIcons.android, class: "w-11" },
    ],
  },
  {
    name: "Monetify",
    description:
      "A theme engine which can customize third party app colors written in jetpack compose",
    icon: MyIcons.monetify,
    link: "https://github.com/KaeruShi/Monetify",
    technologies: [
      { name: "Kotlin", icon: MyIcons.kotlin, class: "w-9" },
      { name: "Compose", icon: MyIcons.compose, class: "w-8 mr-1" },
      { name: "Terminal", icon: MyIcons.terminal },
      { name: "Android", icon: MyIcons.android, class: "w-11" },
    ],
  },
];