"use client";
import { User } from "../types/User";
import UserCard from "./UserCard";
import { useEffect, useState } from "react";
import { getUsers } from "../actions/getUsers";

type UserListProps = {
  initialUsers: User[];
};

const NUMBER_OF_USERS_TO_FETCH = 10;

export default function UserList({ initialUsers }: UserListProps) {
  const [offset, setOffset] = useState(NUMBER_OF_USERS_TO_FETCH);
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [loading, setLoading] = useState(false);
  const [firstDate, setFirstDate] = useState(initialUsers[0].date_of_birth);

  const loadMoreUsers = async () => {
    if (loading) return;
    setLoading(true);
    const apiUsers = await getUsers(offset, NUMBER_OF_USERS_TO_FETCH);

    setFirstDate(apiUsers[0].date_of_birth);

    setUsers((prevUsers) => [...prevUsers, ...apiUsers]);
    setOffset((prevOffset) => prevOffset + NUMBER_OF_USERS_TO_FETCH);
    setLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= documentHeight - 1 && !loading) {
        loadMoreUsers();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <div className="flex flex-col gap-3 pt-[100px]">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      {loading && (
        <p className="text-[20px] text-blue-600">Loading more pictures...</p>
      )}
      <div className="fixed top-[30px] left-[720px] text-[24px]">
        {firstDate.split("T")[0].replace(/-/g, "/")}
      </div>
    </div>
  );
}
