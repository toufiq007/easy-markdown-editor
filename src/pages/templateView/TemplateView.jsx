/* eslint-disable react/prop-types */

import TiptapEditor from "../../components/editor/TiptapEditor";
import DemoEditor from "../../components/test/DemoEditor";

const TemplateView = ({ editorContent }) => {

  return (
    <div
      style={{ height: "calc(100vh - 70px)" }}
      className="p-4 overflow-auto bg-red-200"
    >
     
      <DemoEditor editorContent={editorContent}  />
    </div>
  );
};

export default TemplateView;
