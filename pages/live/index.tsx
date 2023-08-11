import {NextPage} from "next";
import Layout from "@/components/layout";

const Lives: NextPage = () => {
  return (
    <Layout hasTabBar title={"라이브"}>
      <div className={"py-10 px-4 divide-y-2 space-y-4"}>
        {
          [1, 1, 1, 1, 1, 1, 1].map((_, i) => (
            <div key={i} className={"pt-4 px-4"}>
              {/* Video */}
              <div className={"w-full bg-slate-300 aspect-video rounded-md shadow-sm"}></div>

              {/* Video Name */}
              <h3 className={"text-gray-700 text-lg mt-2"}>Let&apos;s try potatos</h3>
            </div>
          ))
        }

        {/* Upload Button */}
        <button className={"fixed bottom-24 right-5 shadow-xl bg-orange-400 rounded-full p-4 text-white " +
          "hover:bg-orange-500 cursor-pointer transition-colors border-transparent"}>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Lives;