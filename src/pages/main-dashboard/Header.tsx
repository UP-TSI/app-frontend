const Header = ({ username }: HeaderProps) => {
  return (
    <div className="text-6xl">
      <span className="font-extralight">
        Olá, <span className="font-bold">{username}</span> 👋
      </span>
    </div>
  );
};

export default Header;
