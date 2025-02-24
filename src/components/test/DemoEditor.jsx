/* eslint-disable react/prop-types */
import "./style.scss";

import Document from "@tiptap/extension-document";
import Gapcursor from "@tiptap/extension-gapcursor";
import Paragraph from "@tiptap/extension-paragraph";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import { useEffect } from "react";

const DemoEditor = ({ editorContent }) => {
  console.log(editorContent);
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Gapcursor,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: ``,
  });

  // useEffect(() => {
  //   if (!isEmpty(editorContent)) {
  //     editor?.commands?.setContent(editorContent, false, {
  //       preserveWhitespace: 'full',
  //     });
  //   }
  // }, [editorContent]);
  useEffect(() => {
    editor?.commands?.setContent(editorContent, false, {
      preserveWhitespace: "full",
    });
  }, [editorContent]);

  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="control-group">
        {/* <div className="button-group">
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                .run()
            }
          >
            Insert table
          </button>
          <button
            onClick={() => editor.chain().focus().addColumnBefore().run()}
          >
            Add column before
          </button>
          <button onClick={() => editor.chain().focus().addColumnAfter().run()}>
            Add column after
          </button>
          <button onClick={() => editor.chain().focus().deleteColumn().run()}>
            Delete column
          </button>
          <button onClick={() => editor.chain().focus().addRowBefore().run()}>
            Add row before
          </button>
          <button onClick={() => editor.chain().focus().addRowAfter().run()}>
            Add row after
          </button>
          <button onClick={() => editor.chain().focus().deleteRow().run()}>
            Delete row
          </button>
          <button onClick={() => editor.chain().focus().deleteTable().run()}>
            Delete table
          </button>
          <button onClick={() => editor.chain().focus().mergeCells().run()}>
            Merge cells
          </button>
          <button onClick={() => editor.chain().focus().splitCell().run()}>
            Split cell
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeaderColumn().run()}
          >
            Toggle header column
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeaderRow().run()}
          >
            Toggle header row
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeaderCell().run()}
          >
            Toggle header cell
          </button>
          <button onClick={() => editor.chain().focus().mergeOrSplit().run()}>
            Merge or split
          </button>
          <button
            onClick={() =>
              editor.chain().focus().setCellAttribute("colspan", 2).run()
            }
          >
            Set cell attribute
          </button>
          <button onClick={() => editor.chain().focus().fixTables().run()}>
            Fix tables
          </button>
          <button onClick={() => editor.chain().focus().goToNextCell().run()}>
            Go to next cell
          </button>
          <button
            onClick={() => editor.chain().focus().goToPreviousCell().run()}
          >
            Go to previous cell
          </button>
        </div> */}
      </div>

      <EditorContent editor={editor} />
    </>
  );
};

export default DemoEditor;
