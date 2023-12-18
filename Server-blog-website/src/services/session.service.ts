import SesionModal from "Modals/sessoin.modal";

export async function createSession(userId:String,userAgent:String) {
          const Session=await SesionModal.create({user:userId,userAgent:userAgent});
          return  Session.toJSON()
}  