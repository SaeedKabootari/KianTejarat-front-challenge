import Link from "../../node_modules/next/link";
import { User } from "../types/User";
import Image from "../../node_modules/next/image";

type UserProps = {
  user: User;
};

export default function UserCard({ user }: UserProps) {
  return (
    <Link className="w-[300px] h-[300px]" href={`/users/${user.id}`}>
      <Image src={user.profile_picture} width={300} height={300} alt="avatar" />
    </Link>
  );
}
