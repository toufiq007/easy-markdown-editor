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
import Gapcursor from '@tiptap/extension-gapcursor'
import Image from '@tiptap/extension-image'

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
    content:""
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

  return (
    <>
      <div>
        <div style={{ height: "100vh" }}>
          {editor && (
            <CustomBubbleMenu editor={editor} BubbleMenu={BubbleMenu} />
          )}
          <EditorContent
            editor={editor}
            style={{ background: "#ededed", height: "100vh", overflow: "auto" }}
          />
        </div>
      </div>
    </>
  );
};

export default TiptapEditor;
