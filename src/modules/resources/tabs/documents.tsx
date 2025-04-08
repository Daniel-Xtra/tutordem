"use client";
import DocumentViewer from "@/components/modals/document-viewer";
import Icon from "@/components/reusables/AppIcon";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import React from "react";
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

interface Resources {
  title: string;
  documentType: string;
  subject: string;
  class: string;
  currentPage: string;
  totalPages: string;
  rating: string;
  numberOfStars: string;
  isBookmarked: boolean;
  url: string;
}

const PdfViewer = ({
  url,
  onPageChange,
  currentPage,
  zoomLevel = 100,
}: {
  url: string;
  onPageChange?: (current: number, total: number) => void;
  currentPage: number;
  zoomLevel?: number;
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const modifiedUrl = `${url}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&download=0&print=0&zoom=${zoomLevel}&view=FitH&page=${currentPage}`;
  // Update iframe source when zoom level changes
  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = modifiedUrl;
    }
  }, [url, zoomLevel, currentPage, modifiedUrl]);

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const pageMatch = hash.match(/page=(\d+)/);
      if (pageMatch) {
        const page = parseInt(pageMatch[1], 10);
        onPageChange?.(page, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [onPageChange, modifiedUrl]);

  return (
    <div className="w-full h-full bg-neutral-950">
      <iframe
        ref={iframeRef}
        src={modifiedUrl}
        className="w-full h-full"
        frameBorder="0"
      />
    </div>
  );
};

const DocumentCard = ({ resource }: { resource: Resources }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resources | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setSelectedResource(resource);
  };

  const handlePageChange = (current: number) => {
    setCurrentPage(current);
  };

  return (
    <div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <div
            onClick={handleToggleModal}
            className=" cursor-pointer font-sans border col-span-1 border-neutral-200 rounded bg-neutral-50 relative"
          >
            <div
              className={cn(
                "items-center gap-[10px] py-3 px-4 absolute right-0 top-0 hidden",
                resource.isBookmarked && "flex"
              )}
            >
              <Icon icon="bookmark" width={18} height={18} />
              <span className="font-medium text-xs text-neutral-950">
                Bookmarked
              </span>
            </div>

            <div className="p-8 space-y-6">
              <Icon
                icon="document"
                width={32}
                height={33.58}
                className="-ms-2 -pt-8"
              />

              <div className="space-y-2">
                <span className="font-bold text-sm md:text-base text-primary-950 capitalize">
                  {resource.title}
                </span>

                <div className="flex items-center font-normal text-sm gap-2 text-neutral-600">
                  <span>{resource.documentType}</span>
                  <GoDotFill className="size-1.5 text-primary-500" />
                  <span>{resource.subject}</span>
                  <GoDotFill className="size-1.5 text-primary-500" />
                  <span className="">{resource.class}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <p className="font-normal text-sm text-neutral-600">
                    Page
                    <span className=" text-sm">
                      <b className="text-neutral-950 font-semibold mx-1">
                        {resource.currentPage}
                      </b>
                      of {resource.totalPages}
                    </span>
                  </p>
                  <GoDotFill className="size-1.5 text-primary-500" />
                  <p className="font-normal text-sm text-neutral-950">
                    {resource.rating}
                  </p>
                  <Icon icon="star" width={12} height={12} />
                  <p className="font-normal text-sm text-neutral-950">
                    ({resource.numberOfStars})
                  </p>
                </div>
                <div>
                  <Icon icon="arrow-right-black" width={20} height={20} />
                </div>
              </div>
            </div>
          </div>
        </DialogTrigger>
        {selectedResource && (
          <DocumentViewer
            resource={selectedResource}
            content={
              <PdfViewer
                url={"https://computingbook.org/FullText.pdf"}
                onPageChange={handlePageChange}
                currentPage={currentPage}
                zoomLevel={zoomLevel}
              />
            }
            closeModal={() => setIsModalOpen(false)}
            currentPage={currentPage}
            onZoomChange={setZoomLevel}
          />
        )}
      </Dialog>
    </div>
  );
};

const Documents = ({ resources }: { resources: Resources[] }) => {
  return (
    <div className="mx-5 xl:mx-[136px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
        {resources.map((resource, index) => (
          <DocumentCard key={index} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default Documents;
