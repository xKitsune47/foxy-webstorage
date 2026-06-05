import FileList from "../_components/FileList";
import ListLayout from "../_components/ListLayout";

export default function Home() {
  return (
    <ListLayout>
      <FileList files={[]} placeholderText="No files have been shared yet..." />
    </ListLayout>
  );
}
