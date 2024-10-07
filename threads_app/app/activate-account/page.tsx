import ActivateAccount from "@/components/custom/ActivateAccount";
import { fetchUser } from "@/lib/actions/user.actions";
import { Button, useToast } from "@chakra-ui/react"
import { currentUser } from "@clerk/nextjs"
import Image from "next/image"

export default async function page() {
  const user = await currentUser();
  if (!user) {
    return null;  
  }
  const userInfo = await fetchUser(user.id);
  return (
   <ActivateAccount userInfo={userInfo}/>
  )
}
