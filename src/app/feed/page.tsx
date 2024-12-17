import UserList from "@/components/UserList";
import { getUsers } from "@/actions/getUsers";

const INITIAL_NUMBER_OF_USERS = 10;

export default async function Feeds() {
  const initialUsers = await getUsers(0, INITIAL_NUMBER_OF_USERS);

  return (
    <div className="flex justify-center">
      <div className="bg-blue-600 w-[600px] h-[100px] fixed"></div>
      <UserList initialUsers={initialUsers} />
    </div>
  );
}
