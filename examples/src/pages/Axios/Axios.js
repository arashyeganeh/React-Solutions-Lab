import PrefaceComponent from "../../components/Axios/Preface";
import BasicRequestComponent from "../../components/Axios/BasicRequest";
import FilterComponent from "../../components/Axios/Filter";
import LoadingComponent from "../../components/Axios/Loading";
import InfiniteScrollComponent from "../../components/Axios/InfiniteScroll";
import SubmitFormComponent from "../../components/Axios/SubmitForm";

function AxiosTutorial() {
  return (
    <>
      <PrefaceComponent />
      <BasicRequestComponent />
      <FilterComponent />
      <LoadingComponent />
      <InfiniteScrollComponent />
      <SubmitFormComponent />
    </>
  );
}

export default AxiosTutorial;
