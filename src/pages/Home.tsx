import { RecapCardProps } from "@/components/recap/RecapCard";
import NotebooksCardsContainer from "@/components/notebook/NotebooksCardsContainer";
import { NotebookCardsProps } from "@/components/notebook/NotebookCards";
import UserGreeting from "@/components/home/UserGreeting";
import RecapCardsContainer from "@/components/recap/RecapCardsContainer";

const fakeData: NotebookCardsProps[] = [
  {
    notebookId: "1",
    pageCards: [
      {
        pageId: "1",
        contentPeek: [
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error distinctio ex necessitatibus officia non assumenda molestiae, magni eius. Sed ullam autem animi officia vitae omnis, eligendi fugiat possimus cupiditate laudantium.",
        ],
        title: "Random Page in it",
      },
    ],
    title: "Random Note",
  },
  {
    notebookId: "2",
    pageCards: [
      {
        pageId: "1",
        contentPeek: [
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error distinctio ex necessitatibus officia non assumenda molestiae, magni eius. Sed ullam autem animi officia vitae omnis, eligendi fugiat possimus cupiditate laudantium.",
        ],
        title: "Random Page in it",
      },
      {
        pageId: "2",
        contentPeek: [
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error distinctio ex necessitatibus officia non assumenda molestiae, magni eius. Sed ullam autem animi officia vitae omnis, eligendi fugiat possimus cupiditate laudantium.",
        ],
        title: "Random Page in it",
      },
      {
        pageId: "3",
        contentPeek: [
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error distinctio ex necessitatibus officia non assumenda molestiae, magni eius. Sed ullam autem animi officia vitae omnis, eligendi fugiat possimus cupiditate laudantium.",
        ],
        title: "Random Page in it",
      },
    ],
    title: "Random Note",
  },
];

const fakeRecapData: RecapCardProps[] = [
  {
    notebookId: "1",
    recapTitle: "React",
    lastRevisited: new Date(),
    isRevised: true,
  },
  {
    notebookId: "2",
    recapTitle: "React",
    lastRevisited: new Date(),
    isRevised: false,
  },
  {
    notebookId: "3",
    recapTitle: "React",
    lastRevisited: new Date(),
    isRevised: false,
  },
  {
    notebookId: "4",
    recapTitle: "React",
    lastRevisited: new Date(),
    isRevised: false,
  },
  {
    notebookId: "5",
    recapTitle: "React",
    lastRevisited: new Date(),
    isRevised: true,
  },
];

export default function Home() {
  return (
    <section className="flex flex-col gap-6 mx-28 mt-28">
      <UserGreeting />
      <RecapCardsContainer recaps={fakeRecapData} />
      <NotebooksCardsContainer notebooks={fakeData} />
    </section>
  );
}
