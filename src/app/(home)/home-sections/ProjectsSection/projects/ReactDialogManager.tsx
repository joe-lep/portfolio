import SqueezeContainer from "@/components/SqueezeContainer";
import LibraryEntry from "../LibraryEntry";

export default function ReactDialogManager() {
  return (
    <LibraryEntry
      title="React Dialog Manager"
      githubUrl="https://github.com/joe-lep/react-dialog-manager"
      npmUrl="https://www.npmjs.com/package/@joe-lep/react-dialog-manager"
    >
      <SqueezeContainer>
        <p>
          Lightweight library to simplify and streamline dialog workflow in
          React. Users can add and remove Dialogs/Modals directly to the
          Virtual DOM from code without needing to implement them in the
          page&apos;s JSX ahead of time. More importantly, the manager gives
          users the capability to add submission to dialogs, which will be
          passed to the code that opened the modal in a promise-like callback.
          This makes it easy to add forms to modals that are opened
          conditionally and then handle the form data in the same function or
          to open simple confirmation dialogs.
        </p>
      </SqueezeContainer>
    </LibraryEntry>
  );
}
