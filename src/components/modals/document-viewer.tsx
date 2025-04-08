"use client";
import { useEffect, useRef, useState } from "react";
import Icon from "../reusables/AppIcon";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/legacy/build/pdf";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import AddFeedback from "./add-feedback";
// import { Document, Page } from "@react-pdf/renderer";
interface Resource {
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

type Content = React.ReactNode;

interface DocumentModalProps {
  resource: Resource | null;
  content?: Content;
  closeModal: () => void;
  currentPage?: number;
  totalPages?: number;
  onNavigate?: (pageNumber: number) => void;
  onZoomChange?: (zoom: number) => void;
}

const Dot = () => {
  return (
    <span className="relative flex size-2">
      <span className="absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
      <span className="relative inline-flex size-2 rounded-full bg-primary-500"></span>
    </span>
  );
};

GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.mjs";

const DocumentViewer: React.FC<DocumentModalProps> = ({
  resource,
  content,
  closeModal,
  currentPage = 1,
  onNavigate,
  onZoomChange,
}) => {
  const [theTotalPages, setTheTotalPages] = useState(0);
  const [openFeedback, setOpenFeedback] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomSteps = [50, 75, 100, 125, 150, 200];
  const currentZoomIndex = zoomSteps.indexOf(zoomLevel);

  const handleZoomIn = () => {
    if (currentZoomIndex < zoomSteps.length - 1) {
      const newZoom = zoomSteps[currentZoomIndex + 1];
      setZoomLevel(newZoom);
      onZoomChange?.(newZoom);
    }
  };

  const handleZoomOut = () => {
    if (currentZoomIndex > 0) {
      const newZoom = zoomSteps[currentZoomIndex - 1];
      setZoomLevel(newZoom);
      onZoomChange?.(newZoom);
    }
  };

  const modifiedUrl = `${resource?.url}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&download=0&print=0&zoom=${zoomLevel}&view=FitH&page=${currentPage}`;

  useEffect(() => {
    const analyzePdf = async () => {
      if (!modifiedUrl) {
        console.log("No PDF URL provided");
        return;
      }
      try {
        // Load the PDF document
        const loadingTask = getDocument(modifiedUrl);
        const pdf = await loadingTask.promise;
        console.log("the pdf ==============>", pdf);
        // Get the total number of pages
        const totalPages = pdf.numPages;
        setTheTotalPages(totalPages);
      } catch (err) {
        console.error("Error analyzing PDF:", err);
        console.log("Failed to analyze PDF");
      }
    };

    analyzePdf();
  }, [modifiedUrl]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const scrollPosition = scrollTop + clientHeight / 2;
      const pageHeight = scrollHeight / theTotalPages;
      const newPage = Math.floor(scrollPosition / pageHeight) + 1;

      if (onNavigate && newPage !== currentPage) {
        onNavigate(newPage);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [theTotalPages, currentPage, onNavigate]);

  return (
    <DialogContent
      onInteractOutside={(e) => e.preventDefault()}
      onEscapeKeyDown={(e) => e.preventDefault()}
      className="max-w-sm sm:max-w-7xl font-sans h-[800px] flex flex-col"
    >
      <DialogHeader className="sticky top-0 inset-x-0 flex flex-col sm:flex-row justify-start sm:justify-between items-start bg-neutral-100 py-4 sm:py-6 px-4 sm:px-6 lg:px-8 flex-shrink-0 gap-4 sm:gap-0">
        <div className="space-y-1 flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center justify-center gap-1">
            <div className="hidden lg:block">
              <Icon icon="document" width={64} height={64} />
            </div>
            <div>
              <DialogTitle className="font-bold text-[14px] md:text-[16px] text-primary-950">
                {resource?.title} {theTotalPages}
              </DialogTitle>
              <DialogDescription className="flex items-center space-x-2">
                <span className="font-normal text-sm/[16.8px] text-neutral-600">
                  {resource?.documentType}
                </span>
                <Dot />
                <span className="font-normal text-sm/[16.8px] text-neutral-600">
                  {resource?.subject}
                </span>
                <Dot />
                <span className="font-normal text-sm/[16.8px] text-neutral-600">
                  {resource?.class}
                </span>
              </DialogDescription>
            </div>
          </div>

          <DialogClose
            onClick={closeModal}
            aria-label="Close Modal"
            className="ml-auto sm:ml-0 sm:hidden"
          >
            <Icon
              icon="close"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </DialogClose>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-2">
            <div className="bg-white border-[1px] text-[12px] md:text-[14px] font-semibold border-neutral-200 rounded-sm p-[16px] flex items-center gap-x-2">
              Bookmark <Icon icon="bookmark" width={24} height={24} />
            </div>

            <Dialog open={openFeedback} onOpenChange={setOpenFeedback}>
              <DialogTrigger asChild>
                <div
                  onClick={() => setOpenFeedback(true)}
                  className="cursor-pointer bg-white border-[1px] text-[12px] md:text-[14px] font-semibold border-neutral-200 rounded-sm p-[16px] flex items-center gap-x-2"
                >
                  <span className="">Add Comment</span>
                  <Icon icon="chat-line" width={24} height={24} />
                </div>
              </DialogTrigger>

              <AddFeedback closeModal={() => setOpenFeedback(false)} />
            </Dialog>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-white border-[1px] text-[12px] md:text-[14px] font-semibold border-neutral-200 rounded-sm p-[16px]">
              <span>
                {currentPage}/{theTotalPages}
              </span>
            </div>
            <div className="flex items-center text-[12px] md:text-[14px] font-semibold gap-x-2 bg-white border-[1px] border-neutral-200 rounded-sm p-[16px]">
              <Icon
                icon="minus-circle"
                width={24}
                height={24}
                className={`cursor-pointer ${
                  currentZoomIndex === 0 ? "opacity-50" : ""
                }`}
                onClick={handleZoomOut}
              />
              <span>{zoomLevel}%</span>
              <Icon
                icon="add-circle"
                width={24}
                height={24}
                className={`cursor-pointer ${
                  currentZoomIndex === zoomSteps.length - 1 ? "opacity-50" : ""
                }`}
                onClick={handleZoomIn}
              />
            </div>
            <DialogClose
              onClick={closeModal}
              aria-label="Close Modal"
              className="ml-auto sm:ml-0 hidden sm:block"
            >
              <Icon
                icon="close"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </DialogClose>
          </div>
        </div>
      </DialogHeader>
      <div className="flex-1 px-6 sm:px-[60px] py-10 overflow-y-auto scrollbar-thin bg-neutral-950">
        {content}
      </div>
    </DialogContent>
  );
};

export default DocumentViewer;
