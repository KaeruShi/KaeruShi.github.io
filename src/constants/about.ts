import { MyIcons } from "@/components/icons/MyIcons";

export const interest = [
  { name: "Anime", icon: MyIcons.anime },
  { name: "Gaming", icon: MyIcons.gaming },
  { name: "Coding", icon: MyIcons.coding },
  { name: "Design", icon: MyIcons.design },
];

export const skills = {
  programmingLanguages: [
    {
      icons: [MyIcons.kotlin, MyIcons.java, MyIcons.compose, MyIcons.html, MyIcons.css, MyIcons.js],
      description:
        "Master Android app development using Kotlin, Java, XML and Compose, as well as web fundamentals with HTML, CSS, and JavaScript. Focus on clean code, a clean UI, and a pleasant user experience.",
    },
  ],
  designs: [
    {
      icons: [MyIcons.figma, MyIcons.photoshop, MyIcons.canva],
      description:
        "Familiar with using Figma, Photoshop, and Canva for UI design, prototyping, and visual needs with a functional and aesthetic approach.",
    },
  ],
  others: [
    {
      icons: [MyIcons.excel, MyIcons.box, MyIcons.tools],
      description:
        "Experienced in warehouse administration including stock recording, incoming and outgoing goods, and report creation using Microsoft Excel, and accustomed to troubleshooting computers and operational devices.",
    },
  ],
};

export const languages = [
  { name: "Indonesian", icon: MyIcons.indo, level: "96%" },
  { name: "English", icon: MyIcons.eng, level: "55%" },
  { name: "Japanese", icon: MyIcons.japan, level: "30%" },
  { name: "Korean", icon: MyIcons.korean, level: "10%" },
];

export const edu = [
  { school: "MI AL FALAH", grade: "Elementary School", year: "2015" },
  { school: "MTsN 2 BREBES", grade: "Junior High School", year: "2018" },
  { school: "SMK N 1 BREBES", grade: "Teknik Komputer Jaringan", year: "2021" },
];

export const workExperience = {
  company: "PT Danendra Paksi Ababil",
  subtitle: "Nyongkon Accessories",
  period: "2023 - 2026",
  roles: [
    {
      title: "Crew Store",
      responsibilities: [
        "Provide friendly, prompt, and solution-oriented customer service to enhance customer satisfaction.",
        "Arrange and maintain product displays in accordance with visual merchandising standards, and ensure the work area is always clean and comfortable.",
        "Record and check inventory regularly, including handling rejected/damaged items according to procedures.",
        "Operate the cash register (POS), process payment transactions, and ensure the accuracy of daily sales data.",
      ],
    },
    {
      title: "Staff IT",
      responsibilities: [
        "Compile and monitor sales reports and inventory recaps periodically to support operational decision-making.Menyusun dan memantau laporan penjualan serta rekap stok barang secara berkala untuk mendukung pengambilan keputusan operasional.",
        "Input, update and validate item data in the system so that the data is always accurate and up to date.",
        "Record and control incoming and outgoing goods (receipt, expenditure, returns) and ensure data conformity with physical stock.",
        "Manage warehouse stock, including routine checking, structuring and coordinating stock needs with related teams.",
        "Handle basic computer/network/application device troubleshooting, including installation, configuration, and technical support for employees.",
      ],
    },
  ],
};