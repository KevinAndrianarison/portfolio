import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function ContentSelect({ onclickFr, onclickEn }) {
  return (
    <DropdownMenuContent className="rounded-none funnel">
      <DropdownMenuItem
        onClick={onclickFr}
        className="rounded-none cursor-pointer"
      >
        <b className="fr w-4 h-4"></b> Francais
      </DropdownMenuItem>
      <DropdownMenuItem
        onClick={onclickEn}
        className="rounded-none cursor-pointer"
      >
        <b className="en w-4 h-4"></b> Anglais
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}
