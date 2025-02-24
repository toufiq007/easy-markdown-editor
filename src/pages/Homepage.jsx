/* eslint-disable react/prop-types */
import TiptapEditor from "../components/editor/TiptapEditor"
import DemoEditor from "../components/test/DemoEditor";
const Homepage = ({handlePreviewAction}) => {
    return (
        <div>
            <TiptapEditor handlePreviewAction={handlePreviewAction} />
            {/* <DemoEditor/> */}
        </div>
    );
};

export default Homepage;