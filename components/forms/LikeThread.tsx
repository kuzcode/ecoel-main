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
            if (likes.includes(currentUserId)) {
              setCount(count - 1);
              var index = likes.indexOf(currentUserId)
              likes.splice(index)
            }
            else {
              setCount(count + 1);
              likes.push(currentUserId)
            }
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
          if (likes.includes(currentUserId)) {
            setCount(count - 1);
            var index = likes.indexOf(currentUserId)
            likes.splice(index)
          }
          else {
            setCount(count + 1);
            likes.push(currentUserId)
          }
          await likeThread(JSON.parse(threadId), currentUserId, likes);
          if (!parentId || !isComment) {
          }
        } } /></>
  );
}
}

export default LikeThread;
