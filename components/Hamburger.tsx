import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {Menu} from "lucide-react";
import Profile from "./Profile";

export default function Hamburger() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="md:p-0">
          <SheetTitle>Profile</SheetTitle>
          <SheetDescription className="sr-only">User Profile</SheetDescription>
          <Profile />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
