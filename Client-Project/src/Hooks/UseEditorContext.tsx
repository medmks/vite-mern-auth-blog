import React, { useContext, createContext, useState, useEffect } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";

type Childernproviderprops = {
  children: React.ReactNode;
};
type Tblock = {
  id:string,
  type:string
  data:{
          text:string
  }
} 
export type textEditorProp = {
  time: number, blocks: Tblock[], version: string
} 
interface Tblog {
  title: string;
  content: OutputData,
  banner: string;
  tags: string;
  description: string;
  author: string;
}
type EditorProps = {
  EditorState: string;
  setEditorState: React.Dispatch<React.SetStateAction<string>>;
    //TODO: blog state  

  blog: Tblog 
  setblog: React.Dispatch<
    React.SetStateAction<Tblog >
  >;
  textEditor:EditorJS | null
setTextEditor:React.Dispatch<React.SetStateAction<EditorJS | null>>
};

const EditorContext = createContext<EditorProps | undefined>(undefined);

export function EditorContextProvider({ children }: Childernproviderprops) {
  
  const initialState = {
    
    title: "",
    content: {time: 0, blocks: [{id:'',type:"",data:{text:""}}], version: ""},
    banner: "",
    tags: "",
    description: "",
    author: "",
  };
  const [EditorState, setEditorState] = useState<string>("editor");
  //TODO: blog state  

  const [blog, setblog] = useState<Tblog>(initialState);
  const [textEditor, setTextEditor] = useState<EditorJS | null>(null)

  useEffect(() => {
    setEditorState("editor");
  }, []);

  return (
    <EditorContext.Provider
      value={{ EditorState, setEditorState, blog, setblog,textEditor,setTextEditor }}
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
