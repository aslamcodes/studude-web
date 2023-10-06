import React from "preact";
import { DynamicInputProps } from "@/components/notebook/page/DynamicInput";
import NoteEditor from "@/components/notebook/page/NoteEditor";
import NotebookHeaderActions from "@/components/notebook/page/NotebookHeaderActions";
import { BookmarkIcon } from "@heroicons/react/24/outline";

const dummy: DynamicInputProps[] = [
  { type: "h1", content: "Type here to get started...", id: "jansdk" },
];

export default function NotebookPage() {
  return (
    <section className="w-full mt-32">
      <header className="mx-auto w-2/3">
        <div className="text-gray-400 flex gap-px my-3">
          <BookmarkIcon width={19} />
          <span className="text-base font-bold">React Notes</span>
        </div>
        <div>
          <h1 className="text-5xl text-primary font-bold">Use Effect Hook</h1>
          <NotebookHeaderActions />
        </div>
      </header>
      <main className="mx-auto w-2/3 mt-10">
        <NoteEditor initialNotes={dummy} />
      </main>
    </section>
  );
}
