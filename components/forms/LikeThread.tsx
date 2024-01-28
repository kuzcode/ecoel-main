"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

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

  function returnLike() {
    likes.push(currentUserId)
  }

  if (likes.includes(currentUserId)) {
    return (
      <Image
        src='/assets/heart-filled.svg'
        alt='heart'
        width={18}
        height={18}
        className='cursor-pointer object-contain'
        onClick={async () => {
          await dislikeThread(JSON.parse(threadId), currentUserId, likes);
          if (!parentId || !isComment) {
          }
        }
      }
  />)
  }
  else {
  return (
    <Image
      src='/assets/heart-gray.svg'
      alt='heart'
      width={18}
      height={18}
      className='cursor-pointer object-contain'
      onClick={async () => {
        await likeThread(JSON.parse(threadId), currentUserId, likes );
        if (!parentId || !isComment) {
        }
      }
    }
    />
  );
}
}

export default LikeThread;
