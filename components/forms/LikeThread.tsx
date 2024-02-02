"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {useEffect, useState} from 'react';

import { likeThread, dislikeThread } from "@/lib/actions/thread.actions";


interface Props {
  threadId: string;
  currentUserId: string;
  authorId: string;
  parentId: string | null;
  isComment?: boolean;
  likes: Array<string>
}

function LikeThread({
  threadId,
  currentUserId,
  authorId,
  parentId,
  isComment,
  likes,
}: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const [count, setCount] = useState(likes.length);

  useEffect(() => {
    console.log('Count is now: ', count);
  }, [count]);

  if (likes.includes(currentUserId)) {
    return (
      <><p className='mt-1 text-subtle-medium text-gray-1 right2px'>
        {count}
      </p><Image
          src={`/assets/heart-filled.svg`}
          alt='heart'
          width={22}
          height={22}
          className='cursor-pointer object-contain likeImg'
          onClick={async () => {
            setCount(count - 1);
            await dislikeThread(JSON.parse(threadId), currentUserId, likes);
            if (!parentId || !isComment) {
            }
          } } /></>)
  }
  else {
  return (
    <><p className='mt-1 text-subtle-medium text-gray-1 right2px'>
      {count}
    </p><Image
        src='/assets/heart-gray.svg'
        alt='heart'
        width={22}
        height={22}
        className='cursor-pointer object-contain likeImg'
        onClick={async () => {
          setCount(count + 1);
          await likeThread(JSON.parse(threadId), currentUserId, likes);
          if (!parentId || !isComment) {
          }
        } } /></>
  );
}
}

export default LikeThread;
