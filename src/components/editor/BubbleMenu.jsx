/* eslint-disable react/prop-types */
import "./style.scss";
import { useCallback } from "react";
import {
  FaAlignLeft,
  FaBold,
  FaHeading,
  FaItalic,
  FaStrikethrough,
  FaUnderline,
  FaUndo,
  FaFillDrip,
} from "react-icons/fa";

const CustomBubbleMenu = ({ editor, BubbleMenu }) => {
  // bubble menu handler
  // const bubbleBoldMenuHanlder = useCallback(() => {
  //   editor.chain().focus().toggleBold().run();
  // });
  // const bubbleItalicMenuHandler = useCallback(() => {
  //   editor.chain().focus().toggleItalic().run();
  // });
  // const bubbleStrikeMenuHanlder = useCallback(() => {
  //   editor.chain().focus().toggleStrike().run();
  // });
  // const bubbleHeadingMenuHandler = useCallback(() => {
  //   editor.chain().toggleHeading({ level: 1 }).run();
  // });
  // const bubbleUndoMenuHanlder = useCallback(() => {
  //   editor.chain().focus().undo().run();
  // });
  // const bubbleMenuUnderlineMenuHanlder = useCallback(() => {
  //   editor.chain().focus().toggleUnderline().run();
  // });
  // const bubbleMenuLeftHandler = useCallback(() => {
  //   editor.chain().focus().setTextAlign("left").run();
  // });
  return (
    <div>
      <BubbleMenu editor={editor} tippyOptions={{ duration: 400 }}>
        <div className="bubble-menu">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            <FaBold/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            <FaItalic/>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
          >
            <FaStrikethrough/>
          </button>
        </div>
      </BubbleMenu>
    </div>
  );
};

export default CustomBubbleMenu;
