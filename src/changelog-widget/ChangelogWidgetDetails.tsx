import React, { useCallback, useMemo, useState } from "react";
import { Editor, createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import { BaseEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";
import styles from "./ChangelogWidgetDetails.module.css";

type ChangelogCardProps = {
  initialValue_: string;
};

type CustomElement = {
  type: string;
  children: CustomText[];
  [key: string]: any;
};
type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
  [key: string]: any;
};

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const ChangelogDetailsCard = ({ initialValue_ }: ChangelogCardProps) => {
  const [initialValue] = useState<Descendant[]>(JSON.parse(initialValue_));
  const renderElement = useCallback((props: any) => <Element {...props} />, []);
  const renderLeaf = useCallback((props: any) => <Leaf {...props} />, []);
  const editor = useMemo(() => withImages(withReact(createEditor())), []);

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        className={styles.editor}
        disableDefaultStyles={true}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        readOnly={true}
      />
    </Slate>
  );
};

const withImages = (editor: Editor) => {
  const { isVoid } = editor;
  editor.isVoid = (element) => {
    return element.type === "image" ? true : isVoid(element);
  };
  return editor;
};

const Image = React.forwardRef(
  (
    {
      attributes,
      children,
      element,
    }: {
      attributes: any;
      children: any;
      element: CustomElement;
    },
    ref
  ) => {
    return (
      <div {...attributes}>
        {children}
        <div className={styles.imageContainer} contentEditable={false}>
          <img src={element.url} alt="changelog" className={styles.image} />
        </div>
      </div>
    );
  }
);

const Element = ({
  attributes,
  children,
  element,
}: {
  attributes: any;
  children: any;
  element: CustomElement;
}) => {
  const style = { textAlign: element.align };
  switch (element.type) {
    case "block-quote":
      return (
        <blockquote className={styles.blockquote} style={style} {...attributes}>
          {children}
        </blockquote>
      );
    case "heading-one":
      return (
        <h1 className={styles.heading} style={style} {...attributes}>
          {children}
        </h1>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol className={styles.orderedList} style={style} {...attributes}>
          {children}
        </ol>
      );
    case "bulleted-list":
      return (
        <ul className={styles.unorderedList} style={style} {...attributes}>
          {children}
        </ul>
      );
    case "image":
      return (
        <Image element={element} {...attributes}>
          {children}
        </Image>
      );
    default:
      return (
        <div style={style} {...attributes}>
          {children}
        </div>
      );
  }
};

const Leaf = ({
  attributes,
  children,
  leaf,
}: {
  attributes: any;
  children: any;
  leaf: CustomText;
}) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }
  if (leaf.code) {
    children = <code>{children}</code>;
  }
  if (leaf.italic) {
    children = <em>{children}</em>;
  }
  return <span {...attributes}>{children}</span>;
};

export default ChangelogDetailsCard;
