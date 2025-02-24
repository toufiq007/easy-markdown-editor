import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/shared/navbar/Navbar";
import TemplateView from "./pages/templateView/TemplateView";
import { useState } from "react";
function App() {
  const [editorContent, setEditorContent] = useState("");
  // preview handler
  const handlePreviewContent = (html) => {
    setEditorContent(html);
  };
  // download handler
  const handleDownloadContent = () => {
    console.log("handle download");
  };
  return (
    <BrowserRouter>
      <Navbar
        handlePreviewAction={handlePreviewContent}
        handleDownloadContent={handleDownloadContent}
      />
      <Routes>
        <Route
          path="/"
          element={<Homepage handlePreviewAction={handlePreviewContent} />}
        />
        <Route
          path="/tempalte-view"
          element={<TemplateView editorContent={editorContent} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
