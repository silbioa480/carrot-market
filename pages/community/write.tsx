import {NextPage} from "next";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import Button from "@/components/button";

const Write: NextPage = () => {
  return (
    <Layout canGoBack title={"Write Post"}>
      <form className={"px-4 space-y-4"}>
        {/* Input Question */}
        <TextArea required placeholder="Ask a question!"/>

        {/* Submit */}
        <Button text="Submit"/>
      </form>
    </Layout>
  )
}

export default Write;