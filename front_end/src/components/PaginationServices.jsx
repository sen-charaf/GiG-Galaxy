import React, { useEffect, useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useParams } from "react-router-dom";

export default function PaginationServices() {
  const [page, setPage] = useState("1");
  const [perPage, setPerPage] = useState("12");
  const pageArray = [
    Number(page) - 2,
    Number(page) - 1,
    Number(page),
    Number(page) + 1,
    Number(page) + 2,
  ];
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.get("page") &&
      Number(urlParams.get("page")) > 0 &&
      setPage(urlParams.get("page"));
    urlParams.get("per_page") &&
      Number(urlParams.get("per_page")) > 0 &&
      setPerPage(urlParams.get("per_page"));
  }, []);

  //You should add a flag in the bag end to mark if the data is the last page of results

  return (
    <>
      <div className=" mt-5">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`/categories?page=${Number(page) - 1}&per_page=${perPage}`}
              />
            </PaginationItem>
            {Number(page) >= 4 && (
              <>
                <PaginationItem>
                  <PaginationLink
                    href={`/categories?page=1&per_page=${perPage}`}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              </>
            )}
            {pageArray.map((item) => {
              if (item > 0) {
                return (
                  <PaginationItem>
                    <PaginationLink
                      href={`/categories?page=${item}&per_page=${perPage}`}
                      className={`${
                        Number(page) === Number(item)
                          ? "bg-[#8C41F3] hover:text-white cursor-auto text-white font-semibold hover:bg-[#8C41F3] pointer-events-none"
                          : ""
                      }`}
                    >
                      {item}
                    </PaginationLink>
                  </PaginationItem>
                );
              }
            })}
            {Number(page) < 98 && (
              <>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href={`/categories?page=99&per_page=${perPage}`}
                  >
                    99
                  </PaginationLink>
                </PaginationItem>
              </>
            )}
            <PaginationItem>
              <PaginationNext
                href={`/categories?page=${Number(page) + 1}&per_page=${perPage}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
