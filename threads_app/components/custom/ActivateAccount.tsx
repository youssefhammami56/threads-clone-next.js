"use client"

import { activateAccount, fetchUser } from "@/lib/actions/user.actions";
import { Button, useToast } from "@chakra-ui/react"
import { currentUser } from "@clerk/nextjs"
import Image from "next/image"
import { redirect, useRouter } from "next/navigation";

export default function ActivateAccount({ userInfo } : { userInfo: any }) {
    const router = useRouter();
    const toast = useToast();

    if(!userInfo?.id) {
        return null;
    }
    if(userInfo?.status === 'active') {
        redirect('/');
    }

  return (
    <div className="flex flex-col justify-center items-center">
    <div className="flex flex-col justify-center items-center">
      <Image
        src="/assets/lock.png"
        width={400}
        height={400}
        alt="Activate Account"
        className="object-contain"
      />
      <h1 className="text-white text-[30px] font-bold mt-10">Your account is currently disactivated</h1>
      <Button 
       colorScheme='green' 
       variant='solid' 
       className="mt-10"
       onClick={async () => {
        toast({
          title: 'Account activated.',
          description: "Welcome back ! You're now connected",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        await activateAccount(userInfo.id);
          router.push('/');
       }
      }
      
    >
         Click here to activate 
     </Button>
    </div>
  </div>
  )
}
