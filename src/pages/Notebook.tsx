import { useNavigate, useParams } from "react-router-dom";
import StududeHeading from "src/components/common/StududeHeading";
import CreatePageCard from "src/components/notebook/CreatePageCard";
import PageCard from "src/components/notebook/PageCard";
import RecapCard from "src/components/recap/RecapCard";
// import NewPageCard from "src/components/notebook/page/NewPageCard";
import { useGetNotebookByIdQuery } from "src/slices/notebookApiSlice";
// import { useCreateNotebookPageByIdMutation } from "s rc/slices/notebookPageApiSlice";

export default function NotebookPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) navigate("/");

  const { data: notebook, isLoading } = useGetNotebookByIdQuery(id as string);

  if (isLoading) return <>Loading</>;
  console.log(notebook);
  if (!notebook) return <>Error</>;

  return (
    <main className="mx-28 mt-28">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-primary">{notebook?.title}</h1>
        <p className="text-gray-400">A Javascript Framework</p>
      </div>
      <div className="mt-10 flex justify-between gap-10">
        <div className="">
          <StududeHeading title="Pages" />
          <div className="flex flex-wrap gap-3 mt-3">
            {notebook?.page.map((page) => (
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
            <CreatePageCard notebookId={notebook?._id} />
          </div>
        </div>
        <div>
          <StududeHeading title="Recaps" />
          {[
            "loremloremloremloremloremloremloremlorem",
            "loremloremloremloremloremloremloremlorem",
            "loremloremloremloremloremloremloremlorem",
            "loremloremloremloremloremloremloremlorem",
            "loremloremloremloremloremloremloremlorem",
            "loremloremloremloremloremloremloremlorem",
          ].map(() => (
            <RecapCard
              isRevised
              lastRevisited={new Date()}
              notebookId="12312"
              recapTitle="Hey There"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
