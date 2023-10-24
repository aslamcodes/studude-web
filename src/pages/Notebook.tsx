import { useNavigate, useParams } from "react-router-dom";
import StududeHeading from "src/components/common/StududeHeading";
import CreatePageCard from "src/components/notebook/CreatePageCard";
import PageCard from "src/components/notebook/PageCard";
import RecapCard from "src/components/recap/RecapCard";
// import NewPageCard from "src/components/notebook/page/NewPageCard";
import { useGetNotebookByIdQuery } from "src/slices/notebookApiSlice";
import { useGetRecapForUserQuery } from "src/slices/recapApiSlice";
// import { useCreateNotebookPageByIdMutation } from "s rc/slices/notebookPageApiSlice";

export default function NotebookPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) navigate("/");

  const { data: notebooks, isLoading } = useGetNotebookByIdQuery(id as string);
  const { data: recaps } = useGetRecapForUserQuery({
    notebookId: notebooks?._id,
  });

  if (isLoading) return <>Loading</>;

  if (!notebooks) return <>Error</>;
  console.log(notebooks);
  return (
    <main className="mx-28 mt-28">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-primary">{notebooks?.title}</h1>
        <p className="text-gray-400">A Javascript Framework</p>
      </div>
      <div className="mt-10 flex justify-between gap-10">
        <div className="">
          <StududeHeading title="Pages" />
          <div className="flex flex-wrap gap-3 mt-3">
            {notebooks?.pages.map((page) => (
              <PageCard
                key={page._id}
                pageId={page._id}
                title={page.title as string}
                contentPeek={[
                  "loremloremloremloremloremloremloremlorem",
                  "loremloremloremloremloremloremloremlorem",
                ]}
              />
            ))}
            <CreatePageCard notebookId={notebooks?._id} />
          </div>
        </div>
        <div>
          <StududeHeading title="Recaps" />
          <div className="flex flex-col gap-3 mt-3">
            {recaps?.data.map((recap) => (
              <RecapCard
                isRevised={recap.isRevised}
                lastRevisited={new Date(recap.nextRepetition)}
                notebookId={recap.notebook}
                recapTitle={recap.page.title}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
