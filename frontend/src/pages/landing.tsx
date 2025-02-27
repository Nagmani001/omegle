import Icon from "@/components/icon";
import { AuroraBackgroundDemo } from "@/components/ui/background";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return <div className="">
    <nav className="flex justify-between bg-slate-50 h-20">
      <div className="flex gap-2 items-center pl-8">
        <Icon />
        <div className="text-xl font-bold">
          100xOmegle
        </div>
      </div>
      <div className="flex items-center pr-8">
        <Button onClick={() => {
          navigate("/room");
        }} variant="default" className="text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3" size="lg">Start Video</Button>
      </div>
    </nav>
    <AuroraBackgroundDemo />
  </div>
}
