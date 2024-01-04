import Embed from "@editorjs/embed";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import supabase from "../common/supabase";
import { v4 as uuidv4 } from "uuid";



function uploadImageByUrl(e:string) {
          const link = new Promise((resolve, reject) => {
            try {
              resolve(e);
              console.log(e); // Log the URL to the console
            } catch (error) {
              // If there's an error, reject the Promise
              reject(error);
            }
          });
          
          // Returning a new Promise that resolves with an object containing success and the URL
          return link.then(url => {
                    
            return {
              success: 1,
              file: {url},
            };
          });
        }

 function uploadImageToSupabase(e: File){
          return  supabase.storage.from("BlogsImages").upload("/" + uuidv4().toString(), e).then(url =>{
                
                              // const CdnUrl = `https://fsnavrdsbbyrbmtaddyb.supabase.co/storage/v1/object/public/BlogsImages/${url?.data?.path}`;
                              // console.log(CdnUrl);
                              
                              return{
                                        success: 1,
                                        file:{url}    
                              }
                    })
          }
    
export const tools = {
  header: {
    class: Header,
    config: {
      levels: [2, 3],
      placeholder: "header here...",
      defaultlevel: 2,
    },
  },
  image: {
          class:Image,
          config:{
                    uploader:{
                              uploadByUrl:uploadImageByUrl,
                              uploadByFile:uploadImageToSupabase
                    }
          }
  },
  list: {
    class: List,
    inlineToolbar: true,
  },

  quote: {
    class: Quote,
    inlineToolbar: true,
  },

  marker: Marker,

  inlineCode: InlineCode,

  embed: Embed,
};
