"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "../ui/button";

interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  personType: string;
  email: string;
  verif: boolean;
}

function UserCard({ id, name, username, imgUrl, personType, verif, email }: Props) {
  const router = useRouter();

  const isCommunity = personType === "Community";

  return (
    <article className='user-card'>
      <div className='user-card_avatar'>
        <div className='relative h-12 w-12'>
          <Image
            src={imgUrl}
            alt='user_logo'
            fill
            className='rounded-full object-cover'
          />
        </div>

        <div className='flex-1 text-ellipsis'>
        <div className="row">
          <h4 className='text-base-semibold text-light-1'>{name}</h4>
          {verif === true && (
                <div className="verif v2"></div>
          )}
          </div>
          <p className='text-small-medium text-gray-1'>@{username}</p>
        </div>
      </div>

      <Button
        className='user-card_btn'
        onClick={() => {
          if (isCommunity) {
            router.push(`/communities/${id}`);
          } else {
            router.push(`/profile/${id}`);
          }
        }}
      >
        Показать
      </Button>
    </article>
  );
}

export default UserCard;
