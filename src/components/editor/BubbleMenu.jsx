/* eslint-disable react/prop-types */
import "./style.scss";
import { useCallback } from "react";
import { LuHeading1, LuHeading2 } from "react-icons/lu";
import {
  FaAlignLeft,
  FaAlignRight,
  FaAlignCenter,
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaUnderline,
  FaFillDrip,
  FaCode,
  FaLink,
} from "react-icons/fa";

const CustomBubbleMenu = ({ editor, BubbleMenu }) => {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);
    // cancelled
    if (url === null) {
      return;
    }
    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    // update link
    try {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    } catch (e) {
      alert(e.message);
    }
  }, [editor]);
  return (
    <div>
      <BubbleMenu editor={editor} tippyOptions={{ duration: 400 }}>
        <div className="bubble-menu">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            <FaBold />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            <FaItalic />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
          >
            <FaStrikethrough />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={editor.isActive("code") ? "is-active" : ""}
          >
            <FaCode />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={editor.isActive("highlight") ? "is-active" : ""}
          >
            <FaFillDrip />
          </button>

          <button
            onClick={setLink}
            className={editor.isActive("link") ? "is-active" : ""}
          >
            <FaLink />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive("underline") ? "is-active" : ""}
          >
            <FaUnderline />
          </button>

          <button
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={
              editor.isActive({ textAlign: "left" }) ? "is-active" : ""
            }
          >
            <FaAlignLeft />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={
              editor.isActive({ textAlign: "center" }) ? "is-active" : ""
            }
          >
            <FaAlignCenter />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={
              editor.isActive({ textAlign: "right" }) ? "is-active" : ""
            }
          >
            <FaAlignRight />
          </button>

          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={editor.isActive({ level: 1 }) ? "is-active" : ""}
          >
            <LuHeading1 />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={editor.isActive({ level: 2 }) ? "is-active" : ""}
          >
            <LuHeading2 />
          </button>
        </div>
      </BubbleMenu>
    </div>
  );
};

export default CustomBubbleMenu;
