/* eslint-disable react/prop-types */
import "./style.scss";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CustomBubbleMenu from "./BubbleMenu";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import Gapcursor from "@tiptap/extension-gapcursor";
import Image from "@tiptap/extension-image";
import { toolBoxItems } from "../../utils/toolBoxData";

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      Color,
      TextStyle,
      Underline,
      Gapcursor,
      Image,
      Placeholder.configure({
        placeholder: "Write something …",
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        protocols: ["http", "https"],
        isAllowedUri: (url, ctx) => {
          try {
            // construct URL
            const parsedUrl = url.includes(":")
              ? new URL(url)
              : new URL(`${ctx.defaultProtocol}://${url}`);

            // use default validation
            if (!ctx.defaultValidate(parsedUrl.href)) {
              return false;
            }

            // disallowed protocols
            const disallowedProtocols = ["ftp", "file", "mailto"];
            const protocol = parsedUrl.protocol.replace(":", "");

            if (disallowedProtocols.includes(protocol)) {
              return false;
            }

            // only allow protocols specified in ctx.protocols
            const allowedProtocols = ctx.protocols.map((p) =>
              typeof p === "string" ? p : p.scheme
            );

            if (!allowedProtocols.includes(protocol)) {
              return false;
            }

            // disallowed domains
            const disallowedDomains = [
              "example-phishing.com",
              "malicious-site.net",
            ];
            const domain = parsedUrl.hostname;

            if (disallowedDomains.includes(domain)) {
              return false;
            }

            // all checks have passed
            return true;
          } catch {
            return false;
          }
        },
        shouldAutoLink: (url) => {
          try {
            // construct URL
            const parsedUrl = url.includes(":")
              ? new URL(url)
              : new URL(`https://${url}`);

            // only auto-link if the domain is not in the disallowed list
            const disallowedDomains = [
              "example-no-autolink.com",
              "another-no-autolink.com",
            ];
            const domain = parsedUrl.hostname;

            return !disallowedDomains.includes(domain);
          } catch {
            return false;
          }
        },
      }),
    ],
    content: "",
    //     content: `
    //     <h2>
    //       Hi there,
    //     </h2>
    //     <p>
    //       this is a basic <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
    //     </p>
    //     <ul>
    //       <li>
    //         That’s a bullet list with one …
    //       </li>
    //       <li>
    //         … or two list items.
    //       </li>
    //     </ul>
    //     <p>
    //       Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
    //     </p>
    // <pre><code class="language-css">body {
    //   display: none;
    // }</code></pre>
    //     <p>
    //       I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
    //     </p>
    //     <blockquote>
    //       Wow, that’s amazing. Good work, boy! 👏
    //       <br />
    //       — Mom
    //     </blockquote>`,
  });

  // this is the drag handler
  const handleDragStart = (e, contentId) => {
    e.dataTransfer.setData("text/plain", contentId.toString());
  };
  const handleOnDrop = (e) => {
    e.preventDefault();
    const contentId = e.dataTransfer.getData("text/plain");
    const boxContent = toolBoxItems.find((box) => box.id === Number(contentId));
    console.log(boxContent);
    editor.commands.insertContent(boxContent?.content);
  };
  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        style={{ height: "calc(100vh - 70px)" }}
        className="grid grid-cols-[3fr_1fr] p-4 overflow-auto"
      >
        <div
          onDrop={handleOnDrop}
          onDragOver={handleOnDragOver}
          className="bg-[var(--editorBackground)] h-[calc(100vh - 100px)] overflow-auto"
        >
          {editor && (
            <CustomBubbleMenu editor={editor} BubbleMenu={BubbleMenu} />
          )}
          <EditorContent editor={editor} />
        </div>
        <div className="w-[400px] grid grid-cols-2 gap-4 overflow-auto px-6 h-[780px]">
          {toolBoxItems &&
            toolBoxItems.map((box, index) => (
              <div key={index}>
                <div
                  draggable={true}
                  onDragStart={(e) => handleDragStart(e, box.id)}
                  className="flex items-center justify-center h-[145px] bg-[var(--toolBoxBackground)] rounded-xl flex-col cursor-move"
                >
                  <h4 style={{ fontSize: "1rem", marginBottom: ".5rem" }}>
                    {box.title}
                  </h4>
                  <span style={{ fontSize: "1.5rem" }}>{box.icon}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default TiptapEditor;
