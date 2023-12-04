"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";



interface Props {
    text: string;
    author: string;
    path: string;
    likes: Array<string>
    isAnonym: boolean;
}

function PostAnonym({
  text,
  author,
  path,
  likes,
  isAnonym,
}: Props) {
  const pathname = usePathname();
  const router = useRouter();
    
    return (
        <Button type='reset' className='bg-primary-500 rounded-2xl btn'>
          Опубликовать анонимно
        </Button>
    )
}

export default PostAnonym;
