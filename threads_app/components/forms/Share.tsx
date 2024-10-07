"use client"

import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import Link from "next/link";

const Share = ({ id }: { id: string}) => {

    const handleCopyClick = () => {
        // Sélectionnez l'élément Input
        const inputElement = document.getElementById("link") as HTMLInputElement;
    
        // Vérifiez si l'élément existe
        if (inputElement) {
          // Sélectionnez le texte dans l'élément Input
          inputElement.select();
          inputElement.setSelectionRange(0, 99999); // Pour les navigateurs mobiles
    
          // Copiez le texte sélectionné dans le presse-papiers
          document.execCommand("copy");
        }
      };

  return (
    <Dialog>
    <DialogTrigger asChild>
        <Image
         src='/assets/share.svg'
         alt='heart'
         width={24}
         height={24}
         className='cursor-pointer object-contain'
        />
    </DialogTrigger>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Share link</DialogTitle>
        <DialogDescription>
          Anyone who has this link will be able to view this.
        </DialogDescription>
      </DialogHeader>
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="link" className="sr-only">
            Link
          </Label>
          <Input
            id="link"
            defaultValue={`https://threads-app-tau-three.vercel.app/thread/${id}`}
            readOnly
          />
        </div>
        <Button type="button" size="sm" className="px-3" onClick={handleCopyClick}>
          <span className="sr-only">Copy</span>
          <Copy className="h-4 w-4" />
        </Button>
      </div>
      <DialogFooter className="sm:justify-start">
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
    </Dialog>
  )
}

export default Share