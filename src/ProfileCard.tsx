import React from "react";

export interface ProfileName {
  first: string;
  last: string;
  prefix: string | null;
}

export interface ProfileData {
  username: string;
  email: string;
  avatar: string;
}

export interface ProfileAddress {
  streetAddress: string;
  city: string;
  zipCode: string;
  state: string;
  country: string;
}

export interface ProfileCardProps {
  name: ProfileName;
  profile: ProfileData;
  address: ProfileAddress;
}

export function ProfileCard({ name, profile, address }: ProfileCardProps) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={profile.avatar} alt="Profile" className="profile-img" />
      </div>
      <div className="card-body">
        <p className="full-name">
          {name.first} {name.last}
        </p>
        <p className="username">
          @{profile.username}{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <p className="city">
          {address.city} <strong>{address.country}</strong>
        </p>
        <p className="street">
          {address.streetAddress}
        </p>
  <p className="street">{address.state} - {address.zipCode}</p>
        <p></p>
      </div>
    </div>
  );
}
