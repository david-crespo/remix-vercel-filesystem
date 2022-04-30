import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { readContentDir } from "~/util/fs.server";

export const loader: LoaderFunction = async () => {
  const files = await readContentDir();
  return json(files);
};

export default function Index() {
  const files = useLoaderData<string[]>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Your files</h1>
      <ul>
        {files.map((file) => (
          <li key={file}>
            <a href={"/" + file}>{file}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
