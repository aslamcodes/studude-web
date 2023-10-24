import NotebooksCardsContainer from "src/components/notebook/NotebooksCardsContainer";
import UserGreeting from "src/components/home/UserGreeting";
import RecapCardsContainer from "src/components/recap/RecapCardsContainer";
import { Sidebar } from "src/components/common/Sidebar";
import { useGetNotebookForUserQuery } from "src/slices/notebookApiSlice";

export default function Home() {
  const { data: notebooks, isLoading, error } = useGetNotebookForUserQuery();

  if (isLoading) return <>Loading</>;
  if (error || !notebooks) return <>{JSON.stringify(error)}</>;

  return (
    <section className="flex flex-col gap-6 mx-28 mt-28">
      <Sidebar />
      <UserGreeting />
      <RecapCardsContainer />
      <NotebooksCardsContainer notebooks={notebooks} />
    </section>
  );
}
