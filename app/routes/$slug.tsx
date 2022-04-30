import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { readContentDir, readContentFile } from "~/util/fs.server";

export const loader: LoaderFunction = async ({ params }) => {
  const files = await readContentDir();
  const fileName = files.find((f) => f === params.slug!);
  if (!fileName) {
    throw new Response("Not Found", { status: 404 });
  }
  const contents = await readContentFile(fileName);
  return json({ fileName, contents });
};

export default function Index() {
  const { fileName, contents } = useLoaderData<{
    fileName: string;
    contents: string;
  }>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>
        Contents of file <code>{fileName}</code>
      </h1>
      <div style={{ border: "1px solid black", padding: 20 }}>{contents}</div>
    </div>
  );
}
