import Image from "next/image";
interface LoaderProps {
  label: string;
}

export const Loader = ({ label }: LoaderProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image alt="Loader" fill src="/images/loading.gif" />
      </div>
      <p className="text-muted-foreground text-sm text-center"> {label}</p>
    </div>
  );
};
