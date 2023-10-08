import { RecapCardProps } from "src/components/recap/RecapCard";
import NotebooksCardsContainer from "src/components/notebook/NotebooksCardsContainer";
import { NotebookCardsProps } from "src/components/notebook/NotebookCards";
import UserGreeting from "src/components/home/UserGreeting";
import RecapCardsContainer from "src/components/recap/RecapCardsContainer";
import useSWR from "swr";
import { fetcher } from "src/utils";
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
  const { data, error } = useSWR<NotebookCardsProps[]>(
    "/api/get-user-notebook",
    fetcher
  );

  return (
    <section className="flex flex-col gap-6 mx-28 mt-28">
      <UserGreeting />
      <RecapCardsContainer recaps={fakeRecapData} />
      <NotebooksCardsContainer notebooks={fakeData} />
    </section>
  );
}
