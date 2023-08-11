import {NextPage} from "next";
import Layout from "@/components/layout";

const Index: NextPage = () => {
  return (
    <Layout hasTabBar title={"채팅"}>
      <div className={"py-10 divide-y-[1px]"}>
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          // Chat
          <div key={i} className={"flex px-4 cursor-pointer py-3 items-center space-x-3"}>
            {/* User Profile Image*/}
            <div className={"w-12 h-12 rounded-full bg-slate-300"}/>
            <div>
              {/* User Name */}
              <p className={"text-gray-700"}>Steve Jebs</p>

              {/* Latest Chat */}
              <p className={"text-sm text-gray-700"}>See you tomorrow in the corner at 2pm!</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Index