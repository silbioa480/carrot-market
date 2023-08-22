import {NextPage} from "next";
import Layout from "@/components/layout";
import Input from "@/components/input";
import TextArea from "@/components/textarea";
import Button from "@/components/button";

const Create: NextPage = () => {
  return (
    <Layout canGoBack title={"Go Live"}>
      <form className=" space-y-4 py-10 px-4">
        {/* Input Item Name */}
        <Input required label="Name" name="name" type="text"/>

        {/* Input Item Price */}
        <Input
          required
          label="Price"
          placeholder="0.00"
          name="price"
          type="text"
          kind="price"
        />

        {/* Input Item Description */}
        <TextArea name="description" label="Description"/>

        {/* Upload Product Button */}
        <Button text="Go live"/>
      </form>
    </Layout>
  );
};

export default Create;