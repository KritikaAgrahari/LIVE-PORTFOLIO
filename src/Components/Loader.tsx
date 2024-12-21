
import { IconHexagon } from "@tabler/icons-react";
import { Slugs } from "../User";
import IconCloud from "./magicui/icon-cloud";


export function Loader() {
  return (
    <div className="relative flex h-full w-full animate-[ping_1.5s_ease-in-out_1_4.5s] items-center justify-center">
      <IconCloud iconSlugs={Slugs} />
      <IconHexagon className="absolute -z-10 animate-[spin_5s_linear_infinite]" size={120} color="#03045E" stroke={1.25} />
      <div className=" absolute font-mono font-semibold text-6xl -z-10"style={{ color: '#48CAE4' }}>KA</div>
    </div>
  );
}