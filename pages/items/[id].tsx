import type {NextPage} from "next";
import Layout from "@/components/layout";

const ItemDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className={"px-4 py-10"}>
        <div className={"mb-8"}>

          {/* Item Image */}
          <div className={"h-96 bg-slate-300"}/>

          {/* User */}
          <div className={"flex cursor-pointer py-3 border-t border-b items-center space-x-3"}>
            {/* Profile Image*/}
            <div className={"w-12 h-12 rounded-full bg-slate-300"}/>

            <div>
              {/* User Name */}
              <p className={"text-sm font-medium text-gray-700"}>Steve Jebs</p>

              {/* Link to /profile */}
              <p className={"text-xs font-medium text-gray-700"}>View profile &rarr;</p>
            </div>
          </div>

          {/* Item */}
          <div className={"mt-5"}>
            {/* Item Name */}
            <h1 className={"text-3xl font-bold text-gray-900"}>Galaxy S50</h1>

            {/* Item Price */}
            <span className={"text-3xl mt-3 text-gray-900 block"}>$140</span>

            {/* Item Description */}
            <p className={"my-6 text-gray-700"}>
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace else
              and get it, I&apos;m gonna shoot you in the head then and there.
              Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
              my goddamn money is. She gonna tell me too. Hey, look at me when
              I&apos;m talking to you, motherfucker. You listen: we go in there,
              and that ni**a Winston or anybody else is in there, you the first
              motherfucker to get shot. You understand?
            </p>

            <div className={"flex items-center justify-between space-x-2"}>
              {/* Talk to sellar Button */}
              <button className={"flex-1 bg-orange-500 text-white py-3 rounded-md font-medium hover:bg-orange-600 " +
                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"}>
                Talk to seller
              </button>

              {/* Heart */}
              <button
                className={"p-3 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 rounded-md"}>
                <svg
                  className="h-6 w-6 "
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Similar Items */}
        <div>
          <h2 className={"text-2xl font-bold text-gray-900"}>Similar items</h2>
          <div className={"grid grid-cols-2 gap-4 mt-6"}>
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                {/* Item Image */}
                <div className={"h-56 w-full bg-slate-300"}/>

                {/* Item Name */}
                <h3 className={"text-gray-700 -mb-1"}>Galaxy S60</h3>

                {/* Item Price */}
                <span className={"text-sm font-medium text-gray-900"}>$6</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;