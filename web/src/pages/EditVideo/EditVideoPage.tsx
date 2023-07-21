import Panel from "../../components/Panel";
import { sessionCancelled } from "../../store/page";
import { useAppDispatch } from "../../store/store";

const EditVideoPage = () => {
  const dispatch = useAppDispatch();
  return (
    <Panel
      titleText="Style your video"
      onCloseClick={() => dispatch(sessionCancelled())}
    >
      Edit video page
    </Panel>
  );
};

export default EditVideoPage;
