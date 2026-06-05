import FileList from "../_components/FileList";
import ListLayout from "../_components/ListLayout";

export default function Home() {
  return (
    <ListLayout>
      <FileList
        files={[]}
        placeholderText="Looks like you need all of your files!"
      />
    </ListLayout>
  );
}
