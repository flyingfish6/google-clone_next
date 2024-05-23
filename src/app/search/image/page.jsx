// "use client";
// import { useRouter } from "next/navigation";
// eslint-disable-next-line @next/next/no-async-client-component
import Link from "next/link";
import ImageSearchResults from "../../components/ImageSearchResults";
import delay from "delay";
const WebSearch = async ({ searchParams }) => {
  await delay(1000);
  // const router = useRouter();
  const startIndex = searchParams.start || "1";
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  );
  const data = await response.json();
  const results = data.items;
  console.log(results);
  if (!results) {
    return (
      <div className="flex flex-col mt-10 justify-center items-center">
        <h1 className="">Nothing found for {searchParams.searchTerm}</h1>
        <Link
          className=" mt-5 hover:underline text-amber-500"
          // onClick={router.push("/")}
        >
          Home
        </Link>
      </div>
    );
  }
  return (
    <div>
      <ImageSearchResults results={data} />
    </div>
  );
};

export default WebSearch;
