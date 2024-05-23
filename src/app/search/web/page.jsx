// "use client";
// import { useRouter } from "next/navigation";
// eslint-disable-next-line @next/next/no-async-client-component
import Link from "next/link";
import WebSearchResults from "../../components/WebSearchResults";
const WebSearch = async ({ searchParams }) => {
  // const router = useRouter();
  const startIndex = searchParams.start || "1";
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
  );
  const data = await response.json();
  const results = data.items;
  // console.log(results);
  if (!results) {
    return (
      <div className="flex flex-col mt-10 justify-center items-center">
        <h1 className="">Nothing found for {searchParams.searchTerm}</h1>
        <Link
          className="mt-5 hover:underline hover:text-amber-500"
          // onClick={router.push("/")}
        >
          Home
        </Link>
      </div>
    );
  }
  return (
    <div>
      <WebSearchResults results={data} />
    </div>
  );
};

export default WebSearch;
