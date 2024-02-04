"use client";
import Image from"next/image";import{usePathname,useRouter}from"next/navigation";import{deleteThread}from"@/lib/actions/thread.actions";
import { skip } from "node:test";
interface Props{threadId: string;currentUserId: string;authorId: string;parentId: string | null;isComment?: boolean;}
function DeleteThread({threadId,currentUserId,authorId,parentId,isComment,}: Props) {
const pathname = usePathname();const router = useRouter();
if(currentUserId!==authorId || pathname==="/")return null;
return(
<Image src='/assets/delete.svg' alt='delte' width={20} height={20} className='cursor-pointer object-contain' onClick={async () => {
var confirmDel = confirm('Вы действительно хотите удалить публикацию?')
{confirmDel ? (
await deleteThread(JSON.parse(threadId), pathname)) : (
confirmDel = false)}
if(!parentId || !isComment) { router.push("/"); }
}}/>);}
export default DeleteThread;