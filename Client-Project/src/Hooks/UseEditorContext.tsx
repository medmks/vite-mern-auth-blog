import React, { useContext, createContext, useState, useEffect } from "react";
type Childernproviderprops = {
  children: React.ReactNode;
};
type EditorProps = {
  EditorState: string;
  setEditorState: React.Dispatch<React.SetStateAction<string>>;
  blog: {
    title: string;
    content: string;
    banner: string;
    tags: string;
    description: string;
    author: string;
  };
  setblog: React.Dispatch<
    React.SetStateAction<{
      title: string;
      content: string;
      banner: string;
      tags: string;
      description: string;
      author: string;
    }>
  >;
};

const EditorContext = createContext<EditorProps | undefined>(undefined);

export function EditorContextProvider({ children }: Childernproviderprops) {
  const BlogStructure = {
    title: "",
    content: "",
    banner: "",
    tags: "",
    description: "",
    author: "",
  };
  const [EditorState, setEditorState] = useState<string>("editor");
  const [blog, setblog] = useState(BlogStructure);

  useEffect(() => {
    setEditorState("editor");
  }, []);

  return (
    <EditorContext.Provider
      value={{ EditorState, setEditorState, blog, setblog }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export function UseEditorContext() {
  const context = useContext(EditorContext);
  if (context === undefined) {
    throw new Error("UseEditorContext should within EditorContext");
  }
  return context;
}

export default EditorContextProvider;
