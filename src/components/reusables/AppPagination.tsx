import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

const AppPagination = () => {
  return (
    <Pagination>
      <PaginationContent className="flex items-center font-sans w-full justify-between">
        <PaginationItem>
          <PaginationPrevious className="py-3 md:px-[14px] md:border border-neutral-300 font-medium text-sm/[19.6px]" />
        </PaginationItem>
        <div className="hidden md:flex items-center gap-[2px]">
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        </div>
        <div className="font-normal text-sm/[19.6px] md:hidden">
          Page 1 of 20
        </div>
        <PaginationItem>
          <PaginationNext className="py-3 md:px-[14px] md:border border-neutral-300 font-medium text-sm/[19.6px]" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default AppPagination;
