import { useNavigate, useParams } from "react-router-dom";
import StududeHeading from "src/components/common/StududeHeading";
import PageCard from "src/components/notebook/PageCard";
// import NewPageCard from "src/components/notebook/page/NewPageCard";
import { useGetNotebookByIdQuery } from "src/slices/notebookApiSlice";
// import { useCreateNotebookPageByIdMutation } from "s rc/slices/notebookPageApiSlice";

export default function NotebookPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) navigate("/");

  const { data: notebook, isLoading } = useGetNotebookByIdQuery(id as string);

  if (isLoading) return <>Loading</>;

  return (
    <main className="">
      <div className="flex flex-col">
        <h1 className="text-5xl font-bold text-primary">{notebook?.title}</h1>
        <p className="text-gray-400">A Javascript Framework</p>
      </div>
      <div>
        <div>
          <StududeHeading title="Pages" />
          {notebook?.page.map((page) => (
            <PageCard
              pageId={page._id}
              title={page.title as string}
              contentPeek={[
                "loremloremloremloremloremloremloremlorem",
                "loremloremloremloremloremloremloremlorem",
                "loremloremloremloremloremloremloremlorem",
                "loremloremloremloremloremloremloremlorem",
              ]}
            />
          ))}
          {/* <NewPageCard /> */}
        </div>
        <div>
          <StududeHeading title="Recaps" />
        </div>
      </div>
    </main>
  );
}
