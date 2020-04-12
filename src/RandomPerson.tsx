import { useQuery } from "@apollo/client";
import { getRandomPerson } from "./queries";
import React from "react";
import { ProfileCard } from "./ProfileCard";

export function RandomPerson() {
  const { data, loading, error, refetch } = useQuery(getRandomPerson);
  if (loading) {
    return <div>Profile Card is loading...</div>;
  }
  if (error) {
    return <div>Could not load card!</div>;
  }
  const { name, profile, address } = data.randomPerson;

  return (
    <>
      <ProfileCard name={name} profile={profile} address={address} ></ProfileCard>
      <button onClick={() => refetch()}>Get new user</button>
    </>
  );
}
