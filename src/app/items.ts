import { AccessInfo } from "./access-info";
import { VolumeInfo } from "./volume-info";

export class Items {

    volumeInfo:VolumeInfo=new VolumeInfo();
     accessInfo:AccessInfo=new AccessInfo();
     userName!:any;
     book_id!:number;
     constructor(){

     }
}
