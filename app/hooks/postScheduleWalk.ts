import { PostScheduleWalkReq } from "../lib/definitions";
import { getCustomerId, getJwtToken } from "./auth";

export default async function postScheduleWalk(request: PostScheduleWalkReq) {
    try {
       let token : string | null = getJwtToken() as string;
       console.log("Token: " + token);
        let customerId : string  | null = getCustomerId();
        const response = await fetch(`https://localhost:7188/api/${customerId}/Walks`, {
             method: "POST",
             headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
             body: JSON.stringify(request),
           });
           console.log(request);
           if (response.ok) {
             console.log('Schedule posted successfully');
             console.log(response.statusText);
           } else {
             console.error('Error posting walk:', response.statusText);
           }
           return response.status;
     }
     catch (error) {
         console.error('Error posting walk:', error);
     }
     
    
}