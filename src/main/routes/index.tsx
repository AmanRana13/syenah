import Tags from "../common/tags";
import ButtonList from "../components/switchList";
import images from "../utils/constants/images";

const SetUp = () => {
  return (
    <>
      {/* <Tags
        label={"Tag"}
        variant={"outlined"}
        avatar={{ image: images.tagUser, alt: "user" }}
        circle
      />
      <br/>
      <br/>
      <Tags label={"Tag"} variant={"outlined"} circle/> <br/>
      <br/>
      <Tags
        label={"Search tag"}
        variant={"outlined"}
        avatar={{ image: images.tagUser, alt: "user" }}
        onDelete={() => {}}
      /> <br/>
      <br/>
      <Tags label={"Tag"} variant={"outlined"} onDelete={() => {}} /> */}
      <ButtonList/>
    </>
  );
};

export default SetUp;
