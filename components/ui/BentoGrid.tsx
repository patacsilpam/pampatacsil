import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  header,
  icon,
  image,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  image?: string;
}) => {
  return (
    <div
      className={cn(
        " row-span-1 rounded-md group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  dark:bg-black dark:border-white/[0.1] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgba(128,128,133,0.10)",
        backgroundColor:
          "radial-gradient(circle, rgba(128,128,133,1) 0%, rgba(129,129,136,1) 35%, rgba(84,83,90,1) 100%);",
      }}
    >
      {id === 1 && <div className="  bg-white">dsfd</div>}
      {id === 3 && <div>copy email address</div>}
    </div>
  );
};
