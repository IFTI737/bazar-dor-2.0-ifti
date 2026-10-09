/* eslint-disable @next/next/no-img-element */
const UserAvatar = ({
  name,
  image,
  className = "size-9 rounded-[10px]",
}: {
  name?: string | null;
  image?: string | null;
  className?: string;
}) => {
  if (image) {
    return (
      <img
        src={image}
        alt={name ?? "user"}
        referrerPolicy="no-referrer"
        className={`${className} object-cover`}
      />
    );
  }

  return (
    <span
      className={`${className} flex items-center justify-center bg-primary font-bold text-primary-content`}
    >
      {name?.trim().charAt(0).toUpperCase() || "?"}
    </span>
  );
};

export default UserAvatar;
