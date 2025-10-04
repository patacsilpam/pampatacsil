import Link from "next/link";

type NavItems = {
  id: number;
  name: string;
  link: string;
};
type NavBarProps = {
  navItems: NavItems[];
};

export const Header = ({ navItems }: NavBarProps) => {
  return (
    <header className="max-w-4xl">
      <nav className=" py-10">
        <ul className="flex flex-row justify-end gap-x-10">
          {navItems.map((item) => (
            <li key={item.id} className=" text-xl font-mono">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
