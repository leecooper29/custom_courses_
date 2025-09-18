import { CgProfile } from "react-icons/cg";

type UserBadgeProps = {
  name: string;
};

function UserBadge({ name }: UserBadgeProps) {
  return (
    <div className="user">
      <CgProfile />
      <span>{name}</span>
    </div>
  );
}

export default UserBadge;
