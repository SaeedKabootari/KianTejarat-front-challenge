"use client";

import {
  usePathname,
  useRouter,
} from "../../../../node_modules/next/navigation";
import { useEffect, useState } from "react";
import { getUser } from "@/actions/getUser";
import { User } from "../../../types/User";
import Image from "../../../../node_modules/next/image";

export default function UserDetail() {
  const router = useRouter();
  const pathName = usePathname();
  const userId = +pathName.split("/")[2];
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getSingleData = async () => {
      const fetchedUser = await getUser(userId);
      setUser(fetchedUser);
    };

    getSingleData();
  }, [userId]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <div className="text-[24px]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex justify-center gap-[10px]">
        <Image
          src={user.profile_picture}
          width={500}
          height={500}
          alt="avatar"
        />
        <div className="flex flex-col space-between">
          <div>{user.id}</div>
          <div>{user.gender}</div>
          <div>{user.date_of_birth}</div>
          <div>{user.job}</div>
          <div>{user.city}</div>
          <div>{user.zipcode}</div>
          <div>{user.latitude}</div>
          <div>{user.email}</div>
          <div>{user.last_name}</div>
          <div>{user.first_name}</div>
          <div>{user.phone}</div>
          <div>{user.street}</div>
          <div>{user.state}</div>
          <div>{user.country}</div>
          <div>{user.longtitude}</div>
          <button onClick={() => router.back()} className="bg-green-500">
            Back to Gallery
          </button>
        </div>
      </div>
    </div>
  );
}
